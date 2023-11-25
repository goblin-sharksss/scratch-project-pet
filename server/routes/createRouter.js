const express = require('express');
const petController = require('../controller/controller');
const userController = require('../controller/userController')
const router = express.Router();

router.get('/pets', petController.getPets, (req, res) => {
	console.log('made it to api', res.locals.getPets);
	return res.status(200).json(res.locals.getPets);
});

router.get('/pets/:id', petController.getOnePet, (req, res) => {
	return res.status(200).json(res.locals.getOnePet);
});

// POST req
router.post('/pets', petController.postPet, (req, res) => {
	return res.status(200).json(res.locals.postPets);
});

//PATCH req
router.patch('/pets/:id', petController.updatePet, (req, res) => {
	res.status(200).json(res.locals.updatePet);
});

//DELETE req
router.delete('/pets/:id', petController.releasePet, (req, res) => {
	res.status(200).json(res.locals.releasePet);
});

router.delete('/pets', petController.releaseAll, (req, res) => {
	return res.status(200).json();
});


// post req to  sign up, once signed up, redirect to log-in
router.post('/signup', userController.createUser, (req, res) => {
	res.redirect('/login');
})

// post req to log in, redirect to create-pet page
router.post('/login')
module.exports = router;
