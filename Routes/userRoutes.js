const express = require("express");
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { body } = require('express-validator'); 

const usersController = require ("../controllers/userController");

//Middleware
// const uploadFile= require('../middleware/multerMiddleware');
const extensionValidations= require('../middlewares/validateRegisterMiddleware');
const guestMiddleware= require('../middlewares/guestMiddleware');
const authMiddleware= require('../middlewares/authMiddleware');



const bodyValidations = [
   body('userName').notEmpty().withMessage('Selecciona tu nombre de usuario'),
   body('first_name').notEmpty().withMessage('Completa tu nombre'),
   body('last_name').notEmpty().withMessage('Completa tu apellido'),
   body('email').notEmpty().withMessage('Completa tu mail'),
   body('password').notEmpty().withMessage('Completa tu contraseña'),
   body('category').notEmpty().withMessage('Selecciona tu categoría'),
];

// Multer
const storage = multer.diskStorage({ 
    destination: (req, file, cb) => { 
       cb(null, './public/img/avatars'); 
    }, 
    filename: (req, file, cb) => { 
        let fileName= `${Date.now()}_img${path.extname(file.originalname)}`;
       cb(null, fileName);
    } 
  })       
  
var uploadFile = multer({ storage: storage })

router.get("/login", guestMiddleware, usersController.login);
router.get("/profile/", authMiddleware, usersController.profile);

router.get("/logout", usersController.logout); // falta userLoggedMiddleware

router.get ("/register", guestMiddleware, usersController.register);
router.post ("/register", uploadFile.single('avatars'), bodyValidations ,extensionValidations, usersController.processRegister);



/*** CREATE ONE USERS ***/ 
router.get('/create', usersController.create); 
router.post('/users', uploadFile.single('avatars'), usersController.store); 

/*** GET ONE USERS ***/ 
router.get('/detail/:id/', usersController.register);

/*** EDIT ONE USERS ***/ 
router.get('/edit/:id', usersController.edit); 
router.put('/users/:id', uploadFile.single('avatars'), usersController.update);

/*** DELETE ONE USERS***/ 
router.delete('/users/:id', usersController.destroy); 

module.exports = router;