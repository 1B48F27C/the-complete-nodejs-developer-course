const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes/notes')

const titleOptions = {
    describe: 'Title of the note',
    demand: true,
    alias: 't'
}

const descriptionOptions = {
    describe: 'Title of the note',
    demand: true,
    alias: 't'
}

const argv = yargs
    .command('add', 'Add new note', {
        'title': titleOptions,
        'description': descriptionOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Show all notes', {
        'title': titleOptions
    })
    .command('remove', 'Show all notes', {
        'title': titleOptions
    })
    .argv
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