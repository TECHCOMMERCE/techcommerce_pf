const { Router } = require("express");
const products = require("./products");
const product = require("./product");
const categories = require("./categories");
const brands = require("./brands");
// const posts = require("./post");

//importing the routes
//const productPostingRoute = require('../controllers/Products/PostProduct.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/categories", categories);
router.use("/brands", brands);
router.use("/product", product);
router.use("/products", products);
// router.use(posts);
// router.use(users);
//router.use('/', productPostingRoute)

module.exports = router;
