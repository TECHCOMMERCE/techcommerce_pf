const { Brand } = require("../../db.js");

const getBrands = async (brand) => {
  try {
    if (brand) {
      return await Brand.findAll({
        where: { name: brand.name },
        order: [["name", "ASC"]],
      });
    }

    return await Brand.findAll({
      order: [["name", "ASC"]],
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getBrands;
