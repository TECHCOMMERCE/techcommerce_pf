const { Help, Helpcategory} = require('../../db')

const getCategoriesHelp = async( req, res) => {
  try {
    let category = await Helpcategory.findAll({
      include: Help
    })
    // return category
    res.status(200).json(category)
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getCategoriesHelp,

}