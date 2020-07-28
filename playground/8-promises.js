const add = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(a + b);
		}, 2000);
	});
};

add(1, 1)
	.then((sum) => {
		console.log(sum);
		return add(sum, 5);
	})
	.then((sum1) => {
		console.log(sum1);
	})
	.catch((e) => {
		console.log(e);
	});

// add(5, 3)
// 	.then((sum) => {
// 		console.log(sum);

// 		add(sum, 3)
// 			.then((sum1) => {
// 				console.log(sum1);
// 			})
// 			.catch((e) => {
// 				console.log(e);
// 			});
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

// const doWorkPromises = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		//reject('Error');
// 		resolve([1, 2, 3]);
// 	}, 2000);
// });

// doWorkPromises
// 	.then((result) => {
// 		console.log('Succcess!! ', result);
// 	})
// 	.catch((error) => {
// 		console.log('Oops!! Things went wrrong!! ', error);
// 	});
