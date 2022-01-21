const { Product, Category, Brand } = require("../../db.js");

const getProducts = async () => {
  try {
    return await Product.findAll({
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
