const { Op } = require("sequelize");
const { Product, Category, Brand } = require("../../db.js");

const getProductsFiltered = async (body, page) => {
  // console.log("wtf", body);
  // console.log(body["category"]);
  //query = [category, brand]
  
  let condition = {
    status: true
  };

  if(body.name){
    condition["name"] = {
      [Op.iLike]: `%${body.name}%`,
    };
  }

  console.log(condition);
  
  if (body) {
    if (body.brand && body.category) {
      // console.log("entro aca brand");
      if (body.sort) {
        const products = await Product.findAll({
          where: condition,
          order: [[["price", body.sort.toUpperCase()]]],
          include: [
            {
              model: Brand,
              where: { name: body["brand"] },
            },
            {
              model: Category,
              where: { name: body["category"] },
            },
          ],
          limit: 9,
          offset: page * 9,
        });
        // console.log(products.length);

        return products;
      } else {
        const products = await Product.findAll({
          where: condition,
          include: [
            {
              model: Brand,
              where: { name: body["brand"] },
            },
            {
              model: Category,
              where: { name: body["category"] },
            },
          ],
          limit: 9,
          offset: page * 9,
        });
        // console.log(products.length);

        return products;
      }
    }
  }
  if (body.category && !body.brand?.length) {
    // console.log("entro aca 2");
    let products = await Product.findAll({
      where: condition,
      include: [
        {
          model: Category,
          where: { name: body["category"] },
        },
        { model: Brand },
      ],
      limit: 9,
      offset: page * 9,
    });

    if (!body.sort) return products;
    else if (body.sort === "asc")
      return products.sort((a, b) => b.price - a.price);
    else if (body.sort === "dsc")
      return products.sort((a, b) => a.price - b.price);
  }
  if (body.brand?.length && !body.category?.length) {
    // console.log("entro aca 3");

    let index;

    let products = await Product.findAll({
      where: condition,
      include: [
        {
          model: Brand,
          where: { name: body["brand"] },
        },
        {
          model: Category,
        },
      ],
      limit: 9,
      offset: page * 9,
    });
    // console.log(products.length);
    if (!body.sort) return products;
    else if (body.sort === "asc")
      return products.sort((a, b) => b.price - a.price);
    else if (body.sort === "dsc")
      return products.sort((a, b) => a.price - b.price);
  } else {
    let products = await Product.findAll({
      where: condition,
      include: [
        {
          model: Category,
        },
        { model: Brand },
      ],
      limit: 9,
      offset: page * 9,
    });
    if (!body.sort) return products;
    else if (body.sort === "asc")
      return products.sort((a, b) => b.price - a.price);
    else if (body.sort === "dsc")
      return products.sort((a, b) => a.price - b.price);
  }
};


const getProducts = async (page) => {
  try {
    if (page > -1) {
      return await Product.findAll({
        where: { status: true },
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
        limit: 9,
        offset: page * 9,
      });
    } else {
      return await Product.findAll({
        where: { status: true },
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


module.exports = {getProducts, getProductsFiltered};