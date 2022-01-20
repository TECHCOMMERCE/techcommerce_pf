//import info from Data Base
const {Category} = require('../../db');

const createNewCategory = async( req, res, next) =>{

  const {name} = req.body;

  try {

    const newCategory = await Category.create({
      name
    })
    res.status(201).send(newCategory);

  } catch (error) {

    console.log(error);

  }
}

module.exports = createNewCategory;