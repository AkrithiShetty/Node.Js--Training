const mongoose = require('mongoose');

const Tasks = mongoose.model('Tasks', {
	description: {
		type: String,
		required: true,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	}
});

// const task = new Tasks({
// 	description: '    Cleaning'
//completed: true
// });

// const task = new Tasks({
// 	completed: true
// });

// task
// 	.save()
// 	.then(() => {
// 		console.log(task);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	}

module.exports = Tasks;
