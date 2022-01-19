const axios = require("axios");
const { Category, Brand, Product }  = require("../../db")


async function getProducts(req,res,next){
  try {
    
    let {page} =req.query;
    if(!page) page=0;
    const itemsPerPage=9; 
    //let data= await Product.findAll();
    const result = await Product.findAndCountAll({
      limit: 9,
      offset: page * 9
    });
    console.log('result', result.rows.length)
    let orderData=[];
    res.json(result)
    //res.json( orderData.slice(itemsPerPage * (page -1), (itemsPerPage * (page- 1)) + itemsPerPage));
    } catch (error) {
    next(error)
    }

};


module.exports={
  getProducts
}