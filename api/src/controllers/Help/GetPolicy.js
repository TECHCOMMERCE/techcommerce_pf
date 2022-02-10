const { Help, Helpcategory } = require('../../db')

let categoriesHelp = [
  {
    helpcategoryid: "51508865-fd4e-43d3-befb-a69d4c7688b7",
    name: "Ordenes",
  },
  {
    helpcategoryid: "16163e62-3502-4e92-8f74-832de4e3ec53",
    name: "Pagos & Rembolsos",
  },
  {
    helpcategoryid: "0dea9d0f-c6d0-41c2-a2ce-aaeb945e5098",
    name: "Cuenta",
  }
]

const getHelp = async( req, res) => {
  try{

    // let count = await Help.count();

    // if(!count){ //Si conteo es 0, registro productos
    //   let names=categories.map(c=>{ //filtro los nombres de las categorias y hago el registro
    //     return {
    //       name: c.name
    //     }
    //   })
    //   await Helpcategory.bulkCreate(names)
      
    //   for(let i = 0; i < categoriesHelp.length; i++ ){
    //     let auxoffset=0;
    //   }

    // }  
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