var express = require('express');
var router = express.Router();
const orderController = require('../controller/orderController');

router.get('/', orderController.getOrder);
router.get('/detail', orderController.detailOrder);
router.post('/', orderController.checkoutProduct);

module.exports = router;