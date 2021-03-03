const express = require("express");
const router = express.Router();

const mainController = require ("../controllers/mainController");

router.get("/index", mainController.index);

router.get("/login", mainController.login);

router.get ("/register", mainController.register);

router.get ("/productCar", mainController.productCar);

router.get ("/productDetail", mainController.productDetail);

router.get ("/productEdition", mainController.productEdition);

router.get ("/registerAdministrator", mainController.registerAdministrator);

module.exports = router;