const { Brand } = require("../../db");

const getBrandById = async (id) => {
  try {
    return await Brand.findByPk(id);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getBrandById;
