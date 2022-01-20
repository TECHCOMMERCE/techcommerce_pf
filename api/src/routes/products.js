
const { Router } = require('express');
const createNewProduct = require('../controllers/Products/PostProduct.js')
const router = Router();

router.post('/', createNewProduct)

module.exports = router;