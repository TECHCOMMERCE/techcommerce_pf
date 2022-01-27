const router = require("express").Router();
const {GetOrdenIdML} = require('../controllers/Checkout/GetOrderIdML')

router.post("/orderidML", GetOrdenIdML)


module.exports = router;