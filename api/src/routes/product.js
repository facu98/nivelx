const server = require('express').Router();
const { Product } = require('../db.js');
const { Op } = require('sequelize');

server.get('/', (req, res, next) => {
	Product.findAll()
		.then(products => {
			res.send(products);
		})
		.catch(next);
});

// Busco el producto por id y muestro sus datos(incluida categoria e imagenes)
server.get('/:id', (req, res, next) => {
	const id = req.params.id;

	const productById = Product.findByPk(id);
	if (!productById) {
		return res.status(400).send('The product does not exist');
	} else {
		res.status(200).send(productById);
	}

});

module.exports = server;
