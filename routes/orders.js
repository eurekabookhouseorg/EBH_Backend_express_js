var express = require('express');
var router = express.Router();
const OrderController = require('../controller/OrderController');

router.get('/', OrderController.getOrder);
router.get('/detail', OrderController.detailOrder);
router.post('/', OrderController.checkoutProduct);
router.post('/mitrans', OrderController.mitrans);

module.exports = router;