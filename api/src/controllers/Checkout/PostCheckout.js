const mercadopago = require('mercadopago')
const {PROD_ACCESS_TOKEN} = process.env
const PostCheckout = async (req,res,next)=>{
  try{
    let {userid} = req.params;
    let {productsInfo} = req.body
    mercadopago.configure({
      access_token: PROD_ACCESS_TOKEN,
    });

    let preference = {
      items: [
        {
          title: "Mi producto",
          unit_price: 100,
          quantity: 1,
        },
      ],
      back_urls: {
        success: `${SERVER}/checkoutSuccess`,
        failure: `${SERVER}/checkoutSuccess`,
        pending: `${SERVER}/checkoutSuccess`,
      },
      auto_return: "approved"
    };

    return res.status(200).json({cart: [...products]});
  }catch(err){
    console.log("Get users/cart/:id", err);
    next(err)
  }
};

module.exports = {PostCheckout};