const { Product, Category, Brand } = require("../../db.js");

const postProduct = async (product) => {
  try {
    const brandBD = await Brand.findByPk(product[0].brand);

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
        status: product[0].status,
      },
    });

    // mixin de product con brand
    await brandBD.addProduct(newProduct);

    // Busca y enlaza las categorías con el producto
    product[0].categories.map(async (c) => {
      const category = await Category.findOne({
        where: { name: c },
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