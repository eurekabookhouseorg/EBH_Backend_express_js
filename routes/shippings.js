var express = require('express');
var router = express.Router();
const ShippingController = require('../controller/ShippingController');

router.get('/country', ShippingController.getCountries);
router.get('/province', ShippingController.getProvince);
router.get('/city', ShippingController.getCity);
router.post('/alamat', ShippingController.createAlamat);
router.put('/edit/alamat', ShippingController.editAlamat);
router.delete('/delete/alamat', ShippingController.deleteAlamat);
router.get('/alamat', ShippingController.getAlamat);
router.get('/zone', ShippingController.getZone);
router.get('/detail/checkout', ShippingController.detailCheckout);
router.put('/edit/alamatFavorite', ShippingController.alamatFavorite);
router.post('/cekHarga', ShippingController.cekHarga);
router.get('/newProvince', ShippingController.getProvince);

module.exports = router;