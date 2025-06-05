const express = require('express');

const { PORT } = require('./config/serverConfig');
const setupAndstartServer = () => {

    const app = express();
    app.listen(PORT,() => {
        console.log(`server started at ${PORT}`);
    });
};

setupAndstartServer();