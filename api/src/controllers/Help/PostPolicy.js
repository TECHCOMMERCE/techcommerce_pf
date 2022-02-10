const { Help, Helpcategory } = require('../../db')

const postHelp = async(body) =>{
  const  {
            title,
            description,
            description2,
            description3,
            description4,
            description5,
            subtitle, 
            img, 
            HelpcategoryId} = body
  try {
    const newPolicy = await Help.create({
      title,
      description,
      subtitle, 
      img, 
      HelpcategoryId, 
      description2,
      description3,
      description4,
      description5,
    })
    
    // res.status(201).send(newPolicy)
    return newPolicy
  } catch (error) {
    console.log(error);
  }
}

module.exports = postHelp;