const fs = require('fs')
const notesPath = './notes/notes.json'

module.exports = (() => {

    const fetchNotes = () => {
        let notes = [];
        try {
            let notesString = fs.readFileSync(notesPath)
            return JSON.parse(notesString)
        } catch (e) {
            return []
        }
    }

    const writeNotes = (notes) => {
        try {
            fs.writeFileSync(notesPath, JSON.stringify(notes, 0, 1))
        } catch (e) {
            return []
        }
    }

    const addNote = (title, description) => {
        let notes = fetchNotes()

        // check for duplicates
        let duplicates = notes.filter(note => note.title == title)
        if (duplicates.length > 0) return

        // adding note
        notes.push({ title, description })
        writeNotes(notes)
    }

    const getAll = () => {
        try {
            let notesString = fetchNotes()
            console.log(JSON.stringify(notesString, 0, 1))
        } catch (e) {
            console.log(e)
        }
    }

    const getNote = (title) => {
        let notes = fetchNotes()
        let note = notes.filter(note => note.title == title)
        
        if (note.length > 0) console.log(`${JSON.stringify(note, 0, 1)}`)
        else console.log(`There is no any note with such title!`)
    }

    const removeNote = (title) => {
        let notes = fetchNotes()
        let filteredNotes = notes.filter(note => note.title != title)
        writeNotes(filteredNotes)
    }

    return {
        addNote,
        getAll,
        getNote,
        removeNote
    }
})()