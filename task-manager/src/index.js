const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user.js');
const taskRouter = require('./routers/task.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
	console.log('Server is up on port ', port);
});

// const bcrypt = require('bcryptjs');
// const myFunction = async () => {
// 	const password = 'red1234';
// 	const hashedPassword = await bcrypt.hash(password, 8);

// 	console.log(password, hashedPassword);

// 	const isMatch = await bcrypt.compare('Red1234', hashedPassword);

// 	console.log(isMatch);
// };

// myFunction();
