//IMPORTAMOS ROUTER DE LA LIBRERIA EXPRESS
const { Router }        = require('express');
//DECLARAMOS COMO CONSTANTE LA FUNCION Router() de la libreria de express
const router = Router();

// IMPORTAMOS LAS RUTAS DE LOS ARCHIVOS DENTRO de routes;
const productRouter     = require   ('./product.js');
const productCategory   = require   ('./category.js');
const userRouter        = require   ('./user.js');

router.use('/products', productRouter);
router.use('/category', productCategory);
router.use('/users', userRouter);

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);

module.exports = router;
//
