const express = require("express");
const router = express.Router();

const productController = require ("../controllers/productController");



router.get ("/productCar", productController.productCar);

router.get ("/productDetail", productController.productDetail);

router.get ("/productEdition", productController.productEdition);

router.get ("/registerAdministrator", productController.registerAdministrator);

router.get ("/listProduct", productController.listProduct);


// router.post ("/registerAdministrator", productController.create);

// router.post("/save", productController.saveProduct);

module.exports = router;