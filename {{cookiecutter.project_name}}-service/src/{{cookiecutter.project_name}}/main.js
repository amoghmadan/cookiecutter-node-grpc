function main() {
  process.env.SETTINGS_MODULE = process.env.SETTINGS_MODULE || "../settings";
  const executeFromCommandLine = require("./core/management");

  executeFromCommandLine();
}

if (require.main == module) {
  main();
}
