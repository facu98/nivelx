const server = require('express').Router();
const { User } = require('../db.js');
const { Op } = require('sequelize')
const trash = [];

server.get("/users", (req, res) => {
	User.findAll()
	.then(users => res.send(users))
	.catch(err => res.status(404).send(err))
});

server.put("/users/:id", (req, res) => {
	const { name, lastname, email, password, directionOne, directionTwo, phone , status } = req.body
	const id = req.params.id;
	User.findByPk(id)
	.then(user => {
		if(!user){
			res.status(400).send(`No existe el usuario con ID: ${id}`);
		}
		if(!email || !password || !name || !lastname || !directionOne || directionTwo || !phone){
			res.status(400).send(`Debe completar los campos obligatorios`);
		}

		user.name = name;
		user.lastname = lastname;
		user.email = email;
		user.password = password;
		user.directionOne = directionOne;
		user.directionTwo = directionTwo;
		user.phone = phone;
		user.status = status;
		user.save()
		.then(user => res.send(user))
		.catch(err => res.status(404).send(err))
	});
});

server.post("/users", (req,res) => {
	const { name, lastname, email, password, directionOne, directionTwo, phone , status } = req.body
	if(!name || !lastname || !email || !password || !directionOne || !directionTwo || !phone || !status) {
        return res.status(400).send( "Debe rellenar los campos requeridos" )
    }
	User.findOne({
		where: {
			name, lastname, email, directionOne, directionTwo, phone, status, password
		}
	})
	.then((user) => {
		if(user) { return res.status(400).send( "Este usuario ya existe" )}

		const newUser = User.create({
			name,
			lastname,
			email,
			password,
			directionOne,
			directionTwo,
			phone,
			status,
		})
		.then((user) => res.status(201).send(user))
		.catch(err => console.log(err))
	})
	.catch((err) =>  console.log(err))
});

// Eliminar carrito

server.delete('/users/:idUser/cart/', (req, res) => {
    let id = req.params.idUser;
	User.findByPk(id)
	.then( cart => {
		trash.push(cart);
		cart.destroy()
		res.send('Carrito borrado');
	})
	.catch(err => {
		res.status(500).send(err);
	});
});

// Editar cantidad del carrito

server.put('/users/:idUser/cart', (req, res) => {
	let id = req.params.idUser;
	const { quantity } = req.body;
	if(Object.entries(req.body).length < 1 ){return res.status(400).send("Debe rellenar este campo")}

	User.findByPk(id)
	.then(cart => {
		if(!cart) {
			return res.status(400).send("No se encuentra el carrito requerido")
		}
		quantity && (cart.quantity = quantity)
		cart.save()
		.then((cart) => res.send(cart))
		.catch((err) => res.send(err))
	})
	.catch((err) => {
		console.log(err);
		return res.status(400).send("No se encuentra la información requerida");
	})
})

module.exports = server;

module.exports = server;
