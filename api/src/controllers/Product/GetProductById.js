const { Product, Category, Brand } = require("../../db.js");

// Get a 1 producto por id
const getProductById = async (id) => {
  console.log('id', id)
  try {
    console.log
    return await Product.findByPk(id , {
      include: [
        {
          model: Category,
          through: {
            attributes: [],
          },
        },
        {
          model: Brand,
        },
      ],
    } );
  } catch (error) {
    console.log(error);
  }
};

module.exports = getProductById;
