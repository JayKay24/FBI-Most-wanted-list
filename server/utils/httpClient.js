const axios = require('axios');

const httpClient = axios.create({
    baseURL: 'https://api.fbi.gov/wanted/v1/list',
    timeout: 4000,
});

module.exports = {
    httpClient
};
