const launches = require('./../models/launch.model');

const getAllLaunchData = (req, res) => {
    return res.json(Array.from(launches.values()));//return all the values of the map as an array
};

module.exports = {
    getAllLaunchData,
};
