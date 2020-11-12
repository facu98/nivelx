const server = require('express').Router();
const { User } = require('../db.js');
const { Op } = require('sequelize')
const trash = [];

server.get("/", (req, res) => {
	User.findAll()
	.then(users => res.send(users))
	.catch(err => res.status(404).send(err))
});

server.put("/:id", (req, res) => {
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

server.post("/", (req,res) => {
	const { name, lastname, email, password, directionOne, directionTwo, phone , status } = req.body
	if(!name || !lastname || !email || !password || !directionOne || !phone || !status) {
        return res.status(400).send( "Debe rellenar los campos requeridos" )
    }
	User.findOne({
		where: {
			email
		}
	})
	.then((user) => {
		if(user) { return res.status(400).send( "Ya existe un usuario con este mail" )}
		const newUser = User.create({
			name,
			lastname,
			email,
			password,
			directionOne,
			directionTwo,
			phone: parseInt(phone),
			status,
		})
		.then((user) => res.status(201).send(user))
		.catch(err => res.send(err))
	})
	.catch((err) =>  res.send(err))
});

module.exports = server;
