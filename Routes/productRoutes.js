const express = require("express");
const router = express.Router();
const path = require('path');
const multer = require('multer');

const productController = require ("../controllers/productController");

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

router.get ("/products", productController.productDetail);

router.get ("/productDetail", productController.productDetail);

router.get ("/productCar", productController.productCar);

router.get ("/productEdition", productController.productEdition);

router.get ("/registerAdministrator", productController.registerAdministrator);

/*** GET ALL PRODUCTS ***/ 
router.get ("/listProduct", productController.listProduct);

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productController.create); 
router.post('/', uploadFile.single('image'), productController.store); 

/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id/', productController.listProduct);

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productController.edit); 
router.put('/:id', uploadFile.single('image'), productController.update);

/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', productController.destroy); 

/*** Guardar producto***/ 
// router.post("/save", productController.saveProduct);

module.exports = router;