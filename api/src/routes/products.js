const { Router } = require("express");
const getProducts = require("../controllers/Products/GetProducts");
const getProductsByQuery = require("../controllers/Products/GetProductsByQuery");
const router = Router();

// Get de todos los productos o de los productos similares por query
router.get("/", async (req, res) => {
  if (Object.entries(req.query).length) {
    const products = await getProductsByQuery(req.query);
    Promise.all(products)
    .then((resolve) => {
      // Saca el contenido de los arrays anidados de las promesas
      if (Array.isArray(resolve[0])) {
        return res.send(resolve.map((arr) => arr[0]));
      }
      return res.json(resolve);
    })
    .catch((error) => {
      console.log(error);
      return res.send([]);
    });
    
    return;
  }
  
  console.log("sin query");
  const products = await getProducts();
  return res.json(products);
});

module.exports = router;
