const {   Helpcategory } = require('../../db')

const postCategoryPolicy = async(body) =>{
  const { name }  = body;

  try {
    const newCategory = await Helpcategory.create({name})
    // console.log(  Helpcategory      );
    // res.status(201).send(newCategory)
    return newCategory
  } catch (error) {
    console.log(error);
  }
}

module.exports = postCategoryPolicy;