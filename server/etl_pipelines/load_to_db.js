const fs = require('fs');
const { httpClient } = require('../config/httpClient');
const { WantedProfileModel } = require('../repositories/models/WantedProfile');
const { PurgeCycleModel } = require('../repositories/models/PurgeCycle');

const MAX_ITEMS_TO_STORE = 100;

async function beginETL() {
    console.log('ETL process has started...');
    await purgeOldRecords();

    try {
        for (let i = 0; i < 5; i++) { // each request fetches 20 items, store 100 in total in our db
            const { data: { items } } = await httpClient.get('/');

            for (let i = 0; i < items.length; i++) {
                if (i === MAX_ITEMS_TO_STORE) break;
                
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
            }
            
            await sleep(2000); // To do: include randomness to keep the request behavior like a human's
        }

        await PurgeCycleModel.deleteMany({});
        const newCycle = new PurgeCycleModel({});
        await newCycle.save();
    } catch (error) {
        // To do: log this error. It's critical to know if the ETL process fails.
        console.log('Failed!!', error.message);
        fs.writeFileSync('./error.txt', JSON.stringify(error, null, 2));
    }

    console.log('ETL process has ended.');
}

async function purgeOldRecords() {
    const lastPurgeCycle = await PurgeCycleModel.findOne({});
    await WantedProfileModel.deleteMany({ createdAt: { $lt: lastPurgeCycle.last_purge_date } });
}

function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

module.exports = {
    beginETL
};