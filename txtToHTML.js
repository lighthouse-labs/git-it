const fs = require('fs')
const marked = require('marked')
const glob = require('glob')

glob("**/*.txt", function (err, files) {
  if (err) return console.log("Err globbing")
  const matches = []
  files.forEach(function(file) {
    if (file.match('problems/')) {
      matches.push(file)
    } else return
  })
  convertToHTML(matches)
})

function convertToHTML(files) {
  files.forEach(function(file) {
    const filename = createFilename(file)
    const txt = fs.readFileSync(file)
    const html = marked(txt.toString())
    fs.writeFileSync('html/' + filename + '.html', html)
  })
}

function createFilename(origname) {
  const string = origname.split('/').splice(1, 2).join("_")
  return string.toString().replace('.txt', '')
}
