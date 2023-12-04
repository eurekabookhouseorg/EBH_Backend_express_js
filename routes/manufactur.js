var express = require('express');
var router = express.Router();
const ManufacturerController = require('../controller/ManufacturerController')

router.get('/', ManufacturerController.getManufacturer);

module.exports = router;