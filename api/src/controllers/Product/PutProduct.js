const { Product, Brand, Category } = require("../../db.js");
const {postSuscription} = require("../PSuscription/PostSuscription")
const PutProduct = async (product) => {
  try {
    // Actualiza el producto y la marca

    const productUpdated = await Product.update(
      {
        name: product.name,
        price: product.price,
        stock: product.stock,
        sold_quantity: product.sold_quantity,
        condition: product.condition,
        image: product.image,
        attributes: product.attributes,
        status: product.status,
        brandBrandid: product.brandid,
      },
      {
        where: { productid: product.productid },
      }
    );
    
    if(product.stock>0){
      postSuscription(product.productid)
    }

    // Busca el producto
    const targetProduct = await Product.findByPk(product.productid);

    // Busca todas las categorias viejas
    const oldCategories = await Category.findAll({
      include: { model: Product, where: { productid: product.productid } },
    });

    // le remueve todas las categorías al producto
    await targetProduct.removeCategories(oldCategories);

    // Itera las categorías nuevas para agregarlas al producto
    product.categories.map(async (newCat) => {
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
