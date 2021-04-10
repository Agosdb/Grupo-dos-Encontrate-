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