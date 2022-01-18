const { Router } = require('express');

//importing the routes
const productPostingRoute = require('../controllers/Products/PostProduct.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//router.use('/','');
router.use('/', productPostingRoute)

module.exports = router;