const doWorkPromises = new Promise((resolve, reject) => {
	setTimeout(() => {
		//reject('Error');
		resolve([1, 2, 3]);
	}, 2000);
});

doWorkPromises
	.then((result) => {
		console.log('Succcess!! ', result);
	})
	.catch((error) => {
		console.log('Oops!! Things went wrrong!! ', error);
	});
