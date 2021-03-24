const fs = require('fs')

if (process.argv[2] === 'cp') {

  fs.copyFileSync('./test.txt', './copy.txt')
  console.log('le fichier est copié')
 }
else {
  console.log('le fichier n est pas copié')
}
