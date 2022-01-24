let jwt= require('jsonwebtoken')
require('dotenv').config();
const {SECRET_KEY} = process.env
const {User} = require('../../../db.js')
async function auth(req, res, next) {
  try{
    const {email, password} = req.body
    console.log("email",email)
    console.log('password', password);
    const search= await User.findOne({
      where: {
        email: email, 
        password: password
      },
      attributes: {
        exclude: ["password","changepassword","phone","address","country","city","postalcode"]
      },
    })
    //console.log("searc",search)
    if(search){
      jwt.sign({user: search},SECRET_KEY, (error,token)=>{
        return res.json({token, user: search}).status(200)
      })
    }else
      return res.send('Usuario no encontrado').status(400)
  }catch (error) {
    console.log(error)
  }
}

module.exports = {auth};