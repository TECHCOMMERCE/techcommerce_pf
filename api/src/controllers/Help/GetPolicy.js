const { Help, Helpcategory } = require('../../db')

const getHelp = async( req, res) => {
  try{
    let policy = await Help.findAll({
        include: Helpcategory
      })
      console.log(Help.findAll());
      // console.log(policy);

    // return policy
    res.status(200).json(policy)
  }
  catch(err){
    console.log(err)
  }
}

const getHelpByName = async (req, res) => {
  const { id } = req.params;
  try {
    const policyName = await Help.findByPk(id,{include:Helpcategory});
    if (policyName) return res.status(200).json(policyName);
    return res.status(404).json({ msg: 'policyName not found' });
  } 
  catch (error) {
    console.log(error);
  }
}


module.exports = {
  getHelp,
  getHelpByName
};