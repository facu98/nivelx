const server = require('express').Router()



server.post('/', (req, res) => {
  console.log('req',req)
  const names = req.files.map((img) => img.filename)
  res.status(201).send(names)

})

module.exports = server
