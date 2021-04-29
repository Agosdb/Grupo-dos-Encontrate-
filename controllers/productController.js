const { SSL_OP_NO_TLSv1_1 } = require('constants');
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {
    products: (req, res) => {					
      res.render('products', {products}); //, {products}
    },
    productCar: (req, res) => {
        return res.render ("productCar", {products});
    },
    productDetail: (req, res)=>{		
		let product =product.find(p=>p.id=req.params.id);
        return res.render ("productDetail",{product});
    },// no encuentro el motivo por el cual no lo redirige. y al resto si.
    productEdition: (req, res) => {
        return res.render ("productEdition", {products});
    },
    registerAdministrator: (req, res) => {
        return res.render ("registerAdministrator", {products});
    },
    search: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let search = req.query.keywords;
		let productsToSearch = products.filter(products => products.name.toLowerCase().includes(search));	
		res.render('products', { 
			products: productsToSearch, 
			search,
		
		});
	},
    // Detail - Detail from one product
	detail: (req, res) => {
		let product = products.find(product=>product.id==req.params.id)		
		res.render('products',{product})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('products');
	},
	
	// Create -  Method to store
	// store: (req, res) => {
	// 	let newProduct= req.body;
	// 	let image
		// Agrego la imagen
		// if(!req.file){
		// 	image = "3d.jpg"
		// } else {
		// 	image = req.file.filename
		// }
		// newProduct.image=image;
		
		// res.send(newProduct)


		// Agrego el id al producto nuevo
		// let ids = products.map(p=>p.id)
		// newProduct.id = ids.length ? Math.max(...ids) + 1 : 1,
	
		// res.send(newProduct)

		// Guardo el producto nuevo en los productos
		// products.push(newProduct)

		// Guardo el archivo con el nuevo producto
	// 	let productsJson=JSON.stringify(products, null, ' ')
	// 	fs.writeFileSync(productsFilePath,productsJson);
	// 	res.redirect('/');
	// },
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
		let productToEdit = products.find(product=>product.id==req.params.id)
		res.render('productEdition',{productToEdit})
	},
	// Update - Method to update
	update: (req, res) => {
		let id = req.params.id;
		let productToEdit = products.find(product => product.id == id)
		let image
		if(req.file != undefined){
			image = req.file.filename
		} else {
			image = productToEdit.image
		}

		productsToEdit = {
			id: productToEdit.id,
			...req.body,
			image: image,
		};
		
		let newProducts = products.map(product => {
			if (product.id == productToEdit.id) {
				return product = {...productToEdit};
			}
			return product;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		res.redirect('/products');
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let id = req.params.id;
		let finalProducts = products.filter(product => product .id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect('/products');
	}
    
    };


    module.exports = productController;