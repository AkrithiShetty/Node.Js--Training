const add = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (a < 0 || b < 0) {
				return reject('Number cannot be negative');
			}
			resolve(a + b);
		}, 2000);
	});
};

const doWork = async () => {
	const sum = await add(10, 50);
	const sum1 = await add(sum, 90);
	const sum2 = await add(sum1, 3);
	// const sum2 = await add(sum1, -3);
	return sum2;
};

doWork()
	.then((sum) => {
		console.log(sum);
	})
	.catch((e) => {
		console.log(e);
	});
