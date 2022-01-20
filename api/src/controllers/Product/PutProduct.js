const { Product, Brand, Category } = require("../../db.js");

// Es necesario que se cree el producto, la marca y la o las categorías en rutas separadas.

const PutProduct = async (product) => {
  try {
    // busca la marca en la BD
    const brandExist = await Brand.findByPk(product[0].brand);

    // actualiza o crea la marca sino existe
    // if(!brandExist?.dataValues.name){
    //   console.log("entré");

    //   const brandUpdated = await Brand.update(
    //     { name: product[0].brand.name },
    //     {
    //       where: { brandid: product[0].brand.brandid },
    //     }
    //   );
    // }

    // actualiza el producto
    const productUpdated = await Product.update(
      {
        name: product[0].name,
        price: product[0].price,
        stock: product[0].stock,
        sold_quantity: product[0].sold_quantity,
        condition: product[0].condition,
        image: product[0].image,
        attributes: product[0].attributes,
        status: product[0].status,
      },
      { where: { productid: product[0].productid } }
    );

    // mixin
    brandExist.addProduct(product[0].productid);

    // busca las categorías
    product[0].categories.map(async (c) => {
      const category = await Category.findOne({ where: { name: c } });

      console.log(category.dataValues);
      // mixin
      category.addProduct(product[0].productid);
    });

    return productUpdated;
  } catch (error) {
    console.log(error);
  }
};

module.exports = PutProduct;
