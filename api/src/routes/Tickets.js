const router = require("express").Router();
const  getTickets  = require('../controllers/Tickets/getTickets')

router.get("/tickets", getTickets);


module.exports = router;