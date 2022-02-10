const router = require("express").Router();
const {
  getCategoriesHelp,
} = require("../controllers/Help/GetHelpCategory")
const postCategoryPolicy = require("../controllers/Help/PostHelpCategory")

router.get("/",getCategoriesHelp )

router.post("/", async(req, res)=>{
  let catogory;
  try {
    if(req.body){
      catogory = await postCategoryPolicy(req.body);
      return res.send(catogory)
    }
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;