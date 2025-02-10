const express = require('express');
const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello, my server is using Express.');
});

app.get('/api/wanted', (req, res) => {
    res.status(200).send('This is the wanted list API.');
});

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
});