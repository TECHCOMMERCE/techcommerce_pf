
const { Router } = require('express');
const products = require('../controllers/Products/products');
//const {createNewProduct} = require('../controllers/Products/PostProduct.js')
const router = Router();



//router.post('/', createNewProduct)
router.get("/", products);

module.exports = router;