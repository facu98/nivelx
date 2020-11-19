var passport = require('passport');

function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    next();
  } else {
    res.sendStatus(401);
  }
}

module.exports = {
    isAuthenticated
}
