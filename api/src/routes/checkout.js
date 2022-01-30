const router = require("express").Router();
const {PostCheckout, getUserTickets, getOneTicket} = require('../controllers/Checkout/PostCheckout')

router.post("/order", PostCheckout)
router.get('/tickets/:userid', getUserTickets)
router.get('/ticket',getOneTicket )


module.exports = router;