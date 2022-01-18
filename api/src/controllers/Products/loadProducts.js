const axios = require("axios");
const { Product } = require("../../db.js");

/* Modelo Products
productid, name, price, stock, sold_quantity, condition, image, attributes
*/

const loadProducts = async (cat) => {
  try {
    let response = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?has_pictures=true&offset=${0}&limit=10&category=MLA1694`
    );

    const { results } = response.data;

    results.map(async (product) => {
      await Product.findOrCreate({
        where: { name: product.title },
        defaults: {
          name: product.title,
          price: product.price,
          stock: product.available_quantity,
          sold_quantity: product.sold_quantity,
          condition: product.condition,
          image: product.thumbnail,
          attributes: product.attributes,
        },
      });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = loadProducts;
