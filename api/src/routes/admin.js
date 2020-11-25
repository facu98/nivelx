const server = require('express').Router()
const { User } = require('../db.js')

server.put('/promote/:id', (req, res) => {
	User.findByPk(req.params.id)
		.then((user) => {
			if (!user) return res.status(404).send('Id no válido')
			var boolean = !user.isAdmin
			return user.update({ isAdmin: boolean })
		})
		.then((user) => res.send(user))
		.catch((err) => res.status(500).send(err))
})

module.exports = server
