const { Product, User, Order} = require('../../db')
const { OK, CREATED, UPDATED, ERROR, NOT_FOUND, ERROR_SERVER } = require('../../constants'); // Import Status constants.

const getReview = async( req, res, next ) => {
  const { productId, userId=null } = req.params;
	try {
		let product = await Product.findByPk(productId);
		let review = null
		let orders = null

		if(userId){
			let user = await User.findOne({where:{userid: userId}});
			if(user){
        review= await user.getReviews({where: {productid: productId}});

				orders= await Order.findAll({
					where: {userUserid: userId},
					include: [Product]
				})
				orders=orders.map(or=>{
					//console.log("products",or.products)
					return or.products
				})
				orders=!!orders.find(p=>p[0].productid===productId)
				//console.log("prueba",findP)

      }

		}
		//console.log('Reviews', reviews);
		let userreviews = await product.getReviews();
		//console.log('userreviews', userreviews);
    userreviews =userreviews?userreviews.map(review=> review.review):[]
		let rating = userreviews.map(review=>review.stars)
		if(rating>0)rating=rating.reduce((previousValue, currentValue) => previousValue + currentValue)
		rating = Math.round(rating/userreviews.length)

		let data=[] //buscar datos de usuario para unificarlo a la review
		for(let i=0; i<userreviews.length; i++){
			let us= await User.findOne({where: {userid: userreviews[i].userid}})
			data.push({
				...userreviews[i].dataValues,
				us
			})
		}

		
		//console.log('result', {review: !!review, userreviews});
		res.status(OK).send({review: !!review.length, userreviews: data, rating, orders})
	}catch (err) {
		console.log('err', err);
		res.status(ERROR).send(err.message)
	}		
}

module.exports = getReview;