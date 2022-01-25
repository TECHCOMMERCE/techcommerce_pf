const {Cart, User, Product} = require("../../db");
const { Op } = require("sequelize");

const PostCartItems = async (req,res,next)=>{
  try{
    const {userid} = req.params;
    const {productsInfo} = req.body;

    let productsid = productsInfo.map(el=>el.productid)
    //busco al usuario
    let user = await User.findByPk(userid);
    //agrego los productos
    await user.addProducts(productsid);
    //actualizo las cantidades
    for(let i=0;i<productsInfo.length;i++){
      let cart = await Cart.update({
        quantity: productsInfo[i].quantity
      },{
        where: {
          [Op.and]:[
            {
              userUserid: userid
            },
            {
              productProductid: productsInfo[i].productid
            }
          ]
        }
      })
    }

    
    //[Los vuelvo a pedir para enviar los datos correctamente
    let products = await user.getProducts({
      attributes: ["productid","name", "price", "stock","image"]
    });

    products= products.map(p=>{
      return{
        productid: p.productid,
        name: p.name,
        price: p.price,
        quantity: p.cart.quantity,
        image: p.image,
        stock: p.stock
      }
    })

    return res.status(200).json({cart: [...products]});
  }catch(err){
    console.log("Get users/cart/:id", err);
    next(err)
  }
};

module.exports = {PostCartItems};



