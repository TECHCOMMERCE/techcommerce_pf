const { Product, Category, Brand } = require("../../db");
const axios = require("axios");

const categoriesArr = ["MLA1051", "MLA1648", "MLA1144"];

const loadDataFromApi = async () => {
  try {
    categoriesArr.map(async (c) => {
      const response = await axios.get(
        `https://api.mercadolibre.com/sites/MLA/search?has_pictures=true&category=${c}`
      );
      const { results, filters } = response.data;

      // creamos las categorías en la DB
      await Category.findOrCreate({
        where: { name: filters[0].values[0].name },
        defaults: {
          name: filters[0].values[0].name,
        },
      });

      // Creamos las marcas en la DB
      results.map(async (brand) => {
        await Brand.findOrCreate({
          where: { name: brand.attributes[0].value_name },
          defaults: {
            name: brand.attributes[0].value_name,
          },
        });
      });

      // Creamos los productos en la DB
      results.map(async (p) => {
        const [newProduct, productCreated] = await Product.findOrCreate({
          where: { name: p.title },
          defaults: {
            name: p.title,
            price: p.price,
            stock: p.available_quantity,
            sold_quantity: p.sold_quantity,
            condition: p.condition,
            image: p.thumbnail,
            attributes: p.attributes,
            status: true,
          },
        });

        // busca la categoría del producto
        const category = await Category.findOne({
          where: { name: filters[0].values[0].name },
        });
        await newProduct.addCategory(category);

        // Le asigna una marca al producto
          brand = await Brand.findOne({ where: { name: results[0].attributes[0].value_name} });

          await brand.addProduct(newProduct);
      });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = loadDataFromApi;