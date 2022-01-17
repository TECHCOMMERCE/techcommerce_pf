const { Router } = require('express');
const {GetProductsAPI} = require('../controllers/Products/GetProductsAPI')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/',GetProductsAPI);

module.exports = router;