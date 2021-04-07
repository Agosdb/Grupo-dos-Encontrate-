const express = require("express");
const router = express.Router();
// const path = require('path');
// const multer = require('multer');

const mainController = require ("../controllers/mainController");

router.get("/", mainController.index);
router.get ("/enConstruccion", mainController.enConstruccion);



module.exports = router;