const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productDataBase.json');


const controller = {
    index: (req, res) => {
        return res.render('index');
         //entre comillas el nombre de lo que queremos mostrar//cambie el send 
    //por el render para renderizar la vista//
    },
    login: (req, res) => {
        return res.render("login");
        },
    register: (req, res) => {
       return res.render("register");
        },
    enConstruccion: (req, res) => {
        return res.render("enConstruccion");
        },

        search: (req, res) => {
            const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
            let search = req.query.keywords;
            let productsToSearch = products.filter(products => products.name.toLowerCase().includes(search));	
            res.render('results', { 
                products: productsToSearch, 
                search,
            
            });
        },
    };
  
  
    module.exports = controller;