const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes/notes')

const argv = yargs.argv
let command = argv._[0]

debugger

switch (command) {
    case 'add': { 
        notes.addNote(argv.title, argv.description)
        break 
    }
    case 'list': { 
        notes.getAll()
        break 
    }
    case 'read': { 
        notes.getNote(argv.title)
        break 
    }
    case 'remove': { 
        notes.removeNote(argv.title)
        break 
    }
    default: console.log(`Command is not recognized`)
}