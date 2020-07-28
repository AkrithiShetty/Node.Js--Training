require('../src/db/mongoose');
const Tasks = require('../src/models/task');

// Tasks.findByIdAndDelete('5f1e6105d1009e152ce1adaa')
// 	.then((task) => {
// 		console.log(task);
// 		return Tasks.countDocuments({ completed: false });
// 	})
// 	.then((count) => {
// 		console.log(count);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

const deleteTaskAndCount = async (id) => {
	const task = await Tasks.findByIdAndDelete(id);
	const count = await Tasks.countDocuments({ completed: false });
	return count;
};

deleteTaskAndCount('5f1eb8a4411b1c35e78973fa')
	.then((count) => {
		console.log(count);
	})
	.catch((e) => {
		console.log(e);
	});
