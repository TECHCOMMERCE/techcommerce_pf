const {Cart, User, Product} = require("../../db");


const putUserCart = async (req,res,next)=>{
  try{
    const {UserId} = req.params;
    const { productsInfo} = req.body;

    let idProduct = productsInfo.map(el=>el.productid)

    //[Busco al usuario
    let user = await User.findByPk(UserId);

    //[Busco los productos que agregaré al carrito.
    let products = await Product.findAll({
      where:{
        idProduct: idProduct
      }
    })
    //[ Agrego los productos al carrito
    await user.addProducts(products);

    //[Busco los productos desde la tabla carrito para actualizar la cantidad
    let cart = await Cart.findAll({
      where:{
        UserId
      }
    })

    //[Actualizo a la cantidad correspondiente de cada producto del carrito
    for(let i=0;i<productsInfo.length;i++){
      let product = cart.find(el=>el.ProductId===productsInfo[i].idProduct);
      await product.update({amount:productsInfo[i].amount})
    }
    //[Los vuelvo a pedir para enviar los datos correctamente
    products = await user.getProducts({
      attributes: ["idProduct","name", "price", "stock","image"]
    });
    products = products.map(el=>{
      const{idProduct, name, price, stock,image, cart:{quantity}} = el.toJSON()
      return {idProduct, name, price, stock,image, amount, totalPrice:quantity*price}
    })

    return res.status(200).json({cart:  products});
  }catch(err){
    console.log("Get users/cart/:id", err);
    next(err)
  }
};

module.exports = {putUserCart};



