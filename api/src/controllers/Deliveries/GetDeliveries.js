const { Op } = require("sequelize");
const { Delivery, Order } = require("../../db");

const getDeliveries = async (query) => {
  try {
    if (query.createdFrom && query.createdTo && query.page) {
      const count = await Delivery.count();
      let limiter = Math.floor(count / 10);
      return await Delivery.findAndCountAll({
        where: { createdAt: { [Op.between]: [query.createdFrom, query.createdTo] } },
        include: {
          model: Order,
        },
        order: ["createdAt"],
        limit: 10,
        offset: (query.page <= limiter && query.page) * 10,
      });
    }

    if (query.updatedFrom && query.updatedTo && query.page) {
      const count = await Delivery.count();
      let limiter = Math.floor(count / 10);
      return await Delivery.findAndCountAll({
        where: { updatedAt: { [Op.between]: [query.updatedFrom, query.updatedTo] } },
        include: {
          model: Order,
        },
        order: ["updatedAt"],
        limit: 10,
        offset: (query.page <= limiter && query.page) * 10,
      });
    }

    if (query.status && query.page) {
      console.log("status");
      const count = await Delivery.count();
      let limiter = Math.floor(count / 10);
      return await Delivery.findAndCountAll({
        where: { status: query.status },
        include: {
          model: Order,
        },
        order: ["status"],
        limit: 10,
        offset: (query.page <= limiter && query.page) * 10,
      });
    }

    return await Delivery.findAndCountAll({
      order: ["createdAt"],
      include: {
        model: Order,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getDeliveries;
