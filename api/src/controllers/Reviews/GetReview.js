const { Product, User, Detail} = require('../../db')
const { OK, CREATED, UPDATED, ERROR, NOT_FOUND, ERROR_SERVER } = require('../../constants'); // Import Status constants.

const getReview = async( req, res, next ) => {
  const { productId, userId=null } = req.params;
	try {
		let product = await Product.findByPk(productId);
		let review = null

		if(userId){
			let user = await User.findOne({where:{userid: userId}});
			if(user){
        review= await user.getReviews({where: {productid: productId}});
      }

		}
		//console.log('Reviews', reviews);
		let userreviews = await product.getReviews();
    userreviews = userreviews.map(review=> review.review)
		let rating = userreviews.map(review=>review.stars).reduce((previousValue, currentValue) => previousValue + currentValue)
		rating = Math.round(rating/userreviews.length)

		let data=[] //buscar datos de usuario para unificarlo a la review
		for(let i=0; i<userreviews.length; i++){
			let us= await User.findOne({where: {userid: userreviews[i].userid}})
			data.push({
				...userreviews[i].dataValues,
				us
			})
		}

		//buscar si el usuario ha comprado ya el producto
		//let Order=await Detail.findOne({where: {userid: userreviews[i].user}})
		console.log('result', {review: !!review, userreviews});
		res.status(OK).send({review: !!review, userreviews: data, rating})
	}catch (err) {
		console.log('err', err);
		res.status(ERROR).send(err.message)
	}		
}

module.exports = getReview;