const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
	name: {
		type: String,
		required: true,
		trim: true
	},
	email: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error('Invalid Email Id');
			}
		}
	},
	password: {
		type: String,
		required: true,
		trim: true,
		validate(value) {
			if (value.length <= 6) {
				throw new Error('Passsword must be greater than 6 characters');
			} else if (value == 'password') {
				throw new Error('Change the password');
			}
		}
	},
	age: {
		type: Number,
		default: 0,
		validate(value) {
			if (value < 0) {
				throw new Error('Age must be a positive number');
			}
		}
	}
});

// const me = new User({
// 	name: '  Akrithi',
// 	email: 'Akrithishetty14@gmail.com',
// 	password: 'juego@1234',
// 	age: 22
// });

// const me = new User({
// 	name: '  Suraksha',
// 	email: 'SuRakshashetty29@gmail.com',
// 	password: '  hi',
// 	age: 21
// });

// me.save()
// 	.then(() => {
// 		console.log(me);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

module.exports = User;