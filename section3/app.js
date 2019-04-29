//Requires
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//Customize yargs version
yargs.version('1.1.0');

// add, remove, read, list
//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note', 
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note content',
            demandOption: true,
            type: 'string'
        }
    },
    //Remember this is the action that will happen when someone runs the 'add' command
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.removeNote(argv.title, argv.body)
    }
})

//Create list command
yargs.command ({
    command: 'list',
    describe: 'list of my notes',
    handler: function() {
        console.log('Listing out my notes')
    }
})

//Create read command 
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler() {
        console.log('reading notes');
    } 
})

//Prase Yargs Results
yargs.parse();