import { Command } from "commander";

import build from "./build.ts";
import runserver from "./runserver.ts";
import shell from "./shell.ts";

const commander: Command = new Command();
commander
  .command("runserver")
  .description("Runs the server")
  .option("-p --port <port>", "Port", "50051")
  .option("-H --host <host>", "Host", "0.0.0.0")
  .action((options: { port: number; host: string }): void =>
    runserver(options.host, Number(options.port)),
  );

commander
  .command("build")
  .description("Build proto")
  .option("-o --outDir <outDir>", "Out Dir", "./src")
  .action((options: { outDir: string }): void => build(options.outDir));

commander
  .command("shell")
  .description("Shell")
  .action((_: any): void => shell());

export default commander;
