var express = require('express');
var router = express.Router();
const CustomerController = require('../controller/CustomerController');
const authMiddleware = require('../middleware/auth.middleware')
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './assets/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({storage: storage});

router.get('/', CustomerController.getCustomers);
router.get('/detail', CustomerController.detailCustomer);
router.put('/update', CustomerController.updateCustomer);
router.post('/register', CustomerController.register);
router.post('/login', CustomerController.login);
router.put('/edit', upload.single('avatar'),CustomerController.editCustomer);
// router.post('/login', authMiddleware.validate('login'), CustomerController.login);

module.exports = router