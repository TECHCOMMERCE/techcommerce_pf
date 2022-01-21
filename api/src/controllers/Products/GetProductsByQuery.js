const { Op } = require("sequelize");
const { Product, Category, Brand } = require("../../db");

const getProductsByQuery = async (query) => {
  try {
    // recibe un string desde el searchbar
    if (query.name)
      return await Product.findAll({
        where: {
          name: {
            [Op.iLike]: `%${query.name}%`,
          },
          [Op.and]: {
            status: true,
          },
        },
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
      });

    // debe recibir un array de strings con los ids de las categorías
    if (query.categories) {
      return query.categories.split(",").map(async (c) => {
        return await Category.findAll({
          where: { categoryid: c },
          include: {
            model: Product,
            where: { status: true },
            through: {
              attributes: [],
            },
          },
        });
      });
    }

    // debe recibir un array de strings con los ids de las marcas
    if (query.brands) {
      return query.brands.split(",").map(async (b) => {
        return await Brand.findAll({
          where: { brandid: b },
          include: {
            model: Product,
            where: {
              status: true,
            },
          },
        });
      });
    }

    // debe recibir un string con el tipo de ordenamiento de precios
    if (query.sortPrices) {
      return await Product.findAll({
        where: { status: true },
        order: [["price", query.sortPrices]],
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
      });
    }

    // debe recibir un string con el tipo de ordenamiento alfabético
    if (query.sort) {
      return await Product.findAll({
        where: { status: true },
        order: [["name", query.sort]],
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
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = getProductsByQuery;
