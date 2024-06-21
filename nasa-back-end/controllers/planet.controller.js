const {habitablePlanets} = require('../models/planet.model.js');

const getAllPlanets = (req, res) => {
    return res.json(habitablePlanets);
};

module.exports = { getAllPlanets };
