const router = require("express").Router();

const {auth} = require('../controllers/User/Auth/auth.js')


router.post("/login", auth)

module.exports = router;