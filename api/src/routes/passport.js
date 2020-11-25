var passport = require('passport');

function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    next();
  } else {
    res.sendStatus(401);
  }
}

function isAdmin(req, res, next){
  console.log(req.user)
  if(req.isAuthenticated() && req.user.isAdmin){
      next()
  }
  else {
    res.sendStatus(401)
  }
}

function isLogged(req, res, next) {
  if(req.isAuthenticated()) {
    next()
  } else {
    res.sendStatus(401)
  }
}


module.exports = {
    isAuthenticated,
    isAdmin,
    isLogged
}
