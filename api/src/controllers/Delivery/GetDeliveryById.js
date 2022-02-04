const { Delivery, Order } = require("../../db");

const getDeliveryById = async (id) => {
  try {
    return await Delivery.findByPk(id, {
      include: {
        model: Order,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getDeliveryById;