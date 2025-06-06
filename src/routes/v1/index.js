const express = require('express');
const cityController = require('../../controllers/city-controller');
const flightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');
const router = express.Router();

router.post('/city',cityController.create);
router.delete('/city/:id',cityController.destory);
router.get('/city/:id',cityController.get);
router.get('/city',cityController.getAll);
router.patch('/city/:id',cityController.update);

router.post('/flights',flightController.create);
router.get('/flights',flightController.getAll);

router.post('/airports',AirportController.create);

module.exports = router;