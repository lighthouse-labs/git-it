#!/usr/bin/env node

const exec = require('child_process').exec

// check that they've added the remote, that shows
// that they've also then forked and cloned.

exec('git remote -v', function(err, stdout, stdrr) {
  const show = stdout.trim()

  if (show.match("upstream") && show.match("github.com[\:\/]jlord/")) {
    console.log("Upstream remote set up!")
  } else {
    return console.log("No upstream remote")
  }
})
