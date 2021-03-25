const { SSL_OP_NO_TLSv1_1 } = require('constants');
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {
    products: (req, res) => {	
       res.render('products', {products});
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
    products: (req, res) => {
        const inActivity = products.filter(product=>product.category=="activity");
        const inCategory = products.filter(product=>product.category=="category");
        res.render ("products", {inActivity, inCategory});
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
    // Detail - Detail from one product
	detail: (req, res) => {
		let products = products.find(products=>products.id==req.params.id)
		res.render('detail',{products})
	},// ver si el detail es valido.


	// Create - Form to create
	create: (req, res) => {
		res.render('products');
	},
	
	// Create -  Method to store
	store: (req, res) => {
		let newProduct= req.body;
		let image
		// Agrego la imagen
		if(!req.file){
			image = "3d.jpg"
		} else {
			image = req.file.filename
		}
		newProduct.image=image;
		
		
		res.send(newProduct)


		// Agrego el id al producto nuevo
		let ids = products.map(p=>p.id)
		newProduct.id = ids.length ? Math.max(...ids) + 1 : 1,
	
		// res.send(newProduct)

		// Guardo el producto nuevo en los productos
		products.push(newProduct)

		// Guardo el archivo con el nuevo producto
		let productsJson=JSON.stringify(products, null, ' ')
		fs.writeFileSync(productsFilePath,productsJson);
		res.redirect('/');
	},

	// Update - Form to edit
	edit: (req, res) => {
		let productsToEdit = products.find(products=>products.id==req.params.id)
		res.render('productEdition',{productsToEdit})
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
		
		let newProduct = products.map(product => {
			if (products.id == productsToEdit.id) {
				return products = {...productsToEdit};
			}
			return products;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProduct, null, ' '));
		res.redirect('/products');
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