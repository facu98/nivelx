const server = require('express').Router();
const { Order } = require('../db.js');

server.get("/orders", (req, res) => {
	Order.findAll()
	.then(orders => res.send(orders))
	.catch(err => res.status(404).send(err))
});