let jwt= require('jsonwebtoken')
require('dotenv').config();
const {SECRET_KEY} = process.env
const {User} = require('../../../db.js')
async function auth(req, res, next) {
  try{
    const {email, password, type,uid=null, name,lastname,photo=null} = req.body
    let search;
    search= await User.findOne({
      where: {
        email: email, 
        password: password
      },
      attributes: {
        exclude: ["password","changepassword","phone","address","country","city","postalcode","email"]
      },
    })

    if(!search &&type==="external"){  
      search= await User.findOne({
        where: {
          email: email, 
          userid: uid
        },
        attributes: {
          exclude: ["password","changepassword","phone","address","country","city","postalcode","email"]
        },
      })
      if(!search){
        search= await User.create({
            userid: uid,
            type:'user', 
            name:name,
            lastname: lastname,
            email,
            password: '-',
            photo
        })
        search = {
          userid: search.userid,
          type: search.type,
          name:search.name,
          lastname: search.lastname,
          photo: search.photo,
          force: search.force
        }
      }
    }
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