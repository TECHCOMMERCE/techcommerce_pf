const { Router } = require("express");
const products = require("./products");
const product = require("./product");
const categories = require('./helpers/category')
const brand = require('./helpers/brand')
const review = require('./helpers/review')

const user = require("../controllers/User/user");

//importing the routes
//const productPostingRoute = require('../controllers/Products/PostProduct.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/categories", categories);
router.use("/brands", brand);
router.use("/product", product);
router.use("/products", products);
// router.use(posts);
router.use("/user", user);
//router.use('/', productPostingRoute)
router.use('/categories', categories)

router.use('/brand', brand)

// router.use('/review', review)

module.exports = router;
