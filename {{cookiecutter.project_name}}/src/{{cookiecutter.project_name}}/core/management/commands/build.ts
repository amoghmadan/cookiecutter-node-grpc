import { execSync } from "child_process";
import fs from "fs";
import path from "path";

import settings from "../../../conf/index.ts";

export default function build(outDir: string): void {
  const projectRoot: string = path.dirname(settings.BASE_DIR);
  const protoDir: string = path.join(projectRoot, "proto");

  const parts = [
    "grpc_tools_node_protoc",
    `--plugin=protoc-gen-ts=${path.join(projectRoot, "node_modules/.bin/protoc-gen-ts")}`,
    `--js_out=import_style=commonjs,binary:${outDir}`,
    `--grpc_out=grpc_js:${outDir}`,
    `--ts_out=${outDir}`,
    "-I proto",
  ];

  const protoFiles: string[] = fs
    .readdirSync(protoDir, { recursive: true, encoding: "utf-8" })
    .filter((p: string): boolean => p.endsWith(".proto"))
    .map((p: string): string => path.posix.join("proto", p));

  const cmd: string = [...parts, ...protoFiles].join(" ");
  try {
    const stdout = execSync(cmd, { cwd: projectRoot }).toString();
    console.log(stdout);
  } catch (e: unknown) {
    console.error(e);
    return;
  }

  const dirs: Set<string> = new Set();

  const paths: string[] = fs.readdirSync(protoDir, {
    recursive: true,
    encoding: "utf-8",
  });
  for (const p of paths) {
    const full: string = path.join(protoDir, p);
    if (fs.statSync(full).isDirectory()) dirs.add(p);
  }

  for (const d of dirs) {
    const dir: string = path.join(outDir, d);
    if (!fs.existsSync(dir)) continue;

    const indexPath: string = path.join(dir, "index.ts");
    if (!fs.existsSync(indexPath)) {
      fs.writeFileSync(indexPath, "");
    }
  }
}
