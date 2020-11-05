const server = require('express').Router();
const { Product } = require('../db.js');

server.get('/', (req, res, next) => {
	Product.findAll()
		.then(products => {
			res.send(products);
		})
		.catch(next);
});

/* Retorna los productos que tengan query={valor} en su nombre
o descripción (/search?query={valor})*/

server.get('/search', (req, res) => {
	
	const { name, description } = req.query;

	Product.findAll( {
		where: {
			[Op.or]: [
				{name: {[Op.substring]: `${name}`}},
				{description: {[Op.substring]: `${description}`}}
			],
		},
	})
	.then((products) => !products ? res.status(400).send('No hay productos asociados con la busqueda')
								: res.send(products))

	.catch((err) => res.status(404).send(err));
});

module.exports = server;
