const router = require("express").Router();
const getBrands = require("../../controllers/Brand/GetBrands");

router.get("/", async(req, res) => {  
  const brands = await getBrands();
  
  res.send(brands);
})

module.exports = router;