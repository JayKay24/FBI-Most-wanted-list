const { Router } = require('express');
const { WantedProfileModel } = require('../repositories/models/WantedProfile');
const { ServiceUnavailableException } = require('../errors/503');
const { searchBy } = require('../middleware/searchBy');
const { validateId } = require('../middleware/validation');
const { NotFoundException } = require('../errors/404');
const { filterBy } = require('../middleware/filterBy');
const { getMemCached } = require('../config/cache/connection');
const memcached = getMemCached();

const mostWantedRoutes = Router();

mostWantedRoutes.get('/', searchBy, filterBy, async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const cacheKey = `${page}:${limit}`;

    try {
        const { value: cached } = await memcached.get(cacheKey);
        if (cached) {
            console.log('cache hit');
            return res.status(200).json(JSON.parse(cached)); // memcached.get always returns a buffer on the value property.
        }

        console.log('cache miss');

        const wantedProfiles = await WantedProfileModel
            .find({})
            .limit(limit * 1) // make sure it's a number and not a string
            .skip((page - 1) * limit)
            .exec();

        const count = await WantedProfileModel.countDocuments({}).exec();

        const response = {
            wantedProfiles,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        };

        await memcached.set(cacheKey, JSON.stringify(response), { expires: 600 }); // time interval in seconds
        res.status(200).json(response);
    } catch(err) {
        console.log(err);
        // To do: log this error. It's critical to know if this route handler fails.
        throw new ServiceUnavailableException();
    }
});

mostWantedRoutes.get('/:id', validateId, async (req, res) => {
    const { id } = req.params;
    const wantedProfile = await WantedProfileModel.findById(id).exec();
    if (!wantedProfile) {
        throw new NotFoundException();
    }

    return res.status(200).json(wantedProfile.toObject());
});

module.exports = {
    mostWantedRoutes
};
