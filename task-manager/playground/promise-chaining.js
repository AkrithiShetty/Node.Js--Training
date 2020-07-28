require('../src/db/mongoose');
const Users = require('../src/models/user');
const User = require('../src/models/user');

// Users.findByIdAndUpdate('5f1e6dcae4d2611cdc384932', { age: 20 })
// 	.then((user) => {
// 		console.log(user);
// 		return Users.countDocuments({ age: 22 });
// 	})
// 	.then((count) => {
// 		console.log(count);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

const updateAgeAndCount = async (id, age) => {
	const user = await User.findByIdAndUpdate(id, { age });
	const count = await User.countDocuments({ age });
	return count;
};

updateAgeAndCount('5f1e6dcae4d2611cdc384932', 22)
	.then((count) => {
		console.log(count);
	})
	.catch((e) => {
		console.log(e);
	});
