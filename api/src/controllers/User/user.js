const router = require("express").Router();
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
  const {userid, type = "user", name, lastname, email, password = "-", from} = req.body;

  const data = {type, name, lastname, email, password};

  if(userid){
    data["userid"] = userid;
  }

  try{
    const [user, created] = await User.findOrCreate({
      where: { email, password },
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
    return res.status(200).send({code: 1, message: "Revise los campos"});
  }
});

router.put("/", async(req, res) => {
  try{
    const user = await User.findOne({where: {
      userid: req.body.userid
    }});

    user.update({...req.body})


    return res.status(200).send({code: 0, message: "Usuario creado Con éxito"});
  }catch(e){
    return res.status(200).send({code: 1, message: "Revise los campos"});
  }
});

module.exports = router;