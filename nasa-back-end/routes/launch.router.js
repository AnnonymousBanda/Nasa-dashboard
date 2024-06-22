const express = require('express');
const { getAllLaunchData } = require('./../controllers/launch.controller.js');

const route = express.Router();

route.route('/launches').get(getAllLaunchData);

module.exports = route;
