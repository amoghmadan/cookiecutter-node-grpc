async function main() {
  process.env.GRPC_SETTINGS_MODULE =
    process.env.GRPC_SETTINGS_MODULE || "../settings.ts";
  const executeFromCommandLine = (await import("./core/management/index.ts"))
    .default;

  executeFromCommandLine();
}

if (import.meta.main) {
  main();
}
