const express = require('express');
const router = express.Router();

router.get('/',  (req, res, next) => {
	res.status(200).json({
		message: 'Handling GET requests to /products'
	})
});


router.post('/',  (req, res, next) => {
	const product = {
		productId: req.body.productId,
		quantity: req.body.quantity
	};

	res.status(201).json({
		message: 'Handling POST requests to /products',
		createdProduct: product
	})
});

router.get('/:productId', (req, res, next) => {
	var id = req.params.productId;

	if (id === 'special') {
		res.status(200).json({
			message: 'You discorvered the special ID',
			id: id
		});
	}else {
		res.status(200).json({
			message: 'You fetched the ID'
		});
	}
})

router.patch('/:productId', (req, res, next) => {
	res.status(200).json({
		message: 'Updated Product'
	});
});


router.delete('/:productId', (req, res, next) => {
	res.status(200).json({
		message: 'Deleted Product'
	});
});


module.exports = router;