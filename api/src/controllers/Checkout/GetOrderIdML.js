const mercadopago = require('mercadopago')
const {ACCESS_TOKENML} = process.env
const GetOrdenIdML = async (req,res,next)=>{
  try{
    let {userid} = req.params;
    let {productsInfo, payer} = req.body
    
    mercadopago.configure({
      access_token: ACCESS_TOKENML,
    });
    
    let dataproducts= productsInfo.map(product =>{
      return {
        title: product.name,
        unit_price: product.price,
        //currency_id: 'MX',
        quantity: product.quantity,
      }
    })
    //console.log('dataproducts', dataproducts);

    let preference = {
      items: dataproducts,
     /*  payer: {
        email: payer.email,
      }, */
      /* back_urls: {
        success: `"http://localhost:3000/success"`,
        failure: `/failedPayment`,
        pending: `/pendingPayment`, 
      },*/
      /*auto_return: "approved"  */
    };
    console.log("preference",preference)
    console.log('ACCESS_TOKENML', ACCESS_TOKENML);

    //const response = await mercadopago.preferences.create(preference);
    /*const preferenceId = response.body.id; */
    /* console.log('response', response);
    console.log('preferenceId', preferenceId); */
    mercadopago.preferences
    .create(preference)
    .then(function (response) {
      // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
      console.log('response', response);
      return res.status(200).json({preferenceId: response.body.id});
    })
     /*.catch(function (error) {
      console.log("ERROR 404",error);
      res.status(404);
    }); */

    /* return res.status(200).json(/* {preferenceId} ); */
  }catch(err){
    console.log("Get users/cart/:id", err);
    next(err)
  }
};

module.exports = {GetOrdenIdML};