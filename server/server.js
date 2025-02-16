const cron = require('node-cron');
const { app } = require('./app');
const { ConnectDB } = require('./config/db/connection');
const { beginETL } = require('./etl_pipelines/load_to_db');

const PORT = 3000;

ConnectDB();
app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
});

// run every 2 minutes
cron.schedule('*/2 * * * *', beginETL);
