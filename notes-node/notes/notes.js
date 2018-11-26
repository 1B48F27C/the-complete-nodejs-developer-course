const fs = require('fs')
const notesPath = './notes/notes.json'

module.exports = (() => {
    const addNote = (title, description) => {
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
        notes.push({ title, description })
        fs.writeFileSync(notesPath, JSON.stringify(notes, 0, 1))
    }

    const getAll = () => {
        try {
            let notesString = JSON.parse(fs.readFileSync(notesPath))
            console.log(JSON.stringify(notesString, 0, 1))
        } catch (e) {
            console.log(e)
        }
    }

    const getNote = (title) => {
        let notes = {}
        let note = {}
        
        try {
            notes = JSON.parse(fs.readFileSync(notesPath))
            note = notes.filter(note => note.title == title)
        } catch (e) {
            console.log(e)
        }

        if (note.length > 0) console.log(`${JSON.stringify(note, 0, 1)}`)
        else console.log(`There is no any note with such title!`)
    }

    const removeNote = (title) => {
        let notes = {}
        
        try {
            notes = JSON.parse(fs.readFileSync(notesPath))
            if (notes.length > 0) {
                notes.forEach(element => {
                    if (element.title == title) 
                    notes.splice(notes.findIndex(e => e.title == title), 1)
                });
                
                fs.writeFileSync(notesPath, JSON.stringify(notes, 0, 1))
            }
        } catch (e) {
            console.log(e)
        }
    }

    return {
        addNote,
        getAll,
        getNote,
        removeNote
    }
})()