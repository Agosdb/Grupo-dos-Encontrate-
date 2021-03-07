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
        return res.render ("listProduct");
    }
    
    };

    const controller = {
	
        // Root - Show all products
        index: (req, res) => {
            const inSale = products.filter(product=>product.category=='in-sale');
            const visited = products.filter(product=>product.category=='visited');
            res.render('products',{inSale,visited,toThousand})
        },
    
        // Detail - Detail from one product
        detail: (req, res) => {
            let product = products.find(product=>product.id==req.params.id)
            res.render('detail',{product,toThousand})
        },
    
        // Create - Form to create
        create: (req, res) => {
            res.render('product-create-form');
        },
        
        // Create -  Method to store
        store: (req, res) => {
            let image
            
            if(req.file != undefined){
                image = req.file.filename
            } else {
                image = 'default-image.png'
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
            res.render('product-edit-form',{productToEdit,toThousand})
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
    
            productToEdit = {
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
            res.redirect('/');
        },
    
        // Delete - Delete one product from DB
        destroy : (req, res) => {
            let id = req.params.id;
            let finalProducts = products.filter(product => product.id != id);
            fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
            res.redirect('/');
        }
    };
    module.exports = productController;