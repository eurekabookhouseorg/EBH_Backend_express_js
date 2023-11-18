var express = require('express');
var router = express.Router();
const ProductDescriptionController = require('../controller/ProductDescriptionController');

router.get('/', ProductDescriptionController.getProductDesc);
router.get('/detail', ProductDescriptionController.detailProductDesc);
router.post('/add', ProductDescriptionController.addProductDesc);
router.delete('/', ProductDescriptionController.deleteProductDesc);
router.put('/edit', ProductDescriptionController.updateProductDesc);

module.exports = router;