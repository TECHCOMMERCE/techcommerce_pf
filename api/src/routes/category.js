const { Router } = require('express');
const createNewCategory = require('../controllers/Categories/PostCategories.js')
const updateCategory = require('../controllers/Categories/UpdateCategory')

const router = Router();

router.post('/', createNewCategory);

router.put('/:id', updateCategory);

module.exports = router;