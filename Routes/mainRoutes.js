const express = require("express");
const router = express.Router();
const path = require('path');
const multer = require('multer');

const mainController = require ("../controllers/mainController");

// Multer
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/img'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);  
    } 
  }) 
      
  
var uploadFile = multer({ storage: storage })

router.get("/", mainController.index);
router.get ("/enConstruccion", mainController.enConstruccion);



module.exports = router;