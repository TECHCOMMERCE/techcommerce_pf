const { Router } = require('express');
const createNewBrand = require('../../controllers/Brand/CreateBrand');

const router = Router();

router.post('/', createNewBrand);

module.exports = router;