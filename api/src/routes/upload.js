const server = require('express').Router()
const multer = require('multer')
var upload = multer()
const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);


server.post("/", upload.single("files"), async function(req, res, next) {
  const {
    file,
    body: { name }
  } = req;

  await pipeline(
    file.stream,
    fs.createWriteStream(`${__dirname}/../public/images/${name}`)
  );

  res.send("File uploaded");
});


module.exports = server;
