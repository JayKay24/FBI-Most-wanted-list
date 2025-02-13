const { WantedProfileModel } = require('../repositories/models/WantedProfile');

async function filterBy(req, res, next) {
    const { page = 1, limit = 10, hair_color = '', eye_color = '' } = req.query;
    if (!hair_color && !eye_color) return next();

    if (hair_color && !eye_color) {
        const wantedProfiles = await WantedProfileModel.find({
          hair: hair_color
        })
          .limit(limit * 1)
          .skip((page - 1) * limit)
          .exec();

        const count = await WantedProfileModel.countDocuments({
          hair: hair_color
        }).exec();

        return res.status(200).json({
          wantedProfiles,
          totalPages: Math.ceil(count / limit),
          currentPage: page
        });
    } else if (!hair_color && eye_color) {
        const wantedProfiles = await WantedProfileModel.find({
            eyes: eye_color
          })
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        const count = await WantedProfileModel.countDocuments({
          eyes: eye_color
        }).exec();

        return res.status(200).json({
          wantedProfiles,
          totalPages: Math.ceil(count / limit),
          currentPage: page
        });
    } else {
        const wantedProfiles = await WantedProfileModel.find({
          hair: hair_color,
          eyes: eye_color
        })
          .limit(limit * 1)
          .skip((page - 1) * limit)
          .exec();

        const count = await WantedProfileModel.countDocuments({
          hair: hair_color,
          eyes: eye_color
        }).exec();

        return res.status(200).json({
          wantedProfiles,
          totalPages: Math.ceil(count / limit),
          currentPage: page
        });
    }
}

module.exports = {
    filterBy
};
