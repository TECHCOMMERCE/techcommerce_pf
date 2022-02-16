const { Op } = require("sequelize");
const { Category } = require("../../db");

const getCategories = async (query) => {
  try {
    if (query.name && query.page) {
      const count = await Category.count();
      let limiter = Math.floor(count / 10);
      return await Category.findAndCountAll({
        where: { name: { [Op.iLike]: `%${query.name}%` } },
        order: ["name"],
        limit: 10,
        offset: (query.page <= limiter && query.page) * 10,
      });
    }

    if (query.page) {
      const count = await Category.count();
      let limiter = Math.floor(count / 10);
      return await Category.findAll({
        order: ["name"],
        limit: 10,
        offset: (query.page <= limiter && query.page) * 10,
      });
    }

    if (query.name) {
      return await Category.findAll({
        where: {
          name: query.consolename,
        },
        order: [["name", "ASC"]],
      });
    }

    return await Category.findAll({
      where: { status: true },
      order: [["name", "ASC"]],
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getCategories;
