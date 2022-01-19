const { Router } = require('express');
const createNewCategory = require('../controllers/Categories/PostCategories.js')

const router = Router();

router.post('/', createNewCategory)

module.exports = router;