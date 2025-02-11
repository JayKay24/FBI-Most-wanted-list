const { Router } = require('express');
const { WantedProfileModel } = require('../repositories/models/WantedProfile');
const { ServiceUnavailableException } = require('../errors/503');

const mostWantedRoutes = Router();

mostWantedRoutes.get('/', async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        const wantedProfiles = await WantedProfileModel.find({})
            .limit(limit * 1)
            .skip((page - 1) * limit);

        const count = await WantedProfileModel.countDocuments({});

        res.status(200).json({
            wantedProfiles,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } catch(err) {
        // To do: log this error. It's critical to know if this route handler fails.
        throw new ServiceUnavailableException();
    }
});

module.exports = {
    mostWantedRoutes
};
