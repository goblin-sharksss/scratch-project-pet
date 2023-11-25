const User = require('../model/userModel');

const userController = {};

// getAllUsers - retrieve all users from the database and stores it into res.locals
//  * before moving on to next middleware.
userController.getAllUsers = (res, req, next) => {
	User.find({})
		.then((users) => {
			res.locals.getAllUsers = users;
			next();
		})
		.catch((error) => {
			console.log('Error in getting all users', error);
			return res.status(500).json({ error: 'Internal Server Error' });
		});
};

//  createUser - create and save a new User into the database.
userController.createUser = (req, res, next) => {
	const { username, password } = req.body;
	User.create({ username, password })
		.then((user) => {
			res.locals.createUser = user;
			next();
		})
		.catch((error) => {
			console.log('Error in creating a user', error);
			return res.status(500).json({ error: 'Internal Server Error' });
		});
};

// verifyUser - Obtain username and password from the request body, locate
//  * the appropriate user in the database, and then authenticate the submitted password
//  * against the password stored in the database.
userController.verifyUser = (req, res, next) => {
    const{ username, password } = req.body;
User.findOne({username, password})
    .then((user) => {
        if(user){
        res.send
        }
    })
}
module.exports = userController;
