//getting the table from the db sequelize
const { Brand } = require('../../db');

const deleteBrand = async( req, res, next ) => {
  //geting the id with the params 
  let id = req.params.id;
  // let ids = String(id)

  try {
    
    const brandDelete = await Brand.destroy(
      { where:{ brandid : id }}
    )
    console.log(brandDelete);
      //if the await from category delete does not return anything
    if(brandDelete === 0){
      return res.status(404).json({
        message: "Category not found"
      });
    }
    return res.status(204).send()
    // res.render(categoryDelete)
    // res.sendStatus(204)

  } catch (error) {
    res.status(500).send(error,{
      message:`Could not delete Category with id = ${id}`
    })
  }
}

module.exports = deleteBrand;