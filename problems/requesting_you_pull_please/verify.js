#!/usr/bin/env node

const exec = require('child_process').exec
const request = require('request')

// const url = "http://localhost:5563/pr?username="
const url = 'http://reporobot.jlord.us/pr?username='

// check that they've submitted a pull request
// to the original repository jlord/patchwork

exec('git config user.username', function(err, stdout, stdrr) {
  const username = stdout.trim()
  pullrequest(username)
})

function pullrequest(username) {
  request(url + username, {json: true}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const pr = body.pr
      if (pr) console.log("Found your pull request!")
      else console.log("No merged pull request found\nfor " + username
                       + ". If you did make a\npull request, return to "
                       + "its\nwebsite to see comments." )
    }
  })
}
