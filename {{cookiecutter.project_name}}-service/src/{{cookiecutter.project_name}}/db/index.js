const connections = require("./connections");

const DEFAULT_DB_ALIAS = "default";

module.exports = {
  connection: connections[DEFAULT_DB_ALIAS],
  connections,
  DEFAULT_DB_ALIAS,
};
