const { httpClient } = require('../utils/httpClient');
const { WantedProfileModel } = require('../repositories/models/WantedProfile');
const { PurgeCycleModel } = require('../repositories/models/PurgeCycle');;

async function beginETL() {
    console.log('ETL process has started...');
    const { data: { items } } = httpClient.get('/');

    for (let i = 0; i < items.length; i++) {
        if (i === 200) break;
        
        const wantedProfile = new WantedProfileModel({
            name: items[i].name,
            sex: items[i].sex,
            hair: items[i].hair,
            dobs: items[i].dates_of_birth_used,
            occupations: items[i].occupations,
            caution: items[i].caution,
            nationality: items[i].nationality,
            complexion: items[i].complexion,
            eyes: items[i].eyes,
            subjects: items[i].subjects,
            aliases: items[i].aliases,
            title: items[i].title,
            race_raw: items[i].race_raw,
            pathId: items[i].pathId,
            languages: items[i].languages,
            field_offices: items[i].field_offices,
            images: items[i].images
        });

        await wantedProfile.save();
        await PurgeCycleModel.deleteMany({});
        const newCycle = new PurgeCycleModel({});
        await newCycle.save();
    }

    console.log('etl process ended');
}

module.exports = {
    beginETL
};