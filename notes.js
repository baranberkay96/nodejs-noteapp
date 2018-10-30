console.log('starting notes.js');
const fs = require('fs');

var fetchNotes = () => {
    try {
        notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
        return notes;
    }
    catch(e) {
        return [];
    }



};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));

}


var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter(note => note.title === title);
    console.log(duplicateNotes);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    console.log('listing notes');
};


var getNotes = (title) => {
    notes = fetchNotes();
    filteredNote = notes.filter(note => note.title === title);
    return filteredNote[0];
};

var removeNotes = (title) => {
    var notes = fetchNotes();
    var remainingNotes = notes.filter(note => note.title !== title);
    saveNotes(remainingNotes);
    return notes.length !== remainingNotes.length;
};

var logNotes = (note) => {
    debugger;
    console.log('----');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNote,
    getAll,
    getNotes,
    removeNotes,
    logNotes
};