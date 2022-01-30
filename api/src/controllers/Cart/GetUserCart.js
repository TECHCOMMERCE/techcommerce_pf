const { User} = require("../../db");


const GetUserCart = async (req,res,next)=>{
  try{
    const {userid} = req.params;
    //[Busco el usuario
    let user = await User.findByPk(userid);
    //[Busco los productos del carrito del usuario
    let cart = await user.getProducts();
    
    //[Ordeno los datos para presentarlos de la misma manera que en otras rutas donde uso el carrito
    cart = cart.map(el=>{
      let {productid, name, price, stock,image, cart}= el.toJSON();
      return {productid, name, price, stock,image, quantity: cart.quantity};
    })
    res.status(200).json({user, cart});
  }catch(err){
    console.log(err);
    next(err)
  }
};

module.exports = {GetUserCart};