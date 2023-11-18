var express = require('express');
var router = express.Router();
const GuestController = require('../controller/GuestController')

router.get('/', GuestController.getGuest);
router.get('/:id', GuestController.findGuest);
router.delete('/:id', GuestController.deleteUser);

module.exports = router;