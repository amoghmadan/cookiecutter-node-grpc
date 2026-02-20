import commander from "./commands/index.ts";

export default function executeFromCommandLine() {
  commander.parse(process.argv);
}
