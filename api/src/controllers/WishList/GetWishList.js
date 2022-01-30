
const {WishList,User,Product} = require('../../db.js')
const { Op } = require("sequelize");
async function GetWishList(req, res, next) {
  try{
    const {userid,productid=null} = req.params
    let wish=null;
    if(productid){
      wish = await WishList.findAll({
        where:{
          [Op.and]:[
            {
              productProductid: productid
            },
            {
              userUseid: userid
            }
          ]
        }
      })
      
    }else{
      wish = await WishList.findAll({
        where:{
          userUseid: userid
        }
      })
    }
    
  }catch (error) {
    console.log(error)
  }
}
module.exports = {GetWishList};