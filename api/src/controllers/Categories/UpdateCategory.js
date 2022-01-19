const {Category} = require('../../db');

const updateCategory = async(res, req, next) =>{
  const { id } = req.params;
  const { name } = req.body;

  try {
    
    res.send()

  } catch (error) {
    console.log(error);
  }
}

module.exports = updateCategory;