const { Router } = require('express');
const { WantedProfileModel } = require('../repositories/models/WantedProfile');
const mostWantedRoutes = Router();

mostWantedRoutes.get('/', async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const wantedProfiles = await WantedProfileModel.find({})
        .limit(limit * 1)
        .skip((page - 1) * limit);

    const count = await WantedProfileModel.countDocuments({});

    res.status(200).json({
        wantedProfiles,
        totalPages: Math.ceil(count / limit),
        currentPage: page
    });
});

module.exports = {
    mostWantedRoutes
};
