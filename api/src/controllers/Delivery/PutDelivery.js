const { Delivery } = require("../../db.js");

const putDelivery = async (delivery) => {
  try {
    const deliveryUpdated = await Delivery.update(
      {
        status: delivery.status,
      },
      {
        where: { deliveryid: delivery.deliveryid },
      }
    );

    return deliveryUpdated ? true : false;
  } catch (error) {
    console.log(error);
  }
};

module.exports = putDelivery;