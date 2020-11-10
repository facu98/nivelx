const server = require('express').Router();
const { User} = require('../db.js');
const { Op } = require('sequelize')
const trash = [];

server.post("/users", (req,res) => {
	const { name, lastname, email, password, directionOne, directionTwo, phone , status } = req.body
	if(!name || !lastname || !email || !password || !directionOne || !directionTwo || !phone || !status) {
        return res.status(400).send( "Debe rellenar los campos requeridos" )
    }
	Product.findOne({
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

module.exports = server;
