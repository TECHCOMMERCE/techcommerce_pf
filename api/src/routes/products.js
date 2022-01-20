
const { Router } = require('express');
const {createNewProduct} = require('../controllers/Products/PostProduct.js')
const {getProducts} =require('../controllers/Products/getAllProducts.js');
const {getDetails}= require('../controllers/Products/getDetails.js');
const router = Router();


router.get('/details/:id', getDetails)
router.get('/products', getProducts)
router.post('/', createNewProduct)

module.exports = router;