const express = require('express');
const { getAllLaunchData, setLauchData } = require('./../controllers/launch.controller.js');

const route = express.Router();

route.route('/').get(getAllLaunchData).post(setLauchData);

module.exports = route;
