const express = require('express');
const cron = require('node-cron');

const { beginETL } = require('./etl');
const { mostWantedRoutes } = require('./routes/getMostWanted');

const PORT = 3000;
const app = express();

app.use('/api/wanted', mostWantedRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
});

cron.schedule('* * * * * *', beginETL);