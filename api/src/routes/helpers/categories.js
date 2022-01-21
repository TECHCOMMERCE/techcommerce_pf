const router = require("express").Router();
const getCategories = require("../../controllers/Categories/getCategories");

router.get("/", async(req, res) => {
  const categories = await getCategories();

  res.send(categories);
})

module.exports = router;