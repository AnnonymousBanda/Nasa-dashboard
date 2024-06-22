const express = require('express');
const {
    getAllLaunchData,
    setLauchData,
    removeLaunchData,
} = require('./../controllers/launch.controller.js');

const route = express.Router();

route.route('/').get(getAllLaunchData).post(setLauchData);
route.route('/:id').delete(removeLaunchData);

module.exports = route;
