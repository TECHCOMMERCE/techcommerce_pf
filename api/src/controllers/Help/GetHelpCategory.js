const { Help, Helpcategory} = require('../../db')

const getCategoriesHelp = async( req, res) => {
  try {
    let category = await Helpcategory.findAll({
      include: Help
    })
    // return category
    res.json(category).status(200)
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getCategoriesHelp,

}