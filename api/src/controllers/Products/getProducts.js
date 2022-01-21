const { Product, Category, Brand } = require("../../db.js");
const json = require("./DataProducts.json");

const getProducts = async () => {
  try {
    return await Product.findAll({
      where: {status: true},
      include: [
        {
          model: Category,
          through: {
            attributes: [],
          },
        },
        {
          model: Brand,
        },
      ],
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getProducts;
