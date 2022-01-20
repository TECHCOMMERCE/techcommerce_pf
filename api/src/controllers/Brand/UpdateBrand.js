const { Brand } = require('../../db');

const updateBrand = async( req, res, next) =>{
  const id = req.params.id;
  const { name } = req.body;

  try {
    const brandUpdate = await Brand.update(
      {name:name},
      {where: {brandid : id}}
    )
    res.json(brandUpdate)
  } catch (error) {
    res.status(500).send(error,{
      message:`Could not update the brand with id = ${id}`
    })
  }
}

module.exports = updateBrand; 