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
    }
    };
    module.exports = productController;