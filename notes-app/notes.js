// const name = 'My name is Akrithi';
// console.log(name);
// const add = function (a, b) {
//   return a + b;
// };
const fs = require('fs');
const chalk = require('chalk');
const getNotes = () => {
	return 'Your notes...';
};
const addNotes = (title, body) => {
	const notes = loadNotes();
	//const duplicate=notes.filter((note)=>note.title===title)
	const duplicatennotes = notes.find((note) => note.title === title);
	debugger;
	if (!duplicatennotes) {
		notes.push({
			title: title,
			body: body
		});
		savenotes(notes);
		console.log('New Note is added');
	} else {
		console.log('Already taken');
	}
};
const savenotes = (notes) => {
	const data = JSON.stringify(notes);
	fs.writeFileSync('notes1.json', data);
};
const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes1.json');
		const data = dataBuffer.toString();
		return JSON.parse(data);
	} catch (e) {
		return [];
	}
};
const removeNotes = (title) => {
	const notes = loadNotes();
	const notestokeep = notes.filter((note) => {
		note.title !== title;
	});

	savenotes(notestokeep);
	if (notes.length > notestokeep.length) {
		console.log(chalk.bgGreen('Note is removed'));
	} else {
		console.log(chalk.bgRed('No Note is removed'));
	}
};
const ListNotes = () => {
	const notes = loadNotes();
	if (notes.length !== 0) {
		console.log(chalk.blue.bold('Your Notes!'));
		notes.forEach((note) => {
			console.log(note.title);
		});
	} else {
		console.log(chalk.bgRed('No notes to List'));
	}
};
const readNote = (title) => {
	const notes = loadNotes();
	const note = notes.find((note) => note.title === title);
	if (note) {
		console.log(chalk.italic(note.title) + '  ' + note.body);
	} else {
		console.log(chalk.bgRed('Error!!!'));
	}
};
module.exports = {
	getNotes: getNotes,
	addNotes: addNotes,
	removeNotes: removeNotes,
	ListNotes: ListNotes,
	readNote: readNote
};
