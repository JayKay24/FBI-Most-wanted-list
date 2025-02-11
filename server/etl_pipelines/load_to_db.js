const { httpClient } = require('../config/httpClient');
const { WantedProfileModel } = require('../repositories/models/WantedProfile');
const { PurgeCycleModel } = require('../repositories/models/PurgeCycle');
const { ETL_Config } = require('../config/etl');

async function beginETL() {
    console.log('ETL process has started...');

    try {
        if (ETL_Config.DB_HAS_ENOUGH_PROFILES) { // for local development only to avoid over-fetching and rate limiting issues
            const countOfProfiles = await WantedProfileModel.countDocuments({}).exec();
            if (countOfProfiles >= 10) {
                console.log('Db has enough profiles to begin work; stopping fetching from FBI API...');
                return;
            }
        }

        await purgeOldRecords();

        outer: for (let i = 0; i < ETL_Config.MAX_FETCHES_TO_FBI_API; i++) { // each request fetches 20 items, store 100 in total in our db
            console.log('Beginning fetching...');
            const { data: { items } } = await httpClient.get('/');
            console.log('fetched successfully...', items);

            for (let i = 0; i < items.length; i++) {
                if (i === ETL_Config.MAX_ITEMS_TO_STORE) break outer;
                
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
        // To do: log this error in ELK. It's critical to know if the ETL process fails.
        console.log(error);
        console.log('Failed!!', error.message);
    } finally {
        console.log('ETL process has ended.');
    }
}

async function purgeOldRecords() {
    console.log('Purging old records...');
    const countPurgedRecords = await PurgeCycleModel.countDocuments({}).exec();
    if (countPurgedRecords === 0) {
        console.log('No records to purge.');
        return;
    }
    const lastPurgeCycle = await PurgeCycleModel.findOne({});
    await WantedProfileModel.deleteMany({ createdAt: { $lt: lastPurgeCycle.createdAt } });
    console.log('Old records purged successfully.');
}

function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

module.exports = {
    beginETL
};