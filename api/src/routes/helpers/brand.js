const { Router } = require('express');
const createNewBrand = require('../../controllers/Brand/CreateBrand');
const updateBrand = require('../../controllers/Brand/UpdateBrand')
// const getBrands = require('../../controllers/Brand/GetBrands')
const deleteBrand = require('../../controllers/Brand/DeleteBrand')

const router = Router();

// router.get('/', getBrands)

router.post('/', createNewBrand);

router.put('/:id', updateBrand)

router.delete('/:id', deleteBrand)

module.exports = router;