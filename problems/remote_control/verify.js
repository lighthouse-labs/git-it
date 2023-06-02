#!/usr/bin/env node

const exec = require('child_process').exec;

// check that they've made a push

exec('git remote show origin | grep "HEAD branch" | cut -d" " -f5', function(err, stdout, stdrr) {
  const branchName = stdout.trim();
  verifyPush(branchName);
});

const verifyPush = (branchName) => {
  exec(`git reflog show origin/${branchName}`, function(err, stdout, stderr) {
    const ref = stdout.trim();
    
    if (ref.match("update by push")) console.log("Bingo! Detected a push.");
    else console.log("No evidence of push.");
  });
};
