const router = require("express").Router();
const loadCategories = require("../controllers/Categories/loadCategories");
const getCategories = require("../controllers/Categories/getCategories");

router.get("/categories", async(req, res) => {
  // carga categories hardcodeadas (no debería formar parte del código)
  await loadCategories();

  const categories = await getCategories();

  res.send(categories);
})

module.exports = router;