const { Router } = require("express");
const {GetUserCart} = require('../controllers/Cart/GetUserCart')
const {PostCartItems} = require('../controllers/Cart/PostCartItems')
const {DeleteUserCart} = require('../controllers/Cart/DeleteCart')
const router = Router();

router.get("/:userid",GetUserCart);
router.put("/:userid",PostCartItems)
router.delete("/:userid",DeleteUserCart)

module.exports = router;