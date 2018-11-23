console.log('Starting app.')

const fs = require('fs')
const os = require('os')

let user = os.userInfo()

fs.unlinkSync('greeting.txt')
fs.appendFileSync('greeting.txt', `Hello World! I'm using NodeJS! Yahooo!. I'm looged in as ${user.username}` )

const notes = require('./notes')

const _ = require('lodash')

console.log(_.isString(true))
console.log(_.isString('Andrew'))

let filteredArray = _.uniq(['Ivan', 1, 'Ivan', 1, 2, 3, 4])
console.log(filteredArray)