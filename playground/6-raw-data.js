const http = require('http');
const url =
	'http://api.weatherstack.com/current?access_key=a7d1ec5246748cf207e098b2977710d5&query=40,-75&units=s';

const request = http.request(url, (response) => {
	let data = '';
	response.on('data', (chunk) => {
		data = data + chunk.toString();
	});
	response.on('end', () => {
		const body = JSON.parse(data);
		console.log(body);
	});
});
request.on('error', (error) => {
	console.log('An Error', error);
});
request.end();
