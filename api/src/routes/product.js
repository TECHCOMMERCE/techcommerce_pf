const router = require("express").Router();
const getProductById = require("../controllers/Product/GetProductById");
const postProduct = require("../controllers/Product/PostProduct");
const PutProduct = require("../controllers/Product/PutProduct");

// Get de 1 producto por id
router.get("/:id", async(req, res) => {
  const product = await getProductById(req.params.id);

  product ? res.send(product) : res.send([]);
});

// Post de 1 producto
router.post("/", async (req, res) => {
  const productCreated = await postProduct(req.body);

  productCreated ? res.send("Producto creado") : res.send("Producto existente");
});

// Put de 1 producto (falta terminarlo)
router.put('/', async(req, res) => {
  const product = await PutProduct(req.body);

  res.send(product);
});

module.exports = router;