const express = require('express');
const petController = require('../controller/controller');
const router = express.Router();

router.get('/pets', petController.getPets, (req, res) => {
	console.log('made it to api', res.locals.getPets);
	return res.status(200).json(res.locals.getPets);
});

// POST req
// router.post('/pets', petController.postPets, (req, res) => {
// 	return res.status(200).json(res.locals.postPets);
// });
module.exports = router;
