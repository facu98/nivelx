const server = require('express').Router();
const { Product } = require('../db.js');

server.get('/', (req, res, next) => {
	Product.findAll()
		.then(products => {
			res.send(products);
		})
		.catch(next);
});

server.post("/", (req,res) => {
	const {name, description, price, stock, pictures, brand, model , asessment, firstCategory, secondCategory} = req.body
	if(!name || !description || !price || !stock || !pictures){return res.status(400).send("Debe enviar los campos requeridos")}
	Product.findOne({
		where: {
			name, description, price, stock, pictures, brand, model
		}
	})
	.then((product) => {
		if(product) {return res.status(400).send("Ya existe el producto")}
		
		const newProduct = Product.create({
			name,
			description,
			price,
			stock,
			pictures,
			brand,
			model,
			asessment,
			firstCategory,
			secondCategory
		})
		.then((product) => res.status(201).send(product))
		.catch((err) => res.status(400).send(err))
	})



})

module.exports = server;
