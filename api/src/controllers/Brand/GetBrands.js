const { Brand } = require("../../db.js");

const getBrands = async () => {
  try {
    return await Brand.findAll({
      order: [['name', 'asc']]
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getBrands;