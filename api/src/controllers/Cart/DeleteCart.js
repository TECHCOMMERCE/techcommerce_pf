const {Cart, User} = require("../../db");
const DeleteUserCart = async(req,res,next)=>{
try {
  const {userid} = req.params;
  const {productid=null} = req.query;
  let user = await User.findByPk(userid);

  let cart = null;
  
  if(productid){
    cart= await user.removeProduct(productid);
  }else{
    cart = await Cart.destroy({
      where:{
        userUserid:userid
      }
    });
  }

  let products = await user.getProducts({
    attributes: ["productid","name", "price", "stock","image"]
  });
  products = products.map(el=>{
    const{productid, name, price, stock,image, cart:{quantity}} = el.toJSON()
    return {productid, name, price, stock,image, amount, totalPrice:quantity*price}
  })

  return res.status(200).json({cart:  products});

  
} catch (error) {
  next(error);
}
}

module.exports={
  DeleteUserCart
};