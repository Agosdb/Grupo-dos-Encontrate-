const { SSL_OP_NO_TLSv1_1 } = require('constants');
const fs = require('fs');
const path = require('path');

const productDetailFilePath = path.join(__dirname, '../data/productDataBase.json');
const productDetail = JSON.parse(fs.readFileSync(productDetailFilePath, 'utf-8'));



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
        const activity = this.productDetail.filter(productDetail=>productDetail.category=="gps");
        const category = this.productDetail.filter(productDetail=>productDetail.category=="adventure");
        res.render ("listProduct", {gps, adventure});
    },
    // Detail - Detail from one product
	detail: (req, res) => {
		let productDetail = productDetail.find(productDetail=>productDetail.id==req.params.id)
		res.render('detail',{productDetail})
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
		
		let ids = productDetail.map(p=>p.id)
		let newProduct = {
			id: Math.max(...ids)+1,
			...req.body,
			image: image
		};
		// res.send(newProduct)
		productDetail.push(newProduct)
		fs.writeFileSync(productDetailFilePath, JSON.stringify(productDetail, null, ' '));
		res.redirect('/');
	},

	// Update - Form to edit
	edit: (req, res) => {
		let productToEdit = productDetail.find(productDetail=>productDetail.id==req.params.id)
		res.render('productEdition',{productToEdit})
	},
	// Update - Method to update
	update: (req, res) => {
		let id = req.params.id;
		let productToEdit = productDetail.find(productDetail => productDetail.id == id)
		let image
		if(req.file != undefined){
			image = req.file.filename
		} else {
			image = productToEdit.image
		}

		productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: image,
		};
		
		let newProducts = productDetail.map(product => {
			if (productDetail.id == productToEdit.id) {
				return productDetail = {...productToEdit};
			}
			return productDetail;
		})

		fs.writeFileSync(productDetailFilePath, JSON.stringify(newProducts, null, ' '));
		res.redirect('/');
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let id = req.params.id;
		let finalProductDetail = productDetail.filter(productDetail => productDetail .id != id);
		fs.writeFileSync(productDetailFilePath, JSON.stringify(finalProductDetail, null, ' '));
		res.redirect('/');
	}
    
    };


    module.exports = productController;