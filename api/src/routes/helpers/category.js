const { Router } = require('express');
const createNewCategory = require('../../controllers/Categories/PostCategories.js')
const updateCategory = require('../../controllers/Categories/UpdateCategory')
const getCategories = require('../../controllers/Categories/GetCategories')
const deleteCategory = require('../../controllers/Categories/DeleteCategory')

const router = Router();

router.get('/', getCategories)

router.post('/', createNewCategory);

router.put('/:id', updateCategory);

router.delete('/:id', deleteCategory)

module.exports = router;