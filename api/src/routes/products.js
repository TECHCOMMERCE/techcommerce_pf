
const { Router } = require('express');
const {createNewProduct} = require('../controllers/Products/PostProduct.js')
const {getProducts} =require('../controllers/Products/getAllProducts.js');
const router = Router();


router.get('/products', getProducts)
router.post('/', createNewProduct)

module.exports = router;