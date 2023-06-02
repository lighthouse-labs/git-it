#!/usr/bin/env node

const exec = require('child_process').exec

// check that Git is installed

exec('git config user.email', function(err, stdout, stderr) {
  const email = stdout.trim()
  if (email === "") console.error("No email found.")
  else {
    console.log("Email Added!")
    exec('git config user.name', function(err, stdout, stderr) {
      const name = stdout.trim()
      if (name === "") console.error("No name found.")
      else {
        console.log("Name Added!")
        exec('git --version', function(err, stdout, stdrr) {
          const gitOutput = stdout.trim()
  
          if (gitOutput.match("git version"))
            console.log("Found Git installed.")   
          else console.log("Found no Git installed.")
        })
      }
    })
  }
})


