const { Router } = require('express');
const createNewBrand = require('../../controllers/Brand/CreateBrand');
const updateBrand = require('../../controllers/Brand/UpdateBrand')


const router = Router();

router.get('/', getBrands)

router.post('/', createNewBrand);

module.exports = router;