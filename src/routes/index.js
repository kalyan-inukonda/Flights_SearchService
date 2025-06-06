const express = require('express');
const routers = express.Router();

const v1Apiroutes = require('./v1/index');

routers.use('/v1',v1Apiroutes); 

module.exports = routers;