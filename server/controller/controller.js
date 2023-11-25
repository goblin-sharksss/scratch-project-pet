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

// post a pet info

// petController.postPet = (req, res, next) => {
// 	const { name, picture } = req.body;

// 	Pet.create({ name, picture })
// 		.then((pets) => {
// 			res.locals.postPets = pets;
// 			return next();
// 		})
// 		.catch((error) => {
// 			console.log('Error in posting pets:', error);
// 			return res.status(500).json({ error: 'Internet Server Error' });
// 		});
// };
module.exports = petController;
