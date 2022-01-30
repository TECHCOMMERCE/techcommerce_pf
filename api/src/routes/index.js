const { Router } = require("express");
const products = require("./products");
const product = require("./product");
const categories = require("./categories");
const category = require("./category");
const brands = require("./brands");
const brand = require("./brand");
const review = require("./helpers/review");
const cart = require("./cart");
const user = require("./user");
const checkout = require("./checkout");
const wishlist = require("./WishList");
const orderRouter = require('./ordersRoutes');

//const user = require("../controllers/User/user");

//importing the routes
//const productPostingRoute = require('../controllers/Products/PostProduct.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/categories", categories);
router.use("/category", category);
router.use("/brands", brands);
router.use("/brand", brand);
router.use("/products", products);
router.use("/product", product);
router.use('/orders', orderRouter);
// router.use(posts);
router.use("/user", user);
//router.use('/', productPostingRoute)
router.use('/cart', cart)
router.use('/checkout', checkout)


//router.use('/user', user)

// router.use('/review', review)
router.use('/wishlist',wishlist)

module.exports = router;
