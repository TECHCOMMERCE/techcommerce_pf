const {User,Product, WishList} = require('../../db.js')
const {SERVER} = process.env;
const {mailMessage} = require('../SendMails/mailMessage')
const {SendEmails} = require('../SendMails/main')
async function postSuscription(productid){
  //const { productid } = req.query;
  let product = await Product.findOne({where: {productid}})
  let users = await product.getFavourites();
  console.log('usersfavorite', users)
  for(let i=0; i<users.length; i++){
    console.log('users'+i, users[i].email)
    let html = mailMessage(`Hola ${users[i].name} uno de los productos de tus favoritos está nuevamente disponible aprovechalo y que lo disfrutes ${product.name} <a href="${SERVER}Details/${productid}" target="_blank">Ver Producto</a>`)
    SendEmails(users[i].email,'Notificacion de producto disponible', html)
  }
  //res.send({msj: 'Recibido',users}).status(200)
}

module.exports= {
  postSuscription
}