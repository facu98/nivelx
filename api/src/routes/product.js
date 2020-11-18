const server = require('express').Router();
const { Product, Category } = require('../db.js');
const { Op } = require('sequelize')
const trash = [];

server.get('/', (req, res, next) => {
	Product.findAll()
		.then(products => {
			res.send(products);
		})
		.catch(next);
});

server.get('/search', (req, res) => {

	const { name, description } = req.query;
	Product.findAll( {
		where: {
			[Op.or]: [
				{name: {[Op.iLike]: `%${name}%`}},
				{name: {[Op.substring]: `${name}`}},
				{description: {[Op.substring]: `${name}`}},
				{description: {[Op.iLike]: `%${name}%`}}
			],
		},
	})
	.then((products) => !products ? res.status(400).send('No hay productos asociados con la busqueda')
								: res.send(products))

	.catch((err) => res.status(404).send(err));
})

server.post("/", (req,res) => {
	const {name, description, price, stock, pictures, brand, model , asessment, quantity, color, category} = req.body
	if(!name || !description || !price || !stock || !pictures || !quantity || !brand || !category){return res.status(400).send("Debe rellenar los campos requeridos")}
	Product.findOne({
		where: {
			name, description, price, stock, pictures, quantity, brand, category
		}
	})
	.then((product) => {
		if(product) {return res.status(400).send("Ya existe el producto")}

		const newProduct = Product.create({
			name,
			description,
			price : parseInt(price),
			stock,
			pictures,
			brand,
			quantity : parseInt(quantity),
			asessment,
			model,
			color,
			category
		})
		.then((product) => res.status(201).send(product))
		.catch(err => console.log(err))
	})
	.catch((err) =>  console.log(err))
});


server.put("/:id", (req,res) => {
	const {id} = req.params
	const {name, description, price, stock, pictures, brand, model , asessment, quantity, color, category} = req.body
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
		quantity && (product.quantity = quantity)
		color && (product.color = color)
		category && (product.category = category)
		product.save()
		.then((product) => res.send(product))
		.catch((err) => res.send(err))
		})
	.catch((err) => {console.log(err)
		return res.status(400).send("ID invalido")})
})

// Busco el producto por id y muestro sus datos(incluida categoria e imagenes)
server.get('/:id', (req, res, next) => {
	const id = req.params.id;

	Product.findByPk(id, {
		where: {
			idCategory: id
		},
		include: {
			model: Category
		}
	})
		.then(productById => {
			if (!productById) {
				return res.status(400).send('The product does not exist');
			}
			res.send(productById);
		})
		.catch(next);

});

server.delete("/:productId", (req, res) => {
	let id = req.params.productId;
	  Product.findByPk(id)
		.then(products => {
			trash.push(products)
			products.destroy()
		  res.send(`Producto ${id} eliminado`);
		})
		.catch(err => {
		  res.status(500).send('Hubo un error: ' + err);
		});
});
// Agregar categoría al producto

server.post('/products/:productId/category/:categoryId', (req, res) => {
	let productId = req.params.productId;
	let categoryId = req.params.categoryId;

	Category.findByPk(categoryId)
	.then(category => {
		product = Product.findByPk(productId);
		return product.addCategory(category);
	})
	.then(newCategory => {
		res.send.json();
	})
	.catch((err) => res.send.err);
});

// Eliminar categoría al producto

server.delete('/products/:productId/category/:categoryId', (req, res) => {
	let productId = req.params.productId;
	let categoryId = req.params.categoryId;

	Category.findByPk(categoryId)
	.then(category => {
		product = Product.findByPk(productId);
		product.delete(category);
	})
	res.send.json();
});


module.exports = server;
