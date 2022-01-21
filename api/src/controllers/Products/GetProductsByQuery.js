const { Op } = require("sequelize");
const { Product, Category, Brand } = require("../../db");

const getProductsByQuery = async (name) => {
  return await Product.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
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
};

module.exports = getProductsByQuery;
