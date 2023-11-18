var express = require('express');
var router = express.Router();
const ProductController = require('../controller/ProductController')

router.get('/', ProductController.getProduct);
router.get('/detail/:product_id', ProductController.detailProduct);
router.get('/erlangga', ProductController.getProductErlangga);
router.get('/all', ProductController.getAllProduct);
router.get('/terbaru', ProductController.getProductTerbaru);
router.get('/tam', ProductController.getProductTam);
router.get('/kesehatan', ProductController.getProductKesehatan);
router.get('/novel', ProductController.getProductNovel);
router.get('/productcategory', ProductController.getAllProductWithCategories);

module.exports = router;