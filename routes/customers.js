var express = require('express');
var router = express.Router();
const CustomerController = require('../controller/CustomerController');
const authMiddleware = require('../middleware/auth.middleware')

router.get('/', CustomerController.getCustomers);
router.get('/detail', CustomerController.detailCustomer);
router.put('/update', CustomerController.updateCustomer);
router.post('/register', CustomerController.register);
router.post('/login', CustomerController.login);
router.put('/edit', CustomerController.editCustomer);
// router.post('/login', authMiddleware.validate('login'), CustomerController.login);

module.exports = router