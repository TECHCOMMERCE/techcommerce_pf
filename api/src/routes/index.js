const { Router } = require('express');
const products = require('./products');
const categories = require('./helpers/category')
const brand = require('./helpers/brand')

//importing the routes
const productPostingRoute = require('../controllers/Products/PostProduct.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//router.use('/','');
router.use('/products', products)
//router.use('/', productPostingRoute)

router.use('/categories', categories)

router.use('/brand', brand)

module.exports = router;