const router = require("express").Router();
const user = require("../controllers/User/user");

const {auth} = require('../controllers/User/Auth/auth.js')

router.post("/login", auth)
router.use(user)

module.exports = router;