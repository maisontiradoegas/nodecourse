const chalk = require('chalk');
const fs = require('fs');


const addNote = (title, body) => {
	const notes = loadNotes(); 
	const duplicateNote = notes.find((note) => note.title === title);

	if (!duplicateNote) {
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

const listNote = () => {
	const notes = loadNotes();
	console.log(chalk.green.inverse('Your Notes'));

	notes.forEach((note) => {
		console.log(note.title);
	});
}

const readNote = (title) => {
	const notes = loadNotes();
	const matchedNote = notes.find((note) => note.title === title);
		
	if(matchedNote) {
			console.log(matchedNote.title);
			console.log(matchedNote.body);
		} else {
			console.log('Not Found');
		}	
}		


module.exports = {
	addNote: addNote,
	removeNote: removeNote,
	listNote: listNote,
	readNote: readNote
}