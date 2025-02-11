const { WantedProfileModel } = require('../repositories/models/WantedProfile');

async function searchBy(req, res, next) {
    const { page = 1, limit = 10, search = '' } = req.query;
    if (!search) return next();

    const wantedProfiles = await WantedProfileModel
        .find({ $or: [{ name: search }, { hair: search }, { sex: search }] })
        .limit(limit * 1) // make sure it's a number and not a string
        .skip((page - 1) * limit)
        .exec();
    const count = await WantedProfileModel.countDocuments({ $or: [{ name: search }, { hair: search }] }).exec();

    return res.status(200).json({
        wantedProfiles,
        totalPages: Math.ceil(count / limit),
        currentPage: page
    });
}

module.exports = {
    searchBy
};
