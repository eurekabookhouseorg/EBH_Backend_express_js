var express = require('express');
var router = express.Router();
const BlogsController = require('../controller/BlogsController')

router.get('/', BlogsController.getBlogs);
router.get('/detail', BlogsController.detailBlogs);
router.put('/update', BlogsController.updateBlogs);
router.post('/add', BlogsController.addBlogs);
router.delete('/', BlogsController.deleteBlogs);

module.exports = router;