const WantedProfileModel = require('../repositories/models/WantedProfile');

async function searchBy(req, res, next) {
    const { search = '' } = req.params;
    if (!search) return next();

    const results = await WantedProfileModel.find({ $or: [{ name: search }, { hair: search }] }).exec();
    

}

module.exports = {
    searchBy
};
