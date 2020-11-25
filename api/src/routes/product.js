const server = require('express').Router();
const { Product, Category , Review} = require('../db.js');
const { Op } = require('sequelize')
const trash = [];
const {isAuthenticated, isAdmin} = require('./passport')



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

server.post("/", isAdmin, (req,res) => {
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


server.put("/:id", isAdmin, (req,res) => {
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

server.delete("/:productId", isAdmin, (req, res) => {
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

server.post('/products/:productId/category/:categoryId', isAdmin, (req, res) => {
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

server.delete('/products/:productId/category/:categoryId', isAdmin, (req, res) => {
	let productId = req.params.productId;
	let categoryId = req.params.categoryId;

	Category.findByPk(categoryId)
	.then(category => {
		product = Product.findByPk(productId);
		product.delete(category);
	})
	res.send.json();
});


/* ---------------------------------------------------------------------------

RUTAS DE REVIEWS
S53 al s57
------------------------------------------------------------------------------
*/
//Crear reviews --S54
server.post("/:id/review", isAuthenticated, (req, res) => {

		const {score, title, comments, userId} = req.body

		if(!score || !title || !comments )
						{
							res.status(400).send('Debe enviar los campos requeridos')
							return
						}

		Review.create({
									score,
									comments,
									productId: req.params.id,
									userId
								})

			.then  (review => res.status(201).send(review))
			.catch (err	=> res.status(400).send("ERROR EN REVIEW " + err))

						})


//Modificar y actualizar reviews s55
server.put("/:idProduct/review/:idReview", isAuthenticated, (req, res) =>{
		const {score,title, comments, userId} = req.body

		if(!score || !title || !comments )
			{
				res.status(400).send('Debe enviar los campos requeridos')
				return
			}

		Review.findOne({
							where: {
									[Op.and]: [
										{
											productId: req.params.idProduct
										},
										{
											id: req.params.idReview,
										},
									],
								}})

					.then(review => {
									review.userId 	= userId 	 || review.userId
									review.score 		= score    || review.score
									review.title 		= title    || review.title
									review.comments = comments || review.comments
									review.save().then(rev => {
																						res.status(200).send(rev)
																						})

								})
					.catch((err) => res.status(404).send(err))
							})


//Eliminar reviews s56
server.delete("/:idProduct/review/:idReview", isAuthenticated,  (req, res) => {
	//BUSCA LA REVIEW
	Review.findOne({
								where: {
									[Op.and]: [	{productId: req.params.idProduct},
										{	id: req.params.idReview,},
									],
								}})
  // PROMISE CON LA QUERY DE LA BUSQUEDA
	.then(review => { //destroy() destruye la query que matechea review y despues nos renvia el review vacio
											review.destroy().then(() => {
																										res.send(review) })
										})
	//SI NO PUDO ENCONTRAR NADA FUE XQ ALGUNO DE LOS DOS ID FUE INVALIDO
	.catch(() => res.status(404).send('Id no valido'))

})



// Trae reviews de un producto en particular, detalle producto s57
server.get('/:productId/productreview', isAuthenticated, async (req, res) => {
	try {
		const data = await Review.findAll({
			where: {
				productId: req.params.productId
			},
			include:
			[{
				model: Product
			},
			{
				model: User
			}]
		})
		if (data) {
			res.status(200).send(data)
		}
		else {
			res.status(404).send('Reviews no encontradas')
		}
	}
	catch (err) {console.log(err)}
})


// Trae todas las reviews de un usuario

//CREE ESTA RUTA POR LAS DUDAS
server.get('/:userId/:productId/review',  isAuthenticated, async (req, res) => {
	try {
			const data = await Review.findAll({
						where: {
											userId: req.params.userId
										}
								})

			if (data) {
								res.status(200).send(data)
								}
			else 	{
						res.status(404).send('Reviews no encontradas')
						}
				}
	catch (err) {console.log(err)}
})

// Trae reviews de un usuario en particular, panel usuario
module.exports = server;
