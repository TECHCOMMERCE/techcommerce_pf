const router = require("express").Router();
const { Op } = require("sequelize");
const {User} = require('../../db');

const users = [
  {
    name: "Fernando",
    lastname: "Barrios",
    email: "fer@email.com"
  },
  {
    name: "Francisco",
    lastname: "De la Cruz",
    email: "fran@email.com"
  },
  {
    name: "Pedro",
    lastname: "Pérez",
    email: "pedro@email.com"
  },
]

router.post("/", async(req, res) => {
  const {
    userid,           //userid que sirve para cuentas externas (porque firebase ya te da el id del usuario)
    type = "user", 
    name, 
    lastname, 
    email, 
    password = "-", 
    phone = "-",
    address = "-",
    country = "-",
    city = "-",
    postalcode = 0
  } = req.body;

  const data = {type, name, lastname, email, password, phone, address, country, city, postalcode};

  if(userid){
    data["userid"] = userid;
  }

  try{
    const [user, created] = await User.findOrCreate({
      where: { email, password, status: "true" },
      defaults: {
        ...data
      }
    });
  
    if(created){
      return res.status(200).send({code: 0, message: "El usuario se creó con éxito", userid: user.userid});
    }else{
      return res.status(200).send({code: 2, message: "Ya existe un usuario con esos datos"});
    }
  }catch(e){
    console.log(e);
    return res.status(200).send({code: 1, message: "Revise los campos"});
  }
});

router.put("/", async(req, res) => {
  try{
   console.log('entro aca', req.body)
    const user = await User.findOne({where: {
      userid: req.body.userid
    }}); 
    console.log('user', user)
    await user.update({...req.body, password: user.dataValues.password})


    return res.status(200).send({code: 0, message: "Usuario creado Con éxito"});
  }catch(e){
    return res.status(200).send({code: 1, message: "Revise los campos"});
  }
});



router.put("/:userid", async(req, res) => {
  console.log('entro aca 2', req.body)
  try{
    const user = await User.findOne({where: {
      userid: req.params.userid
    }});
    console.log('params', user)

    user.update({...req.body})


    return res.status(200).send({code: 0, message: "Usuario creado Con éxito"});
  }catch(e){
    return res.status(200).send({code: 1, message: "Revise los campos"});
  }
});

router.get("/", async(req, res) => {
  try{
    const users = await User.findAll({where: {
      name: {
        [Op.ne]: "admin"
      },

      lastname: {
        [Op.ne]: "admin"
      },

      status: true
    }});

    console.log(users)

    return res.status(200).send(users.map(user => user.dataValues));
  }catch(e){
    return res.status(200).send({code: 1, message: "Hay error", error: e});
  }
});

// opción de simplemente eliminarlo
router.delete("/:userid", async(req, res) => {
  try{
    const {userid} = req.params;

    await User.destroy({where: {
      userid
    }})

    return res.status(200).send({code: 0, message: "eliminado con éxito"});
  }catch(e){
    return res.status(200).send({code: 1, message: "Hay error", error: e});
  }
});


router.get('/:userid', async(req, res) => {
  try {
    const user = await User.findOne({
      where: {
      userid: req.params.userid
    },
    attributes: {
      exclude: ["password","changepassword"]
    }
  });

    res.json(user)
  } catch (error) {
    
  }
})



// opción de cambiarle el status
// router.delete("/:userid", async(req, res) => {
//   try{
//     const {userid} = req.params;
    
//     const user = await User.findOne({where: {
//       userid,
//     }});

    
//     user.update({status: false});
    
//     return res.status(200).send({code: 0, message: "eliminado con éxito"});
//   }catch(e){
//     return res.status(200).send({code: 1, message: "Hay error", error: e});
//   }
// });


module.exports = router;