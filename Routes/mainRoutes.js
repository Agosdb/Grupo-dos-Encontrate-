const express = require("express");
const router = express.Router();

const mainController = require ("../controllers/mainController");

router.get("/index", mainController.index);

router.get("/login", mainController.login);

router.get ("/register", mainController.register);

router.get ("/productCar", mainController.productCar);

module.exports = router;