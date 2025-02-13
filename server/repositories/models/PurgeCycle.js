const mongoose = require('mongoose');

const PurgeCycleSchema = new mongoose.Schema({
    last_purge_date: { type: Date, default: Date.now }
}, {
    timestamps: true
});

const PurgeCycleModel = mongoose.model('PurgeCycle', PurgeCycleSchema);

module.exports = {
    PurgeCycleModel
};
