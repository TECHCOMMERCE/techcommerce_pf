const { Help, Helpcategory } = require('../../db')

const getHelp = async( req, res) => {
  try{
    let policy = await Help.findAll({
        include: Helpcategory
      })
      // console.log(Help.findAll());
      // console.log(policy);
      // console.log(policy, 'prueba-----------');
    // return policy
    res.json(policy).status(200)
  }
  catch(err){
    console.log(err)
  }
}

const getHelpByName = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const policyName = await Help.findByPk(id,{include:Helpcategory});
    // console.log(policyName);
    if (policyName) return res.json(policyName).status(200);
    return res.json({ msg: 'policyName not found' }).status(404);
  } 
  catch (error) {
    console.log(error);
  }
}


module.exports = {
  getHelp,
  getHelpByName
};