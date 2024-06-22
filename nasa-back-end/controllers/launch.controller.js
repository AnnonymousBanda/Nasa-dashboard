const launches = require('./../models/launch.model');

const getAllLaunchData = (req, res) => {
    return res.json(Array.from(launches.values())); //return all the values of the map as an array
};

const setLauchData = (req, res) => {
    let launch = req.body;

    if (
        !launch.mission ||
        !launch.rocket ||
        !launch.launchDate ||
        !launch.target
    ) {
        return res.status(400).json({
            error: 'Missing required launch data',
        });
    }

    launch = {
        ...launch,
        upcoming: true,
        success: true,
        customers: ['ZTM', 'NASA'],
        flightNumber: launches.size + 100,
    };
    launch.launchDate = new Date(launch.launchDate);

    if (isNaN(launch.launchDate)) {
        return res.status(400).json({
            error: 'Invalid launch date',
        });
    }

    launches.set(launch.flightNumber, launch);

    return res.status(201).json(launch);
};

const removeLaunchData = (req, res) => {
    const id = req.params.id;

    const launchData = launches.get(Number(id));

    if(!launchData){
        return res.status(404).json({
            error: 'Launch data not found',
        });
    }
    
    launchData.upcoming = false;
    launchData.success = false;

    return res.status(200).json(launchData);
};

module.exports = {
    getAllLaunchData,
    setLauchData,
    removeLaunchData,
};
