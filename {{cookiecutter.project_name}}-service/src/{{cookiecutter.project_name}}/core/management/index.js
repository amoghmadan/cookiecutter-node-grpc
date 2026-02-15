const commander = require("./commands");

function executeFromCommandLine() {
  commander.parse(process.argv);
}

module.exports = executeFromCommandLine;
