const server = require('express').Router();
const { Order } = require('../db.js');

server.get("/", (req, res) => {
	Order.findAll()
	.then(orders => res.send(orders))
	.catch(err => res.status(404).send(err))
});

server.get("/:id", (req, res) => {
	const id = req.params.id;
	Order.findByPk(id)
	.then(order => res.send(order))
	.catch(err => res.status(404).send(err))
});

module.exports = server
