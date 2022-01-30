const server = require('express').Router(); //Import router from express module.
const { Order, Product, User } = require('../db.js'); // Import Categories model.
const { OK, ERROR, ERROR_SERVER } = require('../constants/index'); // Import Status constants.


// Start Routes
//// 'Get Orders' route in '/'
server.get('/order/:id', function (req, res) {
	Order.findAll({ include: [{ model: User }, { model: Product }] })
		.then((orders) => {
			return res.json({
				message: 'Sucess',
				data: orders,
			});
		})
		.catch((err) => {
			console.log(err);
		});
});

server.get('/filter', function (req, res) {
	const { status } = req.query;
	let queryParameters;
	// console.log('EL ESTADO DE LA ORDEN ES ', status);

	if (status === 'all') queryParameters = { include: [{ model: User }, { model: Product }] };
	else queryParameters = { where: { status }, include: [{ model: User }, { model: Product }] };

	Order.findAll(queryParameters)
		.then((orders) => {
			return res.json({
				message: 'Sucess',
				data: orders,
			});
		})
		.catch((err) => {
			console.log(err);
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
