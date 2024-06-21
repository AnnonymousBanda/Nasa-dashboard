const express = require('express');
const path = require('path');
const cors = require('cors');
const { planetRoute } = require('./routes/index.js');

const app = express();

app.use(
    cors({
        origin: 'http://localhost:3000',
    })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'src')));

app.use(planetRoute);

// app.route('/').get((req, res) => {
//     res.sendFile(path.join(__dirname, 'src', 'index.html'));
// });

app.use('*', (req, res) => {
    res.status(404).json({
        error: 'Route not found',
    });
});

module.exports = app;
