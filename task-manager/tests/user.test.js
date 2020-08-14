const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');
const { userOneId, userOne, setUpDatabase } = require('./fixtures/db');

beforeEach(setUpDatabase);

test('Should sign up a new user', async () => {
	const response = await request(app)
		.post('/users')
		.send({
			name: 'Suraksha',
			email: 'sur@gmail.com',
			password: 'surshetty'
		})
		.expect(201);

	const user = await User.findById(response.body.user._id);
	expect(user).not.toBeNull();

	expect(response.body).toMatchObject({
		user: {
			name: 'Suraksha',
			email: 'sur@gmail.com'
		},
		token: user.tokens[0].token
	});
	expect(user.password).not.toBe('surshetty');
});

test('Should login a existing user', async () => {
	const response = await request(app)
		.post('/users/login')
		.send({
			email: userOne.email,
			password: userOne.password
		})
		.expect(200);
	const user = await User.findById(response.body.user._id);
	expect(response.body.token).toBe(user.tokens[1].token);
});

test('Should not login nonexistent user', async () => {
	await request(app)
		.post('/users/login')
		.send({
			email: userOne.email,
			password: 'thisisnotmypass'
		})
		.expect(400);
});

test('Should get user profile ', async () => {
	await request(app)
		.get('/users/me')
		.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
		.send()
		.expect(200);
});

test('Should not get user profile ', async () => {
	await request(app).get('/users/me').send().expect(401);
});

test('Should  delete account for user', async () => {
	await request(app)
		.delete('/users/me')
		.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
		.send()
		.expect(200);

	const user = await User.findById(userOneId);
	expect(user).toBeNull();
});

test('Should not delete account for unauthorized user', async () => {
	await request(app).delete('/users/me').send().expect(401);
});

test('Should upload avatar image', async () => {
	await request(app)
		.post('/users/me/avatar')
		.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
		.attach('avatar', 'tests/fixtures/profile-pic.jpg')
		.expect(200);
	const user = await User.findById(userOneId);
	expect(user.avatar).toEqual(expect.any(Buffer));
});

test('Should update valid user fields', async () => {
	await request(app)
		.patch('/users/me')
		.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
		.send({
			name: 'Akrithi Shetty'
		})
		.expect(200);
	const user = await User.findById(userOneId);
	expect(user.name).toEqual('Akrithi Shetty');
});

test('Should not update invalid user fields', async () => {
	await request(app)
		.patch('/users/me')
		.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
		.send({
			location: 'Managalore'
		})
		.expect(400);
});
