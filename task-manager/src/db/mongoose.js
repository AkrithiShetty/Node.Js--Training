const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
	useNewUrlParser: true,
	useCreateIndex: true
});

const Tasks = mongoose.model('Tasks', {
	description: {
		type: String
	},
	completed: {
		type: Boolean
	}
});

// const task = new Tasks({
// 	description: 'Cleaning',
// 	completed: true,
// });

// task
// 	.save()
// 	.then(() => {
// 		console.log(task);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

const User = mongoose.model('User', {
	name: {
		type: String,
		required: true
	},
	age: {
		type: Number
	}
});

const me = new User({
	name: 'Anvitha'
	// age: 22,
});

me.save()
	.then(() => {
		console.log(me);
	})
	.catch((error) => {
		console.log(error);
	});
