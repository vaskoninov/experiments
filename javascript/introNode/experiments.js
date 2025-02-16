const fs = require('fs')
const os = require('os')

const home = os.homedir()

const folderPath = home 

console.log(fs.readdirSync(folderPath))

