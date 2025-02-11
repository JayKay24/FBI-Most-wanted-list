const { Router } = require('express');
const { WantedProfileModel } = require('../repositories/models/WantedProfile');
const { ServiceUnavailableException } = require('../errors/503');
const { paginate } = require('../utils/paginator');
const { searchBy } = require('../middleware/searchBy');

const mostWantedRoutes = Router();

mostWantedRoutes.get('/', searchBy, async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        const query = await WantedProfileModel.find({});
        const wantedProfiles = await paginate(query, page, limit);

        const count = await WantedProfileModel.countDocuments({}).exec();

        res.status(200).json({
            wantedProfiles,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } catch(err) {
        console.log(err);
        // To do: log this error. It's critical to know if this route handler fails.
        throw new ServiceUnavailableException();
    }
});

module.exports = {
    mostWantedRoutes
};
