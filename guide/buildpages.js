const Handlebars = require('handlebars')
const fs = require('fs')
const glob = require('glob')

const translateLocale = require('./translate-locale.js')

const layout = fs.readFileSync(__dirname + '/layout.hbs').toString()
const thefiles = []

// Take in a language type if any
const lang = process.argv[2]
const rawFiles = __dirname + (lang ? '/raw-content-' + lang + '/' : '/raw-content/')
const builtContent = __dirname + (lang ? '/challenges-' + lang + '/' : '/challenges/')

// I can probably use glob better to avoid
// finding the right files within the files
glob("*.html", {cwd: rawFiles}, function (err, files) {
  thefiles = files
  if (err) return console.log(err)
  // const matches = files.map(function(file) {
  //   if (file.match('guide/raw-content/')) {
  //     return file
  //   }
  // })
  buildPage(files)
})

function buildPage(files) {
  files.forEach(function(file) {
    // shouldn't have to do this if my
    // mapping were correct
    if (!file) return

    // if language, run the noun and verb
    // translations


    const content = {
      header: buildHeader(file),
      footer: buildFooter(file),
      body: fs.readFileSync(rawFiles + file).toString()
    }

    if (lang) {
      content.body = translateLocale(content.body, lang)
    }
    
    const shortname = makeShortname(file)
    const template = Handlebars.compile(layout)
    const final = template(content)
    fs.writeFileSync(builtContent + shortname + 'html', final)
  })
  // hard coded right now because, reasons
  console.log("Built!")
}

function makeShortname(filename) {
  // FROM guide/raw-content/10_merge_tada.html
  // TO merge_tada.
    return filename.split('/').pop().split('_')
      .slice(1).join('_').replace('html', '')
}

function makeTitleName(filename) {
  const short = makeShortname(filename).split('_')
    .join(' ').replace('.', '')
  return grammarize(short)
}

function buildHeader(filename) {
  const num = filename.split('/').pop().split('_')[0]
  const data = getPrevious(num)
  const title = makeTitleName(filename)
  const source = fs.readFileSync(__dirname + '/partials/header.html').toString()
  const template = Handlebars.compile(source)
  const content = {
    challengetitle: title,
    challengenumber: num,
    lang: lang ? '-' + lang : '',
    preurl: data.preurl,
    nexturl: data.nexturl
  }
  return template(content)
}

function grammarize(name) {
  const correct = name
  const wrongWords = ['arent', 'githubbin', 'its']
  const rightWords = ["aren't", "GitHubbin", "it's"]

  wrongWords.forEach(function(word, i) {
    if (name.match(word)) {
      correct = name.replace(word, rightWords[i])
    }
  })
  return correct
}

function buildFooter(file) {
  const num = file.split('/').pop().split('_')[0]
  const data = getPrevious(num)
  data.lang = lang ? '-' + lang : ''
  const source = fs.readFileSync(__dirname + '/partials/footer.html').toString()
  const template = Handlebars.compile(source)
  return template(data)
}

function getPrevious(num) {
  const pre = parseInt(num) - 1
  const next = parseInt(num) + 1
  const preurl = ''
  const prename = ''
  const nexturl = ''
  const nextname = ''
  thefiles.forEach(function(file) {
    if (pre === 0) {
      prename = "All Challenges"
      preurl = lang ? '../index-' + lang + '.html' : '../index.html'
    } else if (file.match(pre)) {
      prename = makeTitleName(file)
      const getridof = pre + '_'
      preurl = file.replace(getridof, '')
    }
    if (next === 12) {
      nextname = "Done!"
      nexturl = lang ? '../index-' + lang + '.html' : '../index.html'
    } else if (file.match(next)) {
      nextname = makeTitleName(file)
      const getridof = next + '_'
      nexturl = file.replace(getridof, '')
    }
  })
  return {prename: prename, preurl: preurl,
      nextname: nextname, nexturl: nexturl}
}
