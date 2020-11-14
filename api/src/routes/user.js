const server = require('express').Router();
const { User, Order } = require('../db.js');
const { Op } = require('sequelize')
const trash = [];

server.get("/", (req, res) => {
	User.findAll({
		order:['id']
	})
	.then(users => res.send(users))
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
	const { name, lastname, email, password, directionOne, directionTwo, phone , status } = req.body
	const id = req.params.id;
	User.findByPk(id)
	.then(user => {
		if(!user){
			res.status(400).send(`No existe el usuario con ID: ${id}`);
		}
		if(!email || !password || !name || !lastname || !directionOne || !phone){
			res.status(400).send(`Debe completar los campos obligatorios`);
		}

		user.name = name;
		user.lastname = lastname;
		user.email = email;
		user.password = password;
		user.directionOne = directionOne;
		user.directionTwo = directionTwo;
		user.phone = phone;
		user.save()
		.then(user => res.send(user))
		.catch(err => res.status(404).send(err))
	});
});

server.post("/", (req,res) => {
	const { name, lastname, email, password, directionOne, directionTwo, phone } = req.body
	console.log(req.body)
	if(!name || !lastname || !email || !password || !directionOne || !phone ) {
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
		})
		.then((user) => res.status(201).send(user))
		.catch(err => res.send(err))
	})
	.catch((err) =>  res.send(err))
});


//
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



// Eliminar carrito

server.delete('/:idUser/cart/', (req, res) => {
    let id = req.params.idUser;
	Order.findOne({
		where: {
			user_id: id
		}
	})
	.then( cart => {
		trash.push(cart);
		cart.destroy()
		res.send('Carrito vaciado');
	})
	.catch(err => {
		res.status(500).send(err);
	});
});

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

    User.findByPk(id, {
        where: {
            idOrder: id
        },
        include: {
            model: Order
        }
    })
        .then(contentOrder => {
            if (!contentOrder) {
                return res.status(400).send('Order does not exist');
            }
            res.send(contentOrder);
        })
        .catch(next);
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

server.put('/:id/orders', (req, res) => {
	const { state, date } = req.body
	let id = req.params.id;
	Order.findAll({
	where: {
		user_id: id
		}
	})
	.then(order => {
		if(!order){
			res.status(400).send(`No se encuentran órdenes de este usuario`);
		}
		if( !state || !date ){
			res.status(400).send(`Debe completar los campos obligatorios`);
		}

		order.state = state;
		order.date = date;
		order.save()
		.then(order => res.send(order))
		.catch(err => res.status(404).send(err))
	});
})
module.exports = server;
