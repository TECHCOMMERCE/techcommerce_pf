const { Router } = require("express");
const {getSuscription} = require('../controllers/PSuscription/GetSuscription')
const {putSuscription} = require('../controllers/PSuscription/PutSuscription')
const router = Router();

//router.get("/",getSuscription)
//router.put("/",putSuscription)

module.exports = router;