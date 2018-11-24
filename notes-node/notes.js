const fs = require('fs')
const notesPath = './notes/notes.json'

module.exports = (() => {
    const addNote = (title, body) => {
        let notes = [];
        // get all notes from file
        try {
            let notesString = fs.readFileSync(notesPath)
            notes = JSON.parse(notesString)
        } catch (e) {
            console.log(e)
        }

        // check for duplicates
        let duplicates = notes.filter(note => note.title == title)
        if (duplicates.length > 0) return

        // adding note
        notes.push({title, body})
        fs.writeFileSync(notesPath, JSON.stringify(notes, 0, 1))
    }

    const getAll = () => {
        console.log(`Getiing all notes`)
    }

    const getNote = (title) => {
        console.log(`Getting note ${title}`)
    }

    const removeNote = (title) => {
        console.log(`Removing note ${title}`)
    }

    return {
        addNote,
        getAll,
        getNote,
        removeNote
    }
})()