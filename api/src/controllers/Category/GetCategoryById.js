const { Category } = require("../../db");

const getCategoryById = async (id) => {
  try {
    return await Category.findByPk(id);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getCategoryById;