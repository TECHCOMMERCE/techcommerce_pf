const {Product} = require("../../db.js");

const getProducts = async() => {
  try {
    return await Product.findAll();
  } catch (error) {
    console.log(error)
  }
}

module.exports = getProducts;