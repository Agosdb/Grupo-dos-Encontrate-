const { SSL_OP_NO_TLSv1_1 } = require('constants');
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const productController = {
    index: (req, res) => {
        return res.render("index");
         //entre comillas el nombre de lo que queremos mostrar//cambie el send 
    //por el render para renderizar la vista//
    },
    productCar: (req, res) => {
        return res.render ("productCar");
    },
    productDetail: (req, res)=>{
        return res.render ("productDetail");
    },
    productEdition: (req, res) => {
        return res.render ("productEdition");
    },
    registerAdministrator: (req, res) => {
        return res.render ("registerAdministrator");
    },
    listProduct: (req, res) => {
        const activity = this.products.filter(products=>products.category=="gps");
        const category = this.products.filter(products=>products.category=="adventure");
        res.render ("products", {gps, adventure});
    },
    // Detail - Detail from one product
	detail: (req, res) => {
		let products = products.find(products=>products.id==req.params.id)
		res.render('detail',{products})
	},// ver si el detail es valido.


	// Create - Form to create
	create: (req, res) => {
		res.render('registerAdministrator');
	},
	
	// Create -  Method to store
	store: (req, res) => {
		let image
		
		if(req.file != undefined){
			image = req.file.filename
		} else {
			image = '3d.jpg'
		}
		
		let ids = products.map(p=>p.id)
		let newProduct = {
			id: Math.max(...ids)+1,
			...req.body,
			image: image
		};
		// res.send(newProduct)
		products.push(newProduct)
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/');
	},

	// Update - Form to edit
	edit: (req, res) => {
		let productsToEdit = products.find(products=>products.id==req.params.id)
		res.render('listProduct',{productsToEdit})
	},
	// Update - Method to update
	update: (req, res) => {
		let id = req.params.id;
		let productsToEdit = products.find(products => products.id == id)
		let image
		if(req.file != undefined){
			image = req.file.filename
		} else {
			image = productsToEdit.image
		}

		productsToEdit = {
			id: productsToEdit.id,
			...req.body,
			image: image,
		};
		
		let newProducts = products.map(product => {
			if (products.id == productsToEdit.id) {
				return products = {...productsToEdit};
			}
			return products;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		res.redirect('/');
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let id = req.params.id;
		let finalProducts = products.filter(products => products .id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect('/');
	}
    
    };


    module.exports = productController;