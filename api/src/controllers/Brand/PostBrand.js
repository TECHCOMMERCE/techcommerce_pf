const { Brand } = require("../../db");

const postBrand = async (brand) => {
  try {
    const [newBrand, brandCreated] = await Brand.findOrCreate({
      where: { name: brand.name },
      defaults: {
        name: brand.name,
      },
    });
   
    return brandCreated ? true : false;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = postBrand;