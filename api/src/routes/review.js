const { Router } = require('express');
const getReview = require('../controllers/Reviews/GetReview')
const putReview = require('../controllers/Reviews/PutReview')

const router = Router();
router.get('/:productId', getReview)
router.get('/:productId/user/:userId', getReview)
router.put('/:productId/user/:userId', putReview)

module.exports = router;