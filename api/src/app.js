const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const multer = require('multer')
const path = require('path')
const { v4: uuidv4 } = require('uuid')

var db = require('./db.js')


const server = express();

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', "*")
  next();
});

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});


//CARGA DE IMAGENES CON MULTER

const storage = multer.diskStorage({
	destination: path.join(__dirname, '../public/images'),
	filename: (req, file, cb) => {
		cb(null, uuidv4() + path.extname(file.originalname).toLowerCase())
	},
})
const upload = multer({
	storage,
	// limits: { fileSize: 2000000 },
	fileFilter: (req, file, cb) => {
		const fileTypes = /jpeg|jpg|png|PNG/
		const mimeType = fileTypes.test(file.mimetype)
		const extName = fileTypes.test(path.extname(file.originalname))
		if (mimeType && extName) {
			return cb(null, true)
		}
		cb('Error: debe subir un archivo valido')
	},
}).array('images')

server.use(upload)


/// FIN DE CARGA DE IMAGENES MULTER


server.use(upload)
module.exports = server;
