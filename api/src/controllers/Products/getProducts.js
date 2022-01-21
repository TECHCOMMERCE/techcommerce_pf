const { Product, Category, Brand } = require("../../db.js");
const json = require("./DataProducts.json");

const getProducts = async (page) => {
  try {
    if(page > -1) {  
    return await Product.findAll({
      where: {status: true},
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
      limit: 9,
      offset: page * 9,
    })}
    else {
      return await Product.findAll({
      
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
        ]
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = getProducts;
