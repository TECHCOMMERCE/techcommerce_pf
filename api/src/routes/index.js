const { Router } = require('express');
const products = require("./products")
const categories = require("./categories");
const brands = require("./brands");


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(products);
router.use(categories);
router.use(brands);

module.exports = router;