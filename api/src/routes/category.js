const router = require("express").Router();
const putCategory = require("../controllers/Category/PutCategory");
const getCategoryById = require("../controllers/Category/GetCategoryById");
const postCategory = require("../controllers/Category/PostCategory");

router.get("/:categoryid", async (req, res) => {
  const category = await getCategoryById(req.params.categoryid);
  category ? res.send(category) : res.send([]);
});

router.post("/", async(req, res) => {
  const category = await postCategory(req.body);
  category ? res.send("Category created") : res.send("This category already exist");
});

router.put("/", async(req, res) => {
  const category = await putCategory(req.body);
  category ? res.send("Category edited") : res.send("Error editing category");
})

module.exports = router;