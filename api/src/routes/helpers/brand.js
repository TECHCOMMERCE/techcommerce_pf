const { Router } = require('express');
const createNewBrand = require('../../controllers/Brand/CreateBrand');
const updateBrand = require('../../controllers/Brand/UpdateBrand')
const getBrands = require('../../controllers/Brand/GetBrands')

const router = Router();

router.get('/', getBrands)

router.post('/', createNewBrand);

router.put('/:id', updateBrand)

module.exports = router;