const express = require('express');
const cors = require('cors');

const { mostWantedRoutes } = require('./routes/getMostWantedProfiles');

const app = express();

app.use(cors());

app.use('/api/wanted', mostWantedRoutes);

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';

    return res.status(status).json({ error: message });
});

module.exports = {
  app
};