const { Router } = require('express');
const getReview = require('../../controllers/Reviews/GetReview')

const router = Router();

router.get('/', getReview)

module.exports = router;