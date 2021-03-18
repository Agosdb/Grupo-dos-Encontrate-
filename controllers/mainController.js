const fs = require('fs');
const path = require('path');

const productDetailFilePath = path.join(__dirname, '../data/productDataBase.json');


const controller = {
    index: (req, res) => {
        return res.render("index");
         //entre comillas el nombre de lo que queremos mostrar//cambie el send 
    //por el render para renderizar la vista//
    },
    login: (req, res) => {
        return res.render("login");
        },
    register: (req, res) => {
       return res.render("register");
        },

        search: (req, res) => {
            const productDetail = JSON.parse(fs.readFileSync(productDetailFilePath, 'utf-8'));
            let search = req.query.keywords;
            let productDetailToSearch = productDetail.filter(product => product.name.toLowerCase().includes(search));	
            res.render('results', { 
                productDetail: productDetailToSearch, 
                search,
            
            });
        },
    };
  
  
    module.exports = controller;