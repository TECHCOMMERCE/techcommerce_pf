const { Router } = require("express");
const {getProductsFiltered} = require("../controllers/Products/GetProducts");
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

//   const {page} = req.query;
//   if(req.query.name){
//     const products = await getProductsByQuery(req.query.name);

//     return products ? res.send(products) : res.send([]);
//   }
//   const products = await getProducts(page);

//   console.log("sin query");
  const products = await getProducts();
  return products ? res.send(products) : res.send([]);
});

router.get('/all', async(req, res)=> {
  const {page} =req.query;
  console.log('body',req.query)
  const products = await getProductsFiltered(req.query, page);
  return products ? res.json(products) : res.send([]);
})

module.exports = router;
