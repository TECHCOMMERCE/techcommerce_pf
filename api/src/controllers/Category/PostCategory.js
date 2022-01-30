const { Category } = require("../../db");

const postCategory = async (category) => {
  try {
    const [newCategory, categoryCreated] = await Category.findOrCreate({
      where: { name: category.name },
      defaults: {
        name: category.name,
      },
    });
   
    return categoryCreated ? true : false;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = postCategory;