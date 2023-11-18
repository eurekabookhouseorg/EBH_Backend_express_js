var express = require('express');
var router = express.Router();
const SliderController = require('../controller/SliderController');

router.get('/', SliderController.getSliders);

module.exports = router