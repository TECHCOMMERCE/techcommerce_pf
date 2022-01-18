const { Router } = require("express");
const loadProducts = require("../controllers/Products/loadProducts");
const getProducts = require("../controllers/Products/getProducts");
const postProduct = require("../controllers/Products/postProduct");

const router = Router();

router.get("/", async (req, res) => {
  // carga products desde la API de Meli (No debría formar pate del código)
  await loadProducts();

  const products = await getProducts();

  res.json(products);
});

router.post("/", async (req, res) => {
  const productCreated = await postProduct(req.body);

  productCreated ? res.send("Producto creado") : res.send("Producto existente");
});

module.exports = router;