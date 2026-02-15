const { spawnSync } = require("child_process");

function shell() {
  spawnSync(process.execPath, { stdio: "inherit", env: process.env });
}

module.exports = shell;
