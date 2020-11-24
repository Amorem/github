#!/usr/bin/env node
// chmod +x index.js

const chalk = require("chalk");
const welcome = require("cli-welcome");

const pkgJSON = require("./package.json");

// ShortHand
const log = console.log;
const twitterStyle = chalk.hex("#1da1f2").bold;
const githubStyle = chalk.hex("#6cc644").bold;
const purpleStyle = chalk.hex("#6937FF").bold;
const success = chalk.green;
const info = chalk.blue;
const warning = chalk.keyword("orange");
const error = chalk.red.bold;

welcome({
  title: "Amorem",
  tagLine: "Howdy, nice to meet you !",
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#FADC00`,
  color: "#000000",
  bold: true,
  clear: true,
});

log(`${chalk.bgBlue(` Amorem `)}`);

log(`${chalk.dim.italic("New string")}`);

log(`${twitterStyle("Twitter")}`);
log(`${githubStyle("Github")}`);
log(`${purpleStyle("Blog")}`);

log(success("Everything is OK"));
log(info("I am on vacation"));
log(warning("Please dont copy me, be yourself !"));
log(error("Contact me next week"));
