const WantedProfileModel = require('../repositories/models/WantedProfile');
const paginator = require('../utils/paginator');

async function searchBy(req, res, next) {
    const { page = 1, limit = 10 } = req.query;
    const { search = '' } = req.params;
    if (!search) return next();

    const query = await WantedProfileModel.find({ $or: [{ name: search }, { hair: search }] });
    const count = await WantedProfileModel.countDocuments({ $or: [{ name: search }, { hair: search }] }).exec();

    const wantedProfiles = await paginator(query, page, limit);

    return res.status(200).json({
        wantedProfiles,
        totalPages: Math.ceil(count / limit),
        currentPage: page
    });
}

module.exports = {
    searchBy
};
