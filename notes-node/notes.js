const fs = require('fs')

module.exports = (()=>{
    const addNote = (title, body) => {
        let notes = []
        notes.push({
            title,
            body
        })

        let notesStringified = JSON.stringify(notes, 0, 1)

        fs.writeFileSync('./notes/notes.json', notesStringified)
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