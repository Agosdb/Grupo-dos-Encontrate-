

const controller = {    
    index: (req, res) => {
        res.render('index');
    },
    enConstruccion: (req, res) => {
        return res.render("enConstruccion");
    },
    addCategory: (req, res) => {
        return res.render("addCategory");
    },
}
module.exports = controller;