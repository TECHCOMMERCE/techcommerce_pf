const { Router } = require("express");
const products = require("./products");
const product = require("./product");
const categories = require("./categories");
const category = require("./category");
const brands = require("./brands");
const brand = require("./brand");
const review = require("./review");
const cart = require("./cart");
const user = require("./user");
/* const reviewsRoutes = require('./reviewsRoutes') */
const checkout = require("./checkout");
const wishlist = require("./WishList");
const orderRouter = require("./ordersRoutes");
const deliveries = require("./deliveries");
const delivery = require("./delivery");
const help = require("./help")
const helpcategories = require("./helpcategories")
const {SendEmails} = require("../controllers/SendMails/main")
const {mailSuscription} = require("../controllers/SendMails/mailSuscription")
//const psuscription = require('./product_suscription');
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
/* router.use("/review", reviewsRoutes ); */
router.use("/review", review);
router.use("/product", product);
router.use("/orders", orderRouter);
// router.use(posts);
router.use("/user", user);
//router.use('/', productPostingRoute)
router.use("/cart", cart);
router.use("/checkout", checkout);

//router.use('/user', user)
router.use("/help",help)
// router.use("/help",help)
router.use("/helpcategory", helpcategories)

// router.use('/review', review)
router.use("/wishlist", wishlist);

router.use("/deliveries", deliveries);
router.use("/delivery", delivery);
//router.use('/psuscription',psuscription)
router.use('/suscription',(req,res)=>{
  let email = req.body.email
  let html = mailSuscription();
  SendEmails(email,'Notificacion de suscripcion',html)
  return res.send('Correo enviado correctamente').status(200)
})
module.exports = router;
