const express = require("express");
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { body } = require('express-validator'); 

const usersController = require ("../controllers/userController");
//////////////////////////////////////////////////////////////
//Middleware
// const uploadFile= require('../middleware/multerMiddleware');
const extensionValidations= require('../../middlewares/validateRegisterMiddleware');
const guestMiddleware= require('../../middlewares/guestMiddleware');
const authMiddleware= require('../../middlewares/authMiddleware');


//Validaciones //////////////////////////////////////
const bodyValidations = [
   // body('userName').notEmpty().withMessage('Selecciona tu nombre de usuario'),
   body('first_name').notEmpty().withMessage('Completa tu nombre'),
   body('last_name').notEmpty().withMessage('Completa tu apellido'),
   body('email').notEmpty().withMessage('Completa tu mail'),
   body('password').notEmpty().withMessage('Completa tu contraseña'),
   body('level').notEmpty().withMessage('Selecciona tu categoría'),
];

// Multer ////////////////////////////////////////////
const storage = multer.diskStorage({ 
    destination: (req, file, cb) => { 
       cb(null, './public/img/avatar'); 
    }, 
    filename: (req, file, cb) => { 
        let fileName= `${Date.now()}_img${path.extname(file.originalname)}`;
       cb(null, fileName);
    } 
  })       
  
var uploadFile = multer({ storage: storage })
/////////////////////////////////////////////////////////////////////

//loginProcess

router.get("/login", guestMiddleware, usersController.login);
router.post("/login", usersController.loginProcess);

//Register

router.get ("/register", guestMiddleware, usersController.register);
router.post ("/register", uploadFile.single('avatar'), bodyValidations ,extensionValidations, usersController.processRegister);

//logout
router.get("/logout", usersController.logout); // falta userLoggedMiddleware

/*** CREATE ONE USERS ***/ 
router.get('/create', usersController.create); 
router.post('/', uploadFile.single('avatar'), usersController.store); 

/*** GET ONE USERS ***/ 
router.get('/detail/:id/', usersController.register);

/*** EDIT ONE USERS ***/ 
router.get('/edit/:id', usersController.edit); 
router.put('/:id', uploadFile.single('avatar'), usersController.update);

/*** DELETE ONE USERS***/ 
router.delete('/:id', usersController.destroy); 

// Perfil de Usuario
router.get('/profile/', authMiddleware, usersController.profile); //authMiddleware

module.exports = router;