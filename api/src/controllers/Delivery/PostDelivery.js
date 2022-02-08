const {Delivery} = require("../../db");

const postDelivery = async(delivery) => {
  try {
    const newDelivery = await Delivery.create(delivery);
   
    return newDelivery;
  } catch (error) {
    console.log(error);
    return error;
  }
}

module.exports = postDelivery;