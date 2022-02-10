const router = require("express").Router();
const { Op } = require("sequelize");
const {User} = require('../../db');
const {mailMessage} = require('../SendMails/mailMessage')
const {SendEmails} = require('../SendMails/main')

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
      where: { email },
      defaults: {
        ...data
      }
    });
  
    if(created){
      let html = mailMessage(`Hola ${name} este email es para confirmar tu registro en Techcommerce, agradecemos tu preferencia.`)
      SendEmails(email,'Confirmación de Registro',html)
      return res.status(200).send({code: 0, message: "El usuario se creó con éxito", userid: user.userid});
    }else{
      return res.status(200).send({code: 2, message: "Ya existe un usuario con esos datos"});
    }
  }catch(e){
    return res.status(200).send({code: 1, message: "Revise los campos"});
  }
});

router.post("/mail", (req, res) => {
  const {destinatario, asunto, mensaje} = req.body
  //generando email
  let html = mailMessage(mensaje)
  //enviando mensaje
  SendEmails(destinatario,asunto,html)
  res.status(200).json(req.body)
});

// PUT del perfil
router.put("/", async(req, res) => {
  try{
    const {userid, password, userData} = req.body;

    const user = await User.findOne({where: {
      userid,
      password
    }}); 

    const data = {
      ...userData
    };
    if(userData.newPassword?.length)data["password"] = userData.newPassword
    else userData["password"] = user.password

    const response = await user.update(data);

    return res.status(200).send({code: 0, message: "Usuario actualizado Con éxito"});
  }catch(e){
    return res.status(200).send({code: 1, message: "Revise los campos"});
  }
});

// PUT para que el admin edite y para el registro
router.put("/:userid", async(req, res) => {
  // console.log("body del segundo put: ", req.body);
  try{
    const user = await User.findOne({where: {
      userid: req.params.userid,
    }});

    
    user.update({...req.body});

    return res.status(200).send({code: 0, message: "Usuario actualizado Con éxito"});
  }catch(e){
    
    return res.status(200).send({code: 1, message: "Revise los campos"});
  }
});

router.get("/", async(req, res) => {
  let users = null;

  try{  
    if(!req.query.hasOwnProperty("attributes")){
      users = await User.findAll({where: {
        name: {
          [Op.ne]: "admin"
        },
  
        lastname: {
          [Op.ne]: "admin"
        },
  
        status: true
      }});

    }else{
      let attributes = req.query.attributes.split("-");

      users = await User.findAll({where: {
        name: {
          [Op.ne]: "admin"
        },
  
        lastname: {
          [Op.ne]: "admin"
        },

        status: true
      }, attributes});
    }

    return res.status(200).send(users.map(user => user.dataValues));
  }catch(e){
    console.log(e)
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