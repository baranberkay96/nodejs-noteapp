//var obj = {
//    name: 'Baran'
//};
//
//var stringObj = JSON.stringify(obj);
//console.log(typeof stringObj, stringObj);
//
//var personString = '{"name": "Baran", "Age": 22}';
//var person = JSON.parse(personString);
//console.log(typeof person, person);

const fs = require('fs');

var originalNote = {
    title: 'Some Title',
    body: 'Some Body'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);