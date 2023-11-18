var express = require('express');
var router = express.Router();
const ReviewController = require('../controller/ReviewController');

router.get('/:product_id', ReviewController.getReview);

module.exports = router;