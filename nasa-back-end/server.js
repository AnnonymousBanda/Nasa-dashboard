const httpserver = require('http');
const app = require('./app');
const { loadHabitablePlanetData } = require('./models/planet.model.js');

require('dotenv').config();

const server = httpserver.createServer(app);

const PORT = process.env.PORT || 5000;

/*Creates a function that loads the server and awaits the habitable planet data
Since the data is being loaded asynchronously, the function is designed such that the server is only started after the data has been loaded
The loadHabitablePlanetData function returns a promise which enables us to implement the logic of 
waiting till the data is loaded before starting the server*/
loadServer = async () => {
    await loadHabitablePlanetData();

    server.listen(PORT, () => {
        console.log(
            `Server is running on port: ${PORT}\n http://localhost:${PORT}`
        );
    });
};

loadServer();
