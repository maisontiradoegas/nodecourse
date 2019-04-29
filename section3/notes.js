const chalk = require('chalk');
const fs = require('fs');

const getNote = (str) => {
	return str
}

const addNote = (title, body) => {
	const notes = loadNotes();
	const duplicateNotes = notes.filter((note) => note.title === title); 

	if (duplicateNotes.length === 0) {
		notes.push({
			title: title,
			body: body
		})
		saveNotes(notes);
		console.log(chalk.green.inverse('New Note Added'));
	} else {
		console.log(chalk.red.inverse('Note Title Taken'));
	}
}	

const removeNote = (title) => {
	const notes = loadNotes()
	const notesToKeep = notes.filter((note) => note.title !== title);
		if(notes.length > notesToKeep.length) {
			saveNotes(notesToKeep);	
			console.log(chalk.green.inverse('Note Removed!'))
		} else {
			console.log(chalk.red.inverse('No note found!'))
		}
}

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json');
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch(e) {
		return [];
	}
	
}

module.exports = {
	getNote: getNote,
	addNote: addNote,
	removeNote: removeNote
}