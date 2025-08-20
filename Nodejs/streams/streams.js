const fs = require ('fs')


const readhf = fs.createReadStream('./docs/hugefile.txt', {encoding: 'utf8'})
const writehf = fs.createWriteStream('./docs/copyhugefile.txt')

readhf.on('data', (buffer) => {
    writehf.write('\nNew Buffer\n')
    writehf.write(buffer)
    
})