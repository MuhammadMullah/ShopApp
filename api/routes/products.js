const express = require('express');
const router = express.Router();

router.get('/',  (req, res, next) => {
	res.status(200).json({
		message: 'Handling GET requests to /products'
	})
});


router.post('/',  (req, res, next) => {
	res.status(200).json({
		message: 'Handling POST requests to /products'
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

module.exports = router;