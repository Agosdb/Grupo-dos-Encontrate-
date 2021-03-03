const controller = {
    index: (req, res) => {
    return res.render("index"); //entre comillas el nombre de lo que queremos mostrar//cambie el send 
    //por el render para renderizar la vista//
    },
    login: (req, res) => {
        return res.render("login");
        },
    register: (req, res) => {
       return res.render("register");
        },
    productCar: (req, res) => {
        return res.render ("productCar");
    }
};
    module.exports = controller;