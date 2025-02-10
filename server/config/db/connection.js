const mongoose = require('mongoose');
const dbConfig = require('./dbConfig');

async function ConnectDB() {
    try {
        const conn = await mongoose.connect(dbConfig.url);
        console.log(`MongoDB connected successfully!!: ${conn.connection.host}`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = {
    ConnectDB
};
