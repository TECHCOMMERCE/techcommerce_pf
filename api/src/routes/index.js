const { Router } = require('express');
const products = require('./products');
const categories = require('./category')

//importing the routes
const productPostingRoute = require('../controllers/Products/PostProduct.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//router.use('/','');
router.use('/products', products)
//router.use('/', productPostingRoute)

router.use('/categories', categories)
module.exports = router;