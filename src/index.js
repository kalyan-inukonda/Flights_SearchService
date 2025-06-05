const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const CityRepository = require('./repository/city-repository');

const setupAndstartServer = async () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
    app.listen(PORT,() => {
        console.log(`server started at ${PORT}`);
        const obj = new CityRepository();
        obj.createCity({name:"New Delhi"});
    });
};

setupAndstartServer();