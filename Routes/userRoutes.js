const express = require("express");
const router = express.Router();
const path = require('path');
const multer = require('multer');
const​ { body } ​=​​ require​(​'express-validator'​);


const usersController = require ("../controllers/userController");

//Middleware
const uploadFile= require('../middleware/multerMiddleware');
const validations= require('../middleware/validateRegisterMiddleware');
const guestMiddleware= require('../middleware/guestMiddleware');
const authMiddleware= require('../middleware/authMiddleware');



const validations = [
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
router.get("/profile", authMiddleware, usersController.profile);

router.get("/logout", usersController.logout);



router.get ("/register", guestMiddleware, usersController.register);
router.post ("/register", uploadFile.single('avatars'), validations ,usersController.processRegister);



/*** CREATE ONE USERS ***/ 
router.get('/create', usersController.create); 
router.post('/users', uploadFile.single('avatars'), usersController.store); 

/*** GET ONE USERS ***/ 
router.get('/detail/:id/', usersController.register);

/*** EDIT ONE USERS ***/ 
router.get('/edit/:id', usersController.edit); 
router.put('/:id', uploadFile.single('avatars'), usersController.update);

/*** DELETE ONE USERS***/ 
router.delete('/:id', usersController.destroy); 

module.exports = router;