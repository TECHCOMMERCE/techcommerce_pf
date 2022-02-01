const router = require("express").Router();
const getCategories = require("../controllers/Categories/GetCategories");

router.get("/", async(req, res) => {
  let categories;
  if(req.query){
    categories = await getCategories(req.query);

    return categories ? res.send(categories) : res.send ([])
  }

  categories = await getCategories();
  return categories ? res.send(categories) : res.send([]);
})

module.exports = router;