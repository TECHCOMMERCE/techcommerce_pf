const { Category } = require("../../db");

const getCategories = async (name) => {
  try {
    if (name) {
      return await Category.findAll({
        where: {
          name: name,
        },
        order: [["name", "ASC"]],
      });
    }
    
    return await Category.findAll({
      order: [["name", "ASC"]],
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getCategories;
