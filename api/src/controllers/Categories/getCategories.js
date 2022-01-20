const { Router } = require('express')
const {Category} = require('../../db');
const axios = require('axios')

const router = Router();

const getCategories = async(req, res, next) =>{
  try {
    const categories = await Category.findAll({order:[['name','ASC']]})
    res.send(categories)
  } catch (error) {
    console.log(error);
  }
}

module.exports = getCategories;