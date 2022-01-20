const { Router } = require('express');
const products = require('./products')

//importing the routes
const productPostingRoute = require('../controllers/Products/PostProduct.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//router.use('/','');
router.use('/products', products)
//router.use('/', productPostingRoute)

module.exports = router;