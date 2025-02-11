const express = require('express');
const cron = require('node-cron');
const cors = require('cors');

const { ConnectDB } = require('./config/db/connection');
const { beginETL } = require('./etl_pipelines/load_to_db');
const { mostWantedRoutes } = require('./routes/getMostWanted');

const PORT = 3000;
const app = express();

app.use(cors());

app.use('/api/wanted', mostWantedRoutes);

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';

    return res.status(status).json({ error: message });
});

ConnectDB();

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
});

// run every 2 minutes
cron.schedule('*/2 * * * *', beginETL);