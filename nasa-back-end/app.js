const express = require('express');
const cors = require('cors');
const { planetRoute } = require('./routes/index.js');

const app = express();

app.use(
    cors({
        origin: 'http://localhost:3000',
    })
);
app.use(express.json());

app.use(planetRoute);

app.use('*', (req, res) => {
    res.status(404).json({
        error: 'Route not found',
    });
});

module.exports = app;
