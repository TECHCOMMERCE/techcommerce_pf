const { Product, Category, Brand } = require("../../db.js");

const getProducts = async (page) => {
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
      limit: 9,
      offset: page * 9,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getProducts;
