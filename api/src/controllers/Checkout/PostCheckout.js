
const Stripe = require("stripe");
const {Product, Order, Detail, Cart, User, Delivery} = require("../../db")
require('dotenv').config();
const {STRIPE_CONN} = process.env;
const stripe = new Stripe(STRIPE_CONN);
const {mailOrder} = require('../SendMails/mailOrder')
const {SendEmails} = require('../SendMails/main')
const PostCheckout = async (req,res,next)=>{
  try{
    //console.log('req.body', req.body);
    const {id, amount, productsInfo, datapaymant, user} = req.body
    let productsIDs = productsInfo.map(p=>p.productid)
    let productsDB = await Product.findAll({where: {productid: productsIDs}})
    console.log('user', user);
    const payment = await stripe.paymentIntents.create({
      amount: Math.round(amount*100), //TODO: 1 peso 100 centavos
      currency: "ars",
      description: `User Email: ${datapaymant.email}`, //TODO: AGREGAR NOMBRE Y APELLIDO, CON FECHA DE COMPRA Y CANTIDAD DE ITEMS
      receipt_email: datapaymant.email,
      payment_method: id,
      payment_method_types: ['card'],
      confirm: true, //confirm the payment at the same time of created the transaction
    });
    var redirect=""
    if(payment.status==="succeeded"){
      redirect="Completed"
      for(let i=0; i<productsDB.length; i++){ //Recorro los productos para actualizar el stock
        let quantity=  productsInfo.filter(p=>p.productid==productsDB[i].productid)[0].quantity;
        let stock= Number(productsDB[i].stock) 
        let newStock= stock-quantity
        //Actualizo el stock del producto
        Product.update({
          stock: newStock
        },{
          where: {productid: productsDB[i].productid}
        }) 
        
        Cart.destroy({where: {userUserid: user.user.userid}})
        
      }
     }else{
      redirect="Cancelled"
    } 

    // Crea el delivery
    const delivery = await Delivery.create(); // fer

    console.log('user', user);
    let orderuser = await Order.create({
      address: `${datapaymant.street}, ${datapaymant.city}, CP: ${datapaymant.postalCode}`,
      totalPrice: amount,
      status: redirect,
      userUserid: user.user.userid,
      deliveryDeliveryid: delivery.dataValues.deliveryid, // fer
    })
    
    await orderuser.addProduct(productsDB);
    for(let j=0; j<productsInfo.length; j++){
      await Detail.update(
        {
          quantity: Number(productsInfo[j].quantity),
          price: Number(productsInfo[j].price)
        },
        {where:{
          productid: productsInfo[j].productid,
          orderid: orderuser.orderid
        }}
      )
    }
    let html = mailOrder(productsInfo,orderuser.orderid,amount)
    SendEmails(datapaymant.email, 'Confirmación de compra', html)
    
    return res.status(200).json({payment, redirect});
  }catch(err){
    // console.log("Get users/checkout/:id", err);
    return res.status(200).json({redirect: "Cancelled"});
    //next(err)
  }
};


const getUserTickets = async(req, res, next) =>{
  const {userid} = req.params;
  const {status} = req.query
  console.log('status', status  )
  try {
    if(status !== '') {
    let tickets = await Order.findAll({
      where :  {status: status},
      include : [
        {model: Delivery},
        {model : Product},
        {model: User,
        where: {userid : userid}
        }
      ]
    });
    console.log('see', tickets)
    return res.json(tickets)
  }else {
    let tickets = await Order.findAll({
      include : [
        {model: Delivery},
        {model : Product},
        {model: User,
        where: {userid : userid}
        }
      ]
    });
    console.log('see', tickets)
    return res.json(tickets)
  }

  } catch (error) {
    console.log(error)
  }
}


const getOneTicket =async(req,res,next) => {
  const {ticketid} =req.query;
  try {
    let ticket = await Order.findOne({
      where : { orderid: ticketid },
      include: [
        {model: Delivery},
        {
          model: Product
        }
      ]
    })
    res.json(ticket)
  } catch (error) {
    console.log(error)
  }
}




module.exports = {PostCheckout, getUserTickets, getOneTicket};