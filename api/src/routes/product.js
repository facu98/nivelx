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

server.post("/", (req,res) => {
	const {name, description, price, stock, pictures, brand, model , asessment, firstCategory, secondCategory} = req.body
	if(!name || !description || !price || !stock || !pictures){return res.status(400).send("Debe rellenar los campos requeridos")}
	Product.findOne({
		where: {
			name, description, price, stock, pictures, brand:`${brand && brand}`, model:`${model && model}`
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
	})
	.catch((err) => res.status(400).send(err))
})

server.put("/:id", (req,res) => {
	const {id} = req.params
	const {name, description, price, stock, pictures, brand, model , asessment, firstCategory, secondCategory} = req.body
	if(Object.entries(req.body).length < 1 ){return res.status(400).send("Debe rellenar algun campo")}

	Product.findByPk(id)
	.then((product) => {
		if(!product){return res.status(400).send("ID inexistente")}

		name && (product.name = name)
		description && (product.description = description)
		price && (product.price = price)
		stock && (product.stock = stock)
		pictures && (product.pictures = pictures)
		brand && (product.brand = brand)
		model && (product.model = model)
		asessment && (product.asessment = asessment)
		firstCategory && (product.firstCategory = firstCategory)
		secondCategory && (product.secondCategory = secondCategory)
		product.save()
		.then((producto) => res.send(product))
		.catch((err) => res.send(err))
		})
	.catch(() => {return res.status(400).send("ID invalido")})
})

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
