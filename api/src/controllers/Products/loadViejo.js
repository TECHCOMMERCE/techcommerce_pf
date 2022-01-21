const { Product, Category, Brand } = require("../../db");
const axios = require("axios");

const categoriesArr = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const brandsArr = [
  "Sony",
  "Logitech",
  "Samsung",
  "Diesel",
  "Levis",
  "No lo se Rick",
];

const loadDataFromApi = async () => {
  try {
    // creamos las marcas en la DB
    brandsArr.map(async (b) => {
      await Brand.findOrCreate({
        where: { name: b },
        defaults: {
          name: b,
        },
      });
    });

    categoriesArr.map(async (c) => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${c}`
      );
      const { data } = response;

      // creamos las categorías en la DB
      await Category.findOrCreate({
        where: { name: data[0].category },
        defaults: {
          name: data[0].category,
        },
      });

      // Creamos los productos en la DB
      data.map(async (p) => {
        const [newProduct, productCreated] = await Product.findOrCreate({
          where: { name: p.title },
          defaults: {
            name: p.title,
            price: p.price,
            stock: `${Math.trunc(Math.random() * (200 - 1)) + 1}`,
            sold_quantity: `${Math.trunc(Math.random() * (40 - 1)) + 1}`,
            condition: "new",
            image: p.image,
            attributes: p.rating,
            status: true,
          },
        });

        // busca la categoría del producto
        const category = await Category.findOne({
          where: { name: p.category },
        });
        await newProduct.addCategory(category);

        // Le asigna una marca al producto
        let brand, num;
        if (p.category === "electronics") {
          num = Math.floor(Math.random() * (3 - 0)) + 0;
          brand = await Brand.findOne({ where: { name: brandsArr[num] } });

          await brand.addProduct(newProduct);
        }

        if (p.category === "jewelery") {
          brand = await Brand.findOne({ where: { name: brandsArr[5] } });

          await brand.addProduct(newProduct);
        }

        if (p.category === "men's clothing") {
          num = Math.floor(Math.random() * (5 - 3)) + 3;
          brand = await Brand.findOne({ where: { name: brandsArr[num] } });

          await brand.addProduct(newProduct);
        }

        if (p.category === "women's clothing") {
          num = Math.floor(Math.random() * (5 - 3)) + 3;
          brand = await Brand.findOne({ where: { name: brandsArr[num] } });

          await brand.addProduct(newProduct);
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = loadDataFromApi;
