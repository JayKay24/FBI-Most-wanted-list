const memjs = require('memjs');
const { url: cacheURL } = require('./cacheConfig');

function getMemCached() {
  try {
    const memcached = memjs.Client.create(cacheURL);
    return memcached;
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

module.exports = {
  getMemCached
};
