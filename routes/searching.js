var express = require('express');
var router = express.Router();
const searchController = require('../controller/SearchController');

router.get('/', searchController.getProduct);

module.exports = router;