const axios = require("axios")
const { Category, Brand, Product }=require("../../db")




async function getDetails(req,res,next){
  try {
    const {id} = req.params;
    let product= await Product.findOne({where: {productid: id}});
    console.log(product);
    res.json(product);
  } catch (error) {
    next(error)
  }

};


module.exports={
  getDetails
}