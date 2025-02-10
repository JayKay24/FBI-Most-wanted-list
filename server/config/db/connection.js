const mongoose = require('mongoose');
const dbConfig = require('./dbConfig');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, { useNewUrlParser: true })
    .then(() => {
        console.log('Database connecteed successfully!!')
    })
    .catch(() => {
        console.log('Could not connect to the database!!', err);
        process.exit();
    });
