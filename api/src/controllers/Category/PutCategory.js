const { Category } = require("../../db.js");

const PutCategory = async (category) => {
  try {
    const categoryUpdated = await Category.update(
      {
        name: category.name,
        status: category.status,
      },
      {
        where: { categoryid: category.categoryid },
      }
    );

    return categoryUpdated ? true : false;
  } catch (error) {
    console.log(error);
  }
};

module.exports = PutCategory;