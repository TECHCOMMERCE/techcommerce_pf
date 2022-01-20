const {Category} = require('../../db');

const updateCategory = async( req, res, next) =>{
  const id  = req.params.id;
  const { name } = req.body;

  try {
    const categoryUpdate = await Category.update(
      {name: name},
      {where:{categoryid : id}}
    )
    // console.log(categoryUpdate);

    res.json(categoryUpdate)

  } catch (error) {
    // console.log(error);

    res.status(500).send(error, {
      message:`Could not update Category with Id = ${id}`
    })
  }
}

module.exports = updateCategory;