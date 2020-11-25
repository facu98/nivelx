const server = require('express').Router();
const { User, Order, Product, Orderline } = require('../db.js');
const { Op } = require('sequelize')
const trash = [];

server.get('/me/:id', (req, res) => {
    const id = req.params.id;
    User.findByPk(id)
    .then((user) => {
        if(!user) return res.status(404).send('No se encuentra este usuario');
        
        if (user.logged === true) return res.send.json(user); 
        else res.status(401).send('Usuario no está loggeado');
        }
    )
    .catch(err => res.send(err)) 
})