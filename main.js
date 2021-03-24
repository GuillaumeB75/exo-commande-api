const readlineSync = require('readline-sync')
const chalk = require('chalk')
const fs = require('fs')

console.log('Exercice interraction commande cp')

if (process.argv[2] === 'cp') {

  fs.copyFileSync('./test.txt', './copy.txt')
  console.log(chalk.green('le fichier a été copié'))
 }
else {
  console.log(chalk.red('le fichier n est pas copié'))
}
