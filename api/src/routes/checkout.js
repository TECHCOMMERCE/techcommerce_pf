const router = require("express").Router();
const {PostCheckout} = require('../controllers/Checkout/PostCheckout')

router.post("/order", PostCheckout)


module.exports = router;