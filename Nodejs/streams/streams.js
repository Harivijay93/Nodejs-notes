const fs = require ('fs')

const read = fs.createReadStream('.docs/hugefile.txt')

read.on