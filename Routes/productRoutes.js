const express = require("express");
const router = express.Router();
const path = require('path');
const multer = require('multer');

const productController = require ("../controllers/productController");

// Multer
const storage = multer.diskStorage({ 
   destination: (req, file, cb) => { 
      cb(null, './public/img'); 
   }, 
   filename: (req, file, cb) => { 
       let fileName= `${Date.now()}${path.extname(file.originalname)}`;
      cb(null, fileName);
   } 
 }) 
      
  
var uploadFile = multer({ storage: storage })

router.get ("/products", productController.products);

router.get ("/productDetail/:id", productController.productDetail);

router.get ("/productCar", productController.productCar);

router.get ("/productEdition", productController.productEdition);

router.get ("/registerAdministrator", productController.registerAdministrator);

/*** GET ALL PRODUCTS ***/ 
// router.get ("/products", productController.product);

/*** CREATE ONE PRODUCT ***/ 
router.get('/products', productController.create); 
router.post('/products', uploadFile.single('image'), productController.store); 

/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id/', productController.products);

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productController.edit); 
router.put('/:id', uploadFile.single('image'), productController.update);

/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', productController.destroy); 

/*** Guardar producto***/ 

module.exports = router;