const router = require("express").Router();
const getBrands = require("../controllers/Brands/GetBrands");

router.get("/", async(req, res) => {
  let brands;
  if(req.query.name){
    brands = await getBrands(req.query);
    return brands ? res.send(brands) : res.send("Error");
  }
  
  brands = await getBrands();
  return brands ? res.send(brands) : res.send("Error");
})

module.exports = router;