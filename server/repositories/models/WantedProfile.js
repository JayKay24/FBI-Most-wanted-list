const mongoose = require('mongoose');

const WantedProfileSchema = new mongoose.Schema({
    name: { type: String, default: '' },
    sex: { type: String, default: '' },
    hair: { type: String, default: '' },
    dobs: { type: [String], default: []},
    occupations: { type: [String], default: [] },
    caution: { type: String, default: '' },
    nationality: { type: String, default: '' },
    complexion: { type: String, default: '' },
    caution: { type: String, default: '' },
    eyes: { type: String, default: '' },
    subjects: { type: [String], default: [] },
    aliases: { type: [String], default: [] },
    title: { type: String, default: '' },
    race_raw: { type: String, default: '' },
    pathId: { type: String, default: '' },
    languages: { type: [String], default: [] },
    field_offices: { type: [String], default: [] },
    url: { type: String, default: '' },
    images: {
        type: [
            {
                large: { type: String, default: '' },
                caption: { type: String, default: '' },
                thumb: { type: String, default: '' },
                original: { type: String, default: '' }
            }
        ],
        default: []
    },
}, {
    timestamps: true
});

const WantedProfileModel = mongoose.model('WantedProfile', WantedProfileSchema);

module.exports = {
    WantedProfileModel
};
