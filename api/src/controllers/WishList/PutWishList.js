
const {WishList,User,Product} = require('../../db.js')
const { Op } = require("sequelize");
async function PutWishList(req, res, next) {
  try{
    const {userid,productid} = req.params
    let user =await User.findOne({
      where:{
        userid
      }
    })

    let product =await Product.findOne({
      where:{
        productid
      }
    })
    let wishList= await user.getFavourites()
    let wish= wishList.find(p=>p.productid===productid)
    console.log('wish', wish);
    if(wish){ 
      let eliminarproduct= await user.removeFavourite(product)
      console.log('eliminarproduct', eliminarproduct);
    }else{
      user.addFavourite(product)
    }
    res.status(200).send('WishListActualizado')  
  }catch (error) {
    console.log(error)
    res.status(404).send('Error al actualizar wishList')
    
  }
}
module.exports = {PutWishList};