const { Op } = require("sequelize");
const { Category } = require("../../db");

const getCategories = async (query) => {
  try {
    if (query.name) {
      return await Category.findAll({
        where: {
          name: { [Op.iLike]: `%${query.name}%` },
        },
        order: [["name", "ASC"]],
      });
    }

    if(query.admin) {
      const count = await Category.count();
      let limiter = Math.floor(count / 10);
      return await Category.findAll({
        order: ["name"],
        limit: 10,
        offset: (query.admin <= limiter && query.admin) * 10
      });
    };

    return await Category.findAll({
      order: [["name", "ASC"]],
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getCategories;
