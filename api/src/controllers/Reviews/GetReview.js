const { Review, Product } = require('../../db')

const reviewGetByAllorById = async(name) =>{
  let review;
  try {
    if(name){
      //we are using sequelized methods here .findAll and then we are calling some params
      review = Review.findAll({
        include:[{ model: Category }, { model: Product }],
        where:{
          name:{
            [Op.iLike]:"%" + name + "%" 
          }
        },
        attributes: ['reviewid', 'stars', 'description']
      })
    }else{
      review = Review.findAll({
        include:{
          model: Product
        },
        attributes: ['reviewid', 'stars', 'description']
      })
    }
  } catch (error) {
    console.log(error);
  }
}

const getReview = async( req, res, next ) => {
  try {
    const reviews = await reviewGetByAllorById()
    res.send(reviews)
  } catch ( error) {
    res.status(500).send(error,{
      message:`We could not get the review`
    })
  }
}

module.exports = getReview;