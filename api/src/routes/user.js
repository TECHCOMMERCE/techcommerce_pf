const router = require("express").Router();

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

router.post("/users", async(req, res) => {
  
})

module.exports = router;