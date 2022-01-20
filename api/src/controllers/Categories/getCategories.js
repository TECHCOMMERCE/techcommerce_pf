const { Category } = require("../../db.js");

const getCategories = async () => {
  try {
    return await Category.findAll();
  } catch (error) {
    console.log(error);
  }
};

module.exports = getCategories;