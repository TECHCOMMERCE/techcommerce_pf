const { Router } = require("express");
const {getSuscription} = require('../controllers/PSuscription/GetSuscription')
const {postSuscription} = require('../controllers/PSuscription/PostSuscription')
const router = Router();

//router.get("/",getSuscription)
router.post("/",postSuscription)

module.exports = router;