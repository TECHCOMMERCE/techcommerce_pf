const router = require("express").Router();
const getBrandById = require("../controllers/Brand/GetBrandById");
const postBrand = require("../controllers/Brand/PostBrand");
const putBrand = require("../controllers/Brand/PutBrand");

router.get("/:brandid", async (req, res) => {
  let brand = await getBrandById(req.params.brandid);
  return brand ? res.send(brand) : res.send("Error");
});

router.post("/", async(req, res) => {
  let brandCreated = await postBrand(req.body);
  brandCreated ? res.send("Brand created") : res.send("This brand already exist");
});

router.put("/", async(req, res) => {
  let brandEdited = await putBrand(req.body);
  brandEdited ? res.send("Brand edited") : res.send("Error");
});

module.exports = router;