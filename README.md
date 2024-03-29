# Git-it

| :computer: | What is this? |
| --- | --- |
| A [workshopper](https://github.com/workshopper/workshopper) module for learning Git and GitHub - Social coding, y'all. <br><br> These modules run a little app in your terminal and users work their way through the challenges. This is the Lighthouse Labs version of Git-it. The original package was created for [nodeschool.io](http://nodeschool.io).

### Get Started

Sections: [Install these first](https://github.com/lighthouse-labs/git-it/blob/master/README.md#what-youll-need-to-run-git-it) // [Install Git-it](https://github.com/lighthouse-labs/git-it/blob/master/README.md#install-git-it) // [Using Git-it ](https://github.com/lighthouse-labs/git-it/blob/master/README.md#how-it-works) // [Tips](https://github.com/lighthouse-labs/git-it/blob/master/README.md#tips-for-getting-started)

---

### What you'll need to run Git-it:

_A few development essentials, all are free and/or free and open source._

- **Git**, this is your tracker of changes!
 - If you're on a **Mac**, you can install Git automatically. To do this, open the Terminal application from spotlight and type `git`. This will prompt Git to install the rest of the command line tools for Git. This should only take a few minutes. It will ask if you would like to download Xcode, which you can ignore.
- **Node.js**, this is what this app is written in so you'll need this to run it. It's an engine for running JavaScript on servers (your computer is a server!) and will live quietly in the background. 

### Install Git-it

Once you have the essentials above, install Git-it.

- Open up a terminal window and install Git-it globally on your computer (so that you can run it from anywhere). [NPM](https://www.npmjs.com/) (**which is included when you download Node.js**) delivers Node.js modules (that's what this app is) to your computer from the command line, real easy like:

```bash
$ npm install -g @lighthouse_labs/git-it
```
- _If you run into trouble with this command it may be due to permissions on your computer, **try adding 'sudo'**:_ `sudo npm install -g @lighthouse_labs/git-it`
- Once it's done installing components, you can run it:

```bash
$ git-it
```
- This should load the menu. You're ready to go! Select the first challenge, hit enter and you're on your way!

### How it Works

- Once you've run `git-it` and the menu has loaded, use the arrows ↑↓ to select the first challenge and press 'enter'.
- With the challenge loaded, follow the instructions on Compass. 

- Read the instructions in Compass and use your terminal to complete the tasks.
- When you're done with a challenge, type `git-it verify` in terminal.
- If the challenge components were not completed correctly, Git-it returns some text to help you know what went wrong.
- Run `git-it` again to load the menu and select the next challenge!

---

### Tips For Getting Started

**Code snippets** often times look like `$ some code-stuff --here`. The dollar sign identifies the line as one a user would enter into the command line, but you don't actually include it when you type it into terminal. In this case, you'd actually just type `some code-stuff --here`.

**Variables** are indicated by `<VARIABLENAME>` in code snippets. When you actually use the line of code, replace it, including the `<>`, with your variable. For instance to make a new folder in terminal the format is, `mkdir <FOLDERNAME>`, so if you wanted to make a folder named 'octocat', you'd type: `mkdir octocat`.

**Command line, terminal, bash** all basically mean the same thing: the MS-DOS, Doogie Howser looking screen full of words and numbers. It's awesomely powerful and allows you to control your computer with text commands.

You can do a lot of things from your terminal like delete, rename, copy or create files and folders; run scripts and send things back and forth between servers (like the ones storing things on GitHub.com) and your computer (also a server!).
