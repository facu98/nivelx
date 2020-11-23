//IMPORTAMOS ROUTER DE LA LIBRERIA EXPRESS
const { Router }        = require('express');
const express = require('express')


//DECLARAMOS COMO CONSTANTE LA FUNCION Router() de la libreria de express
const router = Router();

// IMPORTAMOS LAS RUTAS DE LOS ARCHIVOS DENTRO de routes;
const productRouter     = require   ('./product.js');
const productCategory   = require   ('./category.js');
const userRouter        = require   ('./user.js');
const orderRoutes       = require   ('./order.js')
const imageRouter       = require   ('./image.js')
const uploadRouter      = require   ('./upload.js')






router.use('/products', productRouter);
router.use('/category', productCategory);
router.use('/users', userRouter);
router.use('/orders', orderRoutes);
router.use('/image', imageRouter)
router.use("/upload",uploadRouter)
// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);

module.exports = router;
//
