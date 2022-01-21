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
  const {idUser, type = "user", name, lastname, email, password = "-", from} = req.body;

  const data = {type, name, lastname, email, password};

  if(idUser){
    data["idUser"] = idUser;
  }

  try{
    const [user, created] = await User.findOrCreate({
      where: { email, password },
      defaults: {
        ...data
      }
    });
  
    if(created){
      return res.status(200).send({code: 0, message: "El usuario se creó con éxito"});
    }else{
      return res.status(200).send({code: 2, message: "Ya existe un usuario con esos datos"});
    }
  }catch(e){
    return res.status(200).send({code: 1, message: "Revise los campos"});
  }

})

module.exports = router;