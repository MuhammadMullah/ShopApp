const express = require('express');
const router = express.Router();

router.get('/',  (req, res, next) => {
	res.status(200).json({
		message: 'Orders fetched!!'
	})
});


router.post('/',  (req, res, next) => {
	const order = {
		name: req.body.name,
		price: req.body.price
	};


	res.status(201).json({
		message: 'Order was created',
		order: order
	})
});

router.get('/:orderId', (req, res, next) => {
	res.status(200).json({
		message: 'Orders details',
		id: req.params.orderId
	})
})


router.delete('/:orderId', (req, res, next) => {
	res.status(200).json({
		message: 'Order Deleted!!',
		id: req.params.orderId
	});
});


module.exports = router;