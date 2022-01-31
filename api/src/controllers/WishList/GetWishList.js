
const {User,Product} = require('../../db.js')
const { Op } = require("sequelize");
async function GetWishList(req, res, next) {
  try{
    const {userid,productid=null} = req.params
    /* console.log('wluserid', userid);
    console.log('wlproductid', productid); */
    let user = await User.findByPk(userid)
    let products=await user.getFavourites()
    if(productid){
      products = products.filter(p=>p.productid===productid)
    }
    res.status(200).json(products)
    
  }catch (error) {
    console.log(error)
  }
}
module.exports = {GetWishList};