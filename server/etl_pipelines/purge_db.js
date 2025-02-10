const { PurgeCycleModel } = require('../repositories/models/PurgeCycle');
const { WantedProfileModel } = require('../repositories/models/WantedProfile');

async function PurgeOldRecords() {
    const lastPurgeCycle = await PurgeCycleModel.findOne({});
    await WantedProfileModel.deleteMany({ createdAt: { $lt: lastPurgeCycle.last_purge_date } });
}

module.exports = {
    PurgeOldRecords
};
