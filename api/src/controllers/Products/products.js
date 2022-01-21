const { Op } = require('sequelize');
const {Product, Category} = require('../../db');

const products = async ( req, res, next )=>{
  try {
    let products = null;
    let data = null;

    const {search, category} = req.query;

    if(search){
      data = await Product.findAll({where: {
        name: {
          [Op.iLike]: search+"%"
        }
      }});
    }else{
      data = await Product.findAll();
    }

    products = data.map( ({dataValues}) => {
      return {
        id: dataValues.productid,
        name: dataValues.name,
        image: dataValues.image,
        price: dataValues.price
      }
    })
    
    res.status(200).send(products);
  } catch (error) {
    res.status(404).send({error})
  }
}


module.exports = products;