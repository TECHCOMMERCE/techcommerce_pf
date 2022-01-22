let jwt= require('jsonwebtoken')
require('dotenv').config();
const {SECRET_KEY} = process.env
const {User} = require('../../../db.js')
async function auth(req, res, next) {
  try{

  
    const {email, password} = req.body
    const search= await User.findOne({
      where: {
        email: email, 
        password: password
      },
      attributes: {
        exclude: ["password","changepassword","force","phone","photo","address","country"]
      },
    })
    //res.json({result: await search}).status(200)
    jwt.sign({user: search},SECRET_KEY, (error,token)=>{
      res.json({token, user: search}).status(200)
    })
  }catch (error) {
    console.log(error)
  }
}

module.exports = {auth};