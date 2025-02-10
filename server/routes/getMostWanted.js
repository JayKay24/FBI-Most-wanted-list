const { Router } = require('express');
const mostWantedRoutes = Router();

mostWantedRoutes.get('/', (req, res) => {
    res.status(200).send('This is the wanted list API.');
});

module.exports = {
    mostWantedRoutes
};
