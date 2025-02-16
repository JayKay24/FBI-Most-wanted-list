require('dotenv').config();

module.exports = {
  url: process.env.MEMCACHED_URI || 'fbi_most_wanted_cache:11211'
};
