#!/usr/bin/env node
// chmod +x index.js

const welcome = require("cli-welcome");
const pkgJSON = require("./package.json");

welcome({
  title: pkgJSON.name,
  tagLine: "Howdy, nice to meet you !",
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#FADC00`,
  color: "#000000",
  bold: true,
  clear: true,
});

console.log("Hello Cedric");
