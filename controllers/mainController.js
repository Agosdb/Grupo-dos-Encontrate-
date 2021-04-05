const { SSL_OP_NO_TLSv1_1 } = require('constants');
const fs = require('fs');
const path = require('path');



const controller = {
    index: (req, res) => {
        // res.send ("HOla");
        res.render('index');
    },
   
   
    enConstruccion: (req, res) => {
        return res.render("enConstruccion");
        },
	}
    

  
  
    module.exports = controller;