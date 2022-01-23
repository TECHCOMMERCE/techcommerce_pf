const { Product, Brand, Category } = require("../../db.js");

const PutProduct = async (product) => {
  try {
    // Actualiza el producto y la marca
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
        brandBrandid: product[0].brandid,
      },
      {
        where: { productid: product[0].productid },
      }
    );

    // Busca el producto
    const targetProduct = await Product.findByPk(product[0].productid);

    // Busca todas las categorias viejas
    const oldCategories = await Category.findAll({
      include: { model: Product, where: { productid: product[0].productid } },
    });

    // le remueve todas las categorías al producto
    await targetProduct.removeCategories(oldCategories);

    // Itera las categorías nuevas para agregarlas al producto
    product[0].categories.map(async (newCat) => {
      // busca la nueva categoría
      const newCategory = await Category.findOne({ where: { name: newCat } });

      // Relaciona a la categoría con el producto
      await newCategory.addProduct(targetProduct);
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = PutProduct;
