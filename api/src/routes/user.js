const server = require('express').Router();
const { User, Order, Product, Orderline } = require('../db.js');
const { Op } = require('sequelize')
var passport = require('passport');
const trash = [];
const {isLogged} = require('./passport')
const bcrypt = require('bcrypt')

// FUNCION DE HASHEO DE contraseña
function hashPassword(password) {
	return new Promise(function (resolve, reject) {
		bcrypt.genSalt(10, function (err, salt) {
			if (err) return reject(err)
			else {
				bcrypt.hash(password, salt, function (err, hash) {
					if (err) return reject(err)
					return resolve(hash)
				})
			}
		})
	})
}

//LOGIN
server.post("/login", passport.authenticate("local"),
  (req, res) => {
    console.log('LOGIN OK')
    var user = {...req.user.dataValues,
                password: "",
                salt: ""    }

    res.status(200).send({user});
  }
);

server.get('/logout',
  function(req, res){
    req.logout();
    res.sendStatus(200)
  });

server.get('/islogged', isLogged, (req,res) => {
    res.sendStatus(200)
  })


server.get("/", (req, res) => {
	User.findAll({
		order:['id']
	})
	.then(users => {return res.send(users)})
	.catch(err => res.status(404).send(err))
});

server.get("/:id", (req,res) => {
	const {id} = req.params
	User.findByPk(id)
	.then((user) => {
		if(!user){return res.status(400).send("User not found")}
		res.status(201).send(user)
	})
})

server.put("/:id", (req, res) => {
	const { name, lastname, email, directionOne, directionTwo, phone , status } = req.body
	const id = req.params.id;
	User.findByPk(id)
	.then(user => {
		if(!user){
			res.status(400).send(`No existe el usuario con ID: ${id}`);
		}
		if(!email || !name || !lastname || !directionOne || !phone){
			res.status(400).send(`Debe completar los campos obligatorios`);
		}

		user.name = name;
		user.lastname = lastname;
		user.email = email;
		user.directionOne = directionOne;
		user.directionTwo = directionTwo;
		user.phone = phone;
		user.save()
		.then(user => res.send(user))
		.catch(err => res.status(404).send(err))
	});
});

server.post("/", (req,res) => {
	const { name, lastname, email, password, directionOne, directionTwo, phone, cart } = req.body
	if(!name || !lastname || !email || !password || !directionOne || !phone ) {
        return res.status(400).send( "Debe rellenar los campos requeridos" )
    }
	User.findOne({
		where: {
			email
		}
	})
	.then((user) => {
		if(user) { return res.status(409).send( "Ya existe un usuario con este mail" )}
		const newUser = User.create({
			name,
			lastname,
			email,
			password,
			directionOne,
			directionTwo,
			phone: parseInt(phone),
		})
		.then((user) => {
			if(!cart) {return res.status(201).send(user)}
			else{
				Order.create({
					state:'carrito',
					userId: user.id
				})
				.then((order) => {
					cart.map((c) => {
						Orderline.create({
							order_id: order.id,
							product_id: c.product_id,
							price: parseInt(c.price),
							quantity: c.quantity,
							product_name: c.product_name,
							product_desc: c.product_desc,
							product_img: c.product_img
						})
					})
				})
				.then(() => res.sendStatus(201))
			}
		})
		.catch((err) => res.send(err))
	})
	.catch((err) =>  res.send(err))
});


// RESET password

server.put('/password/:id', async (req, res) => {
	try {
		let user = await User.findByPk(req.params.id)
		let newPassword = await hashPassword(req.body.password)

		await user.update({ password: newPassword, resetPassword: false })

		res.send(user)
	} catch (error) {
		res.status(500).send(error)
	}
})

//// usuario logueado cambia su contraseña
server.put('/password', isLogged, async (req, res) => {
	try {
		let user = await User.findByPk(req.user.id)
		let newPassword = await hashPassword(req.body.password)

		await user.update({ password: newPassword, resetPassword: false })

		res.send(user)
	} catch (error) {
		res.status(500).send(error)
	}
})


// ELIMINA EL usuario
server.delete('/:id', (req, res) => {
	User.findByPk(req.params.id)
		.then((user) => {
			user.destroy().then((user) => {
				res.status(200).send(user)
			})
		})
		.catch(() => res.status(404).send('Id no valido'))
})

//Eliminar producto del carrito

server.delete('/:idUser/cart', (req,res) => {
	const id = req.params.idUser;
	const {productId} = req.body
	var producto = {}


Product.findByPk(productId)
.then((data) => {
	if(!data){return res.status(400).json("No existe el producto")}
	producto = data;
	Order.findOne({
		where:{
			userId: id,
			state:'carrito'
		}
	})
	.then((order) => {
		Orderline.findAll({
			where:{
				order_id : order.id,
				product_id: producto.id
			},
		})
		.then((data) => {
			data[0].destroy()

		})
		.then(() => res.send("deleted"))
	})
	.catch((err) => res.status(400).json(err))

})
})

// Eliminar carrito

server.delete('/:idUser/cart/all', (req, res) => {
    let id = req.params.idUser;

    Order.findOne({
      where:{
        userId: id,
        state:'carrito'
      }
    })
    .then((order) => {
      order.destroy()
      .then(() => res.send('deleted'))
      })

    .catch((err) => res.status(400).json([]))
})
//ELIMINAR USUARIO

server.delete('/:id', (req, res) => {
	User.findByPk(req.params.id)
		.then((user) => {
			user.destroy().then((user) => {
				res.status(200).send(user)
			})
		})
		.catch(() => res.status(404).send('Id no valido'))
})

// Editar cantidad del carrito

server.put('/:idUser/cart', (req, res) => {
	let id = req.params.idUser;
	const { quantity } = req.body;
	if(Object.entries(req.body).length < 1 ){return res.status(400).send("Debe rellenar este campo")}

	Order.findOne({
		where: {
			user_id: id
		}
	})
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

//Retorna todos los items del Carrito

server.get(('/:idUser/cart'), (req, res, next) => {
    const id = req.params.idUser;

		Order.findOne({
			where:{
				userId: id,
				state:'carrito'
			}
		})
		.then((order) => {
			Orderline.findAll({
				where:{
					order_id : order.id
				},
			})
			.then((data) => {
				if(!data){return res.status(404).json([])}
				res.json(data)})

		})
		.catch((err) => res.status(400).json([]))


    // User.findByPk(id, {
    //     where: {
    //         idOrder: id
    //     },
    //     include: {
    //         model: Order
    //     }
    // })
    //     .then(contentOrder => {
    //         if (!contentOrder) {
    //             return res.status(400).send('Order does not exist');
    //         }
    //         res.send(contentOrder);
    //     })
    //     .catch(next);
});

// Retorna las órdenes del usuario

server.get('/:id/orders', (req, res) => {
	let id = req.params.id;
	Order.findAll({
	where: {
		user_id: id
		}
	})
	.then(orders => res.send(orders))
	.catch(err => res.status(404).send(err));
});

// Modifica las órdenes del usuario

server.put('/:id/order', (req, res) => {
	const { state, orderId } = req.body
	let id = req.params.id;
	Order.findOne({
	where: {
    id: parseInt(orderId),
		userId: parseInt(id)
		}
	})
	.then(order => {
		if(!order){
			return res.status(400).send(`No se encuentran órdenes de este usuario`);
		}
		if( !state ){
			return res.status(400).send(`Debe completar los campos obligatorios`);
		}

    console.log(order)

		order.state = state;
		order.save()
		.then(order => res.send(order))
		.catch(err => res.status(404).send(err))
	});
})

//AÑADE ITEM AL CARRITO

server.post('/:userId/cart', (req, res) =>{
	const {userId} = req.params
	const {productId, quantity} = req.body
	var producto = {}

Product.findByPk(productId)
.then((data) => {
	if(!data){return res.status(400).json("No existe el producto")}
	producto = data;
	Order.findOrCreate({
		where:{
						userId,
						state: 'carrito'
					}
	})
	.then((order) => {

		Orderline.findOne({
		where:{
				order_id: order[0].id,
				product_id: producto.id,
			}
		})
		.then((orderline) => {
			if(!orderline){
			Orderline.create({
				order_id: order[0].id,
				product_id: producto.id,
				price: parseInt(producto.price),
				quantity: quantity ? quantity : 1,
				product_name: producto.name,
				product_desc: producto.description,
				product_img: producto.pictures
			})
			.then((order) => {res.send(order)})
			.catch((err) => {
				res.status(400).json(err.parent.detail)
			})
				}
			else{
				orderline.quantity = quantity ? quantity : orderline.quantity + 1
				orderline.save()
				.then((order) => {res.send(order)})
				.catch((err) => {
					res.status(400).json(err.parent.detail)
				})
			}
		})

	})
	.catch((err) => {
		res.status(400).json(err.parent.detail)
	})
		})
})

//Elimina un producto en particular del carrito

//Crear orden

server.post('/order', (req,res) => {

	const newOrder = Order.create({

		state:'carrito',
	})
	.then((data) => res.send(data))
	.catch((err) => console.log(err))
})


module.exports = server;
