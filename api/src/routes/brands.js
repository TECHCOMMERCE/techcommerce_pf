const router = require("express").Router();
const getBrands = require("../controllers/Brand/GetBrands");
const loadBrands = require("../controllers/Brand/loadBrands");

router.get("/", async(req, res) => {
  // esto solo carga unas brands hardcodeadas (no debería formar parte del código)
  await loadBrands();
  
  const brands = await getBrands();
  
  res.send(brands);
})

module.exports = router;