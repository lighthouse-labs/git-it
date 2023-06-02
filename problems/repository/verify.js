#!/usr/bin/env node

const exec = require('child_process').exec

exec('git status', function(err, stdout, stdrr) {
  // if (err) console.log(err)
  const status = stdout.trim()
  if (status.match("On branch")) console.log("This is a Git repository!")
  else console.log("This folder isn't \nbeing tracked by Git.")
})