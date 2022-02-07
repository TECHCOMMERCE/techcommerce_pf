const {User,Product, WishList} = require('../../db.js')
async function getSuscription(req, res, next){
  const {productid } = req.query;

  /* let user = await User.findById(userid);
  let products = user.getFavourites();
  if(products){ 
  }*/

  let product = await WishList.findAll({
    where: {
      productid: productid
    }
  })
}

module.exports= {
  getSuscription
}