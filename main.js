const chalk = require('chalk')
const fs = require('fs')

if (process.argv[2] === 'cp') {

  fs.copyFileSync('./test.txt', './copy.txt')
  console.log(chalk.green('le fichier est copié'))
 }
else {
  console.log(chalk.red('le fichier n est pas copié'))
}
