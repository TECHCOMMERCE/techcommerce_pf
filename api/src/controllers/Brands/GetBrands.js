const { Op } = require("sequelize");
const { Brand } = require("../../db.js");

const getBrands = async (query) => {
  try {
    if (query.name && query.page) {
      const count = await Brand.count();
      let limiter = Math.floor(count / 10);
      return await Brand.findAndCountAll({
        where: { name: { [Op.iLike]: `%${query.name}%` } },
        order: [["name", "ASC"]],
        limit: 10,
        offset: (query.page <= limiter && query.page) * 10, // de cual fila comienza a traer datos
      });
    }

    if (query.name) {
      return await Brand.findAll({
        where: { name: { [Op.iLike]: `%${query.name}%` } },
        order: [["name", "ASC"]],
      });
    }

    if (query.page) {
      const count = await Brand.count();
      let limiter = Math.floor(count / 10);
      return await Brand.findAll({
        order: ["name"],
        limit: 10,
        offset: (query.page <= limiter && query.page) * 10,
      });
    }

    return await Brand.findAll({
      where: { status: true },
      order: [["name", "ASC"]],
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getBrands;
