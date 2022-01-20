const { Brand } = require('../../db');

const createNewBrand = async ( req, res, next ) => {
  //get the info from the body (form)
  const { name } = req.body;

  try {
    const newBrand = await Brand.create( {name} );
    res.status(201).send(newBrand) 
  } catch (error) {
    res.status(500).send({message: `Ops, We couldnt create ${name}`})
  }
}

module.exports = createNewBrand;