const express = require("express");
const router = express.Router();

const productController = require ("../controllers/productController");



router.get ("/productCar", productController.productCar);

router.get ("/productDetail", productController.productDetail);

router.get ("/productEdition", productController.productEdition);

router.get ("/registerAdministrator", productController.registerAdministrator);


module.exports = router;