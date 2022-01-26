const { Router } = require("express");
const { Op } = require("sequelize");
const {getProductsFiltered, getProducts} = require("../controllers/Products/GetProducts");
const getProductsByQuery = require("../controllers/Products/GetProductsByQuery");
const { Product } = require("../db");
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

  const products = await getProducts();
  return products ? res.send(products) : res.send([]);
});

router.get("/names", async (req, res) => {
  const name = req.query.name;
  
  try{
    if(name){
      const dataTable = await Product.findAll({
        attributes: ["name", "productid"]
      });

      let names = dataTable.map(data => {
        return{
          id: data.dataValues.productid,
          name: data.dataValues.name
        }
      })
      names = names.filter(productName => productName.name.toLowerCase().includes(name.toLowerCase()));

      if(names.length > 0){
        return res.send({code: 0, names});
      }else{
        return res.status(200).send({code: 1, names});
      }
    }else{
      return res.send({code: null, results:[]})
    }
  }catch(e){
    console.log(e)
    return res.status(404).send({
      code: 1,
      message: "hubo un error",
      error: e
    })
  }
});


router.get('/all', async(req, res)=> {
  const {page} = req.query;
  console.log(req.query);
  // console.log(req.query)
  const products = await getProductsFiltered(req.query, page);
  return products ? res.json(products) : res.send([]);
})

module.exports = router;
