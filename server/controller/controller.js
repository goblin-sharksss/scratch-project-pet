const Pet = require('../model/model');

const petController = {};

// retrieve all pets information when we go to /pets

petController.getPets = (req, res, next) => {
	Pet.find({})
		.then((pets) => {
			res.locals.getPets = pets;
			console.log(res.locals.getPets);
			return next();
		})
		.catch((error) => {
			console.log('Error in getting pets', error);
			return res.status(500).json({ error: 'Internal Server Error' });
		});
};

module.exports = petController;
