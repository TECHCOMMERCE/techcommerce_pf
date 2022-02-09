const server = require('express').Router(); //Import router from express module.
const { Order, Product, User, Cart } = require('../db.js'); // Import Categories model.
const { OK, ERROR, ERROR_SERVER } = require('../constants/index'); // Import Status constants.
const {mailChangeStatusOrder} = require('../controllers/SendMails/mailStatusOrder')
const {SendEmails} = require('../controllers/SendMails/main')

// Start Routes
//// 'Get Orders' route in '/'
server.get('/:id', function (req, res) {
	Order.findOne({ where: {orderid: req.params.id}, include: [{ model: User }, { model: Product }] })
	.then((order_data) => {
		const order = {
			orderid: order_data.dataValues.orderid,
			status: order_data.dataValues.status,
			user: order_data.dataValues.user.name + " " + order_data.dataValues.user.lastname,
			price: order_data.dataValues.totalPrice,
			address: order_data.dataValues.address,
			date: order_data.dataValues.createdAt,
			products: order_data.dataValues.products.map(product => {
				return{
					productid: product.dataValues.productid,
					photo: product.dataValues.image,
					name: product.dataValues.name,
					price: product.dataValues.price,
					cant: product.dataValues.detail.quantity
				}
			})
		}

		return res.json({
			message: 'Sucess',
			order,
		});
	})
	.catch((err) => {
		console.log(err);
	});
});

server.put("/:id", async(req, res) => {
	const order = await Order.findOne({
		where: {
			orderid: req.params.id
		}
	})

	console.log(req.body.status);

	await order.update({
		status: req.body.status
	})
	if(order){
		let user = await User.findOne({where:{userid: order.userUserid}})
		let html = mailChangeStatusOrder(req.body.status,req.params.id)
		SendEmails(user.email,'Notificación de estado de tu compra',html)
	}
	return res.json({
		message: 'Sucess',
		order,
	});
});

server.get('/', function (req, res) {
	const { status } = req.query;
	let queryParameters = null;

	if(status){
		//filtrado
		queryParameters = { where: { status }, include: [{ model: User }, { model: Product }] };
	}else{
		queryParameters = { include: [{ model: User }, { model: Product }] };
	}

	Order.findAll(queryParameters)
	.then((orders_res) => {
		const orders = orders_res.map(order => {
			console.log("order", order.dataValues.createdAt);
			return{
				orderid: order.dataValues.orderid,
				status: order.dataValues.status,
				user: order.dataValues.user.name + " " + order.dataValues.user.lastname,
				price: order.dataValues.totalPrice,
				address: order.dataValues.address,
				date: order.dataValues.createdAt
			}
		});

		return res.json({
			message: 'Sucess',
			orders,
		});
	})
	.catch((err) => {
		console.log(err);
		return res.json({
			message: 'error',
			err
		});
	});
	

});

server.post('/shopping/:userId', function (req, res) {
	// return res.send(req.body)
	const { userId } = req.params;

	const { id } = req.body;
	const qty = req.body.order_line.quantity;
	// console.log(req.body);

	const newOrder = Order.findOrCreate({ where: { userId } });
	const newProduct = Product.findOne({ where: { id: id } });
	Promise.all([newOrder, newProduct])
		.then((data) => {
			data[0][0].addProducts(data[1], { through: { price: data[1].price, quantity: qty } }).then(() => {
				Order.findOne({ where: { userId }, include: [{ model: Product }, { model: User }] }).then((order) => {
					return res.status(OK).json({ message: 'ítem añadido al carrito', data: order });
				});
			});
		})
		.catch((err) => {
			res.send({ errro: 'Error POST' });
		});
});


server.delete('/shopping/:id', (req, res) => {
	// console.log(req.params.id);
	const { id } = req.params;

	Order.findOne({ where: { id } })
		.then((order) => {
			// console.log('THEN DEL DELETE ORDER');
			order.destroy();
			return res.status(OK).json({
				message: 'Orden eliminada!!',
				data: order,
			});
		})
		.catch((err) => {
			console.log(err);
			return res.status(ERROR_SERVER).json({
				message: 'Error al eliminar Orden',
				data: err,
			});
		});
});


//End routes
module.exports = server;
