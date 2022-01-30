const { Product, Category, Brand } = require("../../db.js");

const postProduct = async (product) => {
  try {
    const brandBD = await Brand.findByPk(product.brand);

    const [newProduct, productCreated] = await Product.findOrCreate({
      where: { name: product.name },
      defaults: {
        name: product.name,
        price: product.price,
        stock: product.stock,
        sold_quantity: product.sold_quantity,
        condition: product.condition,
        image: product.image,
        attributes: product.attributes,
        status: product.status,
      },
    });

    // mixin de product con brand
    await brandBD.addProduct(newProduct);

    // Busca y enlaza las categorías con el producto
    product.categories.map(async (c) => {
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