const mongoose = require('mongoose');

const WantedProfileSchema = new mongoose.Schema({
    name: { type: String, default: '' },
    sex: { type: String, default: '' },
    hair: { type: String, default: '' },
    dobs: [String],
    occupations: [String],
    caution: { type: String, default: '' },
    nationality: { type: String, default: '' },
    complexion: { type: String, default: '' },
    eyes: { type: String, default: '' },
    subjects: [String],
    aliases: [String],
    title: { type: String, default: '' },
    race_raw: { type: String, default: '' },
    pathId: { type: String, default: '' },
    languages: [String],
    field_offices: [String],
    images: [
        {
            large: { type: String, default: '' },
            caption: { type: String, default: '' },
            thumb: { type: String, default: '' },
            original: { type: String, default: '' }
        }
    ]
});

const WantedProfileModel = mongoose.model('WantedProfile', WantedProfileSchema);

module.exports = {
    WantedProfileModel
};
