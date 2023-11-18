var express = require('express');
var router = express.Router();
const CartController = require('../controller/CartController')

router.get('/', CartController.getCart);
router.get('/detailHarga', CartController.detailHarga);
router.get('/notification', CartController.getCartWithNotification);
router.post('/add', CartController.addToCart);
router.delete('/delete', CartController.deleteCart);
router.delete('/delete/manufactur', CartController.deleteProductsByCustomerAndManufacturer);
router.put('/updateCart', CartController.updateCart);

module.exports = router;