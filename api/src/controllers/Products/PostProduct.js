const axios = require('axios');
//const { Router } = require('express')
const {Product, Category} = require('../../db');



const createNewProduct = async ( req, res, next )=>{
  //getting the info from the front to create a new product
  const { name, price, stock, condition, image, attributes, categories, sold_quantity} = req.body;
  
  try {
    const newProduct = await Product.create({
      name,
      price,
      stock,
      condition,
      image,
      attributes,
      //ask to change the allowNull to true
      sold_quantity
    })
    categories?.map(async(cat)=>{
      let product_c = await Category.findAll(
        {
          where: {name: cat}
        }
      )
      //relation with the product that we are posting
      newProduct.addType(product_c)
    })
    res.status(201).send(newProduct)
    // console.log('done');
  } catch (error) {
    console.log(error);
  }
}



module.exports = createNewProduct;