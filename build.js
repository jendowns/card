"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const fs = require("fs");
const path = require("path");

const options = {
  padding: 1,
  margin: 1,
  borderColor: "magenta",
  borderStyle: "round",
  float: "center"
};

const data = {
  name: chalk.magenta.bold("                   Jen Downs"),
  web:
    chalk.magenta.bold("        Web:") +
    chalk.white("   https://") +
    chalk.cyan("jendowns.com"),
  npm:
    chalk.magenta.bold("        npm:") +
    chalk.white("   https://npmjs.com/") +
    chalk.cyan("~jendowns"),
  github:
    chalk.magenta.bold("     GitHub:") +
    chalk.white("   https://github.com/") +
    chalk.cyan("jendowns"),
  linkedin:
    chalk.magenta.bold("   LinkedIn:") +
    chalk.white("   https://linkedin.com/in/") +
    chalk.cyan("jendowns"),
  npx: chalk.magenta.bold("                $ ") + 
    chalk.cyan("npx jendowns")
};

const newline = "\n";

const output =
`${data.name}` +
  newline +
  newline +
  `${data.web}` +
  newline +
  `${data.github}` +
  newline +
  `${data.linkedin}` +
  newline +
  `${data.npm}` +
  newline +
  newline +
  `${data.npx}`;

fs.writeFileSync(
  path.join(__dirname, "bin/output"),
  chalk(boxen(output, options))
);
