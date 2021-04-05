const controller = {
    index: (req, res) => {
        res.render('index');
    },
    enConstruccion: (req, res) => {
        return res.render("enConstruccion");
        },
	}

module.exports = controller;