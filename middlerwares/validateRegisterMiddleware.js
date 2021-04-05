
const path = require('path');
const { body } = require('express-validator');

function  validations (req, res, next) {
    let file = req.file;
    let acceptedExtensions = ['.jpg', '.png', '.gif'];

    if (!file) {
        throw new Error('Debes subir una imagen');            
    } else {
        let fileExtension = path.extname(file.originalname);
        if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(',')}`);
        }
        next();
    }
}
module.exports = validations;








// function validations = [
    // body('userName').notEmpty().withMessage('Selecciona tu nombre de usuario'),
    // body('first_name').notEmpty().withMessage('Completa tu nombre'),
    // body('last_name').notEmpty().withMessage('Completa tu apellido'),
    // body('email').notEmpty().withMessage('Completa tu mail'),
    // body('password').notEmpty().withMessage('Completa tu contraseña'),
    // body('category').notEmpty().withMessage('Selecciona tu categoría'),
//         let file = req.file;
//         let acceptedExtensions = ['.jpg', '.png', '.gif'];

//         if (!file) {
//             throw new Error('Debes subir una imagen');            
//         } else {
//             let fileExtension = path.extname(file.originalname);
//             if (!acceptedExtensions.includes(fileExtension)) {
//                 throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(',')`};
//             }
//         }
// ];
// module.exports = validations;