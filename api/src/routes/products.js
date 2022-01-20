const { Router } = require("express");
const getProducts = require("../controllers/Products/GetProducts");
const getProductsByQuery = require("../controllers/Products/GetProductsByQuery");
const router = Router();

// Get de todos los productos o de los productos similares por query
router.get("/", async (req, res) => {
  if(req.query.name){
    const products = await getProductsByQuery(req.query.name);

    return products ? res.send(products) : res.send([]);
  }

  const products = await getProducts();
  
  res.json(products);
});

module.exports = router;