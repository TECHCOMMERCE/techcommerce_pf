const { Brand } = require("../../db.js");

const PutBrand = async (brand) => {
  try {
    const brandUpdated = await Brand.update(
      {
        name: brand.name,
        status: brand.status,
      },
      {
        where: { brandid: brand.brandid },
      }
    );

    return brandUpdated ? true : false;
  } catch (error) {
    console.log(error);
  }
};

module.exports = PutBrand;