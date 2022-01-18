<<<<<<< HEAD
const { Product, Category, Brand } = require("../../db.js");

const postProduct = async (product) => {
  try {
    const brand = await Brand.findOrCreate({
      where: { name: product[0].brand },
      defaults: { name: product[0].brand },
    });

    const [newProduct, productCreated] = await Product.findOrCreate({
      where: { name: product[0].name },
      defaults: {
        name: product[0].name,
        price: product[0].price,
        stock: product[0].stock,
        sold_quantity: product[0].sold_quantity,
        condition: product[0].condition,
        image: product[0].image,
        attributes: product[0].attributes,
      },
    });

    product[0].categories.map(async (c) => {
      const [category] = await Category.findOrCreate({
        where: { name: c },
        defaults: { name: c },
      });

      // mixin
      await category.addProduct(newProduct);
    });

    return productCreated ? true : false;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = postProduct;
=======
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
>>>>>>> origin/development
