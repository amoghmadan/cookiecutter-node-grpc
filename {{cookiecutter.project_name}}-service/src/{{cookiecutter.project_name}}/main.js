function main() {
  process.env.GRPC_SETTINGS_MODULE =
    process.env.GRPC_SETTINGS_MODULE || "../settings";
  const executeFromCommandLine = require("./core/management");

  executeFromCommandLine();
}

if (require.main == module) {
  main();
}
