const router = require("express").Router()
const {
  getHelp,
  getHelpByName
} = require("../controllers/Help/GetPolicy");
const postHelp = require("../controllers/Help/PostPolicy")

router.get("/:id", getHelpByName )
router.get("/", getHelp)

router.post("/", async(req, res) =>{
  let help;
  try {
    if(req.body){
      help = await postHelp(req.body);
      return res.send(help)
    }
  } catch (error) {
    console.log(error);
  }
  
})

module.exports = router;


/*
const getUsers = async (req, res) => {
  const users = await User.findAll({
    include: Country,
  });
  res.status(200).json(users);
};




*/

