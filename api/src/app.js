const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const multer = require('multer')
const path = require('path')
const { v4: uuidv4 } = require('uuid')
const session = require('express-session')
var passport = require('passport');
const { User } = require('./db.js');
var Strategy = require('passport-local').Strategy;
const cors = require('cors')


var db = require('./db.js')


const server = express();

server.name = 'API';



server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser('secretpassword'))
server.use(session({
  secret: 'secretpassword',
  resave: true,
  saveUninitializated: true
}));



server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', "POST, GET, OPTIONS, DELETE, PUT")
  next();
});

server.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

server.use(passport.initialize());
server.use(passport.session());

server.use((req, res, next) => {
  console.log(req.session)  ;
  console.log(req.user ? req.user.dataValues.email : 'NO USER LOGGED');
  next();
});






//PASSPORT

passport.use(new Strategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {
    console.log('LOGIN CALLED')
		User.findOne({
			where:{
				email
			}
		})
		.then((user) => {
			if(!user){return done(null, false, { message: 'El usuario no existe.' })}
			const auth = user.correctPassword(password)
			if(!auth){ return done(null, false, { message: 'Contraseña incorrecta.' })}
			return done(null, user)
		})
    .catch(err => {
      return done(err);
    })
  }));

	passport.serializeUser(function(user, done) {
    console.log('SERIALIZADO', user.id)
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  console.log('DESERIALIZADO', id)
  User.findOne({
where: {id}
})
    .then((user) => {
      if(user) {return done(null,user)}
      else return done(null,false)
    })
    .catch(err => {
      return done(err);
    })
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
