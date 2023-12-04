var express = require('express');
var router = express.Router();
const CategoryController = require('../controller/CategoryController');

router.get('/', CategoryController.getCategories);
router.get('/sub', CategoryController.getSubCategories);
router.get('/detail', CategoryController.detailCetegory);
router.get('/mega-menu', CategoryController.megaMenuCategories);
router.get('/menu/:slug', CategoryController.detailSlugCategory);

module.exports = router;