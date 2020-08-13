const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'akrithik.is16@sahyadri.edu.in',
		subject: 'Thanks for registering',
		text: `Welcome to the app ${name}. `
	});
};

const sendCancelationEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'akrithik.is16@sahyadri.edu.in',
		subject: 'Cancelation',
		text: `${name}, we would like to know the reason fo your cancelation of account. `
	});
};

module.exports = {
	sendWelcomeEmail,
	sendCancelationEmail
};
