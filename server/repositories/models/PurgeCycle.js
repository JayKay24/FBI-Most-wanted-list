const { Schema } = require('mongoose');

const PurgeCycleSchema = new Schema({
    last_purge_date: { type: Date, default: Date.now }
});

const PurgeCycleModel = mongoose.model('PurgeCycle', PurgeCycleSchema);

module.exports = {
    PurgeCycleModel
};
