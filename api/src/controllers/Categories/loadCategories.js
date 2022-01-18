const { Category } = require("../../db.js");

const categories = [
  { categoryid: "MLA1649", name: "COMPUTADORAS DE ESCRITORIO" },
  { categoryid: "MLA1652", name: "NOTEBOOKS" },
  { categoryid: "MLA1694", name: "MEMORIAS RAM" },
];

const loadCategories = async () => {
  categories.map(async (c) => {
    await Category.findOrCreate({
      where: {name: c.name},
      defaults: {
        name: c.name
      }
    })
  });

  const categoriesDB = await Category.findAll();

  return categoriesDB;
};

module.exports = loadCategories;
