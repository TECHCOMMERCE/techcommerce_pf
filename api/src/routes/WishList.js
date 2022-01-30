const {PutWishList} = require('../controllers/WishList/PutWishList')
const {GetWishList} = require('../controllers/WishList/GetWishList')

const { Router } = require("express");
const router = Router();

router.get("/:userid/:productid",GetWishList);
router.put("/:userid/:productid",PutWishList)
//router.delete("/:userid",DeleteUserCart)

module.exports = router;