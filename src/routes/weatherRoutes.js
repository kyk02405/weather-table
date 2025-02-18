
const express = require('express');
const { getWeather } = require('../controllers/weatherController');
const router = express.Router();

router.get('/:firstDist', getWeather);

module.exports = router;