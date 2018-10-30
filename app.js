console.log('starting app');

const fs = require('fs');
const notes = require('./notes.js');
const yargs = require('yargs')
var command = process.argv[2];
console.log('Process: ', process.argv);
console.log('Yargs:', yargs.argv);
var args = yargs.argv
    

if (command === 'add') {
    var note = notes.addNote(args.title, args.body);
    if (note) {
        console.log('note created');
        notes.logNotes(note);
    }
    else {
        console.log('note title alreafy taken');
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    var note = notes.getNotes(args.title);
    if (note) {
        console.log('note found');
        notes.logNotes(note);
    } else {
        console.log('note was not found');
    }
}
  else if (command === 'remove') {
    var notesRemoved = notes.removeNotes(args.title);
    var message = notesRemoved ? 'Note was removed' : 'note was not found';
    console.log(message);
  }
else {
    console.log('unrecognizable command');
}


