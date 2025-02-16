require('dotenv').config();

module.exports = {
    url: process.env.MONGODB_URI || 'mongodb://fbi_most_wanted_db:27017/fbi_most_wanted_db'
};
