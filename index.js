#!/usr/bin/env node
// chmod +x index.js

const chalk = require("chalk");
const sym = require("log-symbols");
const welcome = require("cli-welcome");

const pkgJSON = require("./package.json");

// ShortHand
const log = console.log;
const twitterStyle = chalk.hex("#1da1f2").bold;
const githubStyle = chalk.hex("#6cc644").bold;
const purpleStyle = chalk.hex("#6937FF").bold;
const success = `${sym.success} ${chalk.green.bold("SUCCESS ")}`;
const info = `${sym.info} ${chalk.blue.bold("INFO ")}`;
const warning = `${sym.warning} ${chalk.keyword("orange").bold("WARNING ")}`;
const error = `${sym.error} ${chalk.red.bold("ERROR ")}`;

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

log(`
${success}Everything is OK
${info}I am on vacation
${warning}Please dont copy me, be yourself !
${error}Contact me next week
`);
