const { Brand } = require("../../db.js");

const brand = [
  { brandid: "b1", name: "Asus" },
  { brandid: "b2", name: "AOC" },
  { brandid: "b3", name: "Motorola" },
];

const loadBrands = async () => {
  try {
    brand.map(async (b) => {
      await Brand.findOrCreate({
        where: { name: b.name },
        defaults: {
          name: b.name,
        },
      });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = loadBrands;
