//getting the table from the db sequelize
const { Category } = require('../../db');

const deleteCategory = async( req, res, next ) => {
  //geting the id with the params 
  let id = req.params.id;
  // let ids = String(id)

  try {
    
    const categoryDelete = await Category.destroy(
      { where:{ categoryid : id }}
    )
    console.log(categoryDelete);
      //if the await from category delete does not return anything
    if(categoryDelete === 0){
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

module.exports = deleteCategory;