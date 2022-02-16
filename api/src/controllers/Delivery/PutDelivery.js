const { Delivery, Order, User } = require("../../db.js");
const mailSender = require("./mailSender");

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

    if (deliveryUpdated) {
      const user = await Delivery.findByPk(delivery.deliveryid, {
        include: {
          model: Order,
          include: {
            model: User,
          },
        },
      });

      // Guardo el email de la cuenta que hizo la compra
      const email = user.dataValues.orders[0].dataValues.user.dataValues.email;
      mailSender(
        email,
        (user.dataValues.deliveryid).slice(0, 8),
        (user.dataValues.orders[0].dataValues.orderid).slice(0, 8),
        user.dataValues.status,
        (user.dataValues.createdAt).toString().slice(0, 10)
      );
    }

    return deliveryUpdated ? true : false;
  } catch (error) {
    console.log(error);
  }
};

module.exports = putDelivery;
