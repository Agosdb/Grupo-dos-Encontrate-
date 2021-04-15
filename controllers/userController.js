const { SSL_OP_NO_TLSv1_1 } = require('constants');
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const User = require('../models/User');
const bcryptjs = require('bcryptjs');


const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersController = {
    register: (req, res) => {
       return res.render('register', { errors});
    },
    processRegister: (req, res) => {
       const resultValidation = validationResult(req);
       
       if (resultValidation.errors.length > 0){
           return res.render('register', {
               errors: resultValidation.mapped(),
			   oldData: req.body
           });
       }
	   let userInDB = User.findByField('email', req.body.email);
	   if (userInDB) {
		   return res.render('register', { 
			   errors: {
				   email: {
					msg: 'Este email ya está registrado'
				   }
				   
			   },
			   oldData: req.body
			});
	   }
	   let userToCreate = {
		   ...req.body,
		   password: bcryptjs.hashSync(req.body.password, 10),
		   avatar: req.file.filename
	   }
	   let userCreated = User.create(userToCreate);
	   		return res.redirect('/users/login');
    },   
    	login: (req, res) => {
        return res.render("login");
        },
		loginProcess: (req, res) => {
			let userToLogin = User.findByField ('email', req.body.email);

			if (userToLogin) {
				let correctPassword = bcryptjs.compareSync (req.body.password, userToLogin.password);
				if(correctPassword){
					delete userToLogin.password;
					req.session.userLogged = userToLogin;
					// 
					if(req.body.remember_user) {
						res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
					}
					return res.redirect('/users/profile');
				}
			}
			return res.render('login', {
				errors: {
					email: {
						msg: 'No se encuentra este mail en nuestra base de datos'
					}
				}
			});

		},
   		profile: (req, res) => {
       		return res.render("userProfile",{
				user: req.session.userLogged
			   });
        },
		logout: (req, res) => {
			res.session.destroy();
			return res.redirect('/');
		},
			
           
    
    //DESDE AQUI

    // Detail - Detail from one users
		detail: (req, res) => {
			let users = users.find(users=>users.id==req.params.id)
			res.render('detail')
	},

	// Create - Form to create
		create: (req, res) => {
			res.render('users');
	},
	
	// Create -  Method to store
	store: (req, res) => {
		let newUsers= req.body;
		let image
		// Agrego la imagen
		if(!req.file){
			image = "3d.jpg"
		} else {
			image = req.file.filename
		}
		newUsers.image=image;
		
		
		res.send(newUsers)


		// Agrego el id al producto nuevo
		let ids = users.map(p=>p.id)
		newUsers.id = ids.length ? Math.max(...ids) + 1 : 1,
	

		// Guardo el producto nuevo en los productos
		users.push(newUsers)

		// Guardo el archivo con el nuevo producto
		let usersJson=JSON.stringify(users, null, ' ')
		fs.writeFileSync(usersFilePath,usersJson);
		res.redirect('/users');
	},

	// Update - Form to edit
		edit: (req, res) => {
			let usersToEdit = users.find(users=>users.id==req.params.id)
			res.render('usersEdition',{usersToEdit})
	},
	// Update - Method to update
		update: (req, res) => {
			let id = req.params.id;
			let usersToEdit = users.find(users => users.id == id)
			let image
			if(req.file != undefined){
			image = req.file.filename
		} else {
			image = usersToEdit.image
		}

		usersToEdit = {
			id: usersToEdit.id,
			...req.body,
			image: image,
		};
		
		let newUsers = users.map(product => {
			if (users.id == usersToEdit.id) {
				return users = {...usersToEdit};
			}
			return users;
		})

		fs.writeFileSync(usersFilePath, JSON.stringify(newUsers, null, ' '));
		res.redirect('/users');
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let id = req.params.id;
		let finalUsers = users.filter(users => users .id != id);
		fs.writeFileSync(usersFilePath, JSON.stringify(finalUsers, null, ' '));
		res.redirect('/users');    
    }
}  
    module.exports = usersController;