const { Brand } = require("../../db.js");

const getBrands = async () => {
  try {
    return await Brand.findAll();
  } catch (error) {
    console.log(error);
  }
};

module.exports = getBrands;
