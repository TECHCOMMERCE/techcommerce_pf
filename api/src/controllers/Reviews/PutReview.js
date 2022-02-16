const { Product, User, Review} = require('../../db')
const { Op } = require('sequelize');
const { OK, CREATED, UPDATED, ERROR, NOT_FOUND, ERROR_SERVER } = require('../../constants'); // Import Status constants.

const putReview = async( req, res, next ) => {
  const { productId, userId=null } = req.params;
	const { stars,description } = req.body;
	try {
		//let user = await User.findOne({where:{userid: userId}});
		console.log('ReproductId', productId);
		console.log('ReuserId', userId);
		let review= await Review.findOne({
			where: {
				[Op.and]:[
					{productid: productId},
					{userid:userId}
				]
			}
		});
		if(review){
			let upd=await Review.update({stars, description},{
				where: {
					[Op.and]:[
						{userid: userId},
						{productid: productId}
					]

				}
			})
			return res.status(OK).send({upd})
		}else{
			let crea=await Review.create({
				productid: productId,
				stars,
				description,
				userid: userId,
			})
			return res.status(OK).send({crea})
		}
		
	}catch (err) {
		console.log('err', err);
		res.status(ERROR).send(err.message)
	}		
}

module.exports = putReview;