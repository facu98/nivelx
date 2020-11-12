const { Router } = require('express');
// import all routers;
const productRouter = require('./product.js');
const productCategory = require('./category.js');
const usersRoute = require('./user.js')
const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use('/products', productRouter);
router.use('/category', productCategory);
router.use('/users', usersRoute)

module.exports = router;
