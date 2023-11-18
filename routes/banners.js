var express = require('express');
var router = express.Router();
const BannerController = require('../controller/BannerController');

router.get('/', BannerController.getBanner);
router.post('/add', BannerController.addBanner);
router.put('/edit', BannerController.updateBanner);
router.delete('/delete', BannerController.deleteBanner);

module.exports = router;