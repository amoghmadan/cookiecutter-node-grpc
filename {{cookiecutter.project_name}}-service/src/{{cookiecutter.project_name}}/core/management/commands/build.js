const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const settings = require("../../../conf");

function build(outDir) {
  const projectRoot = path.dirname(settings.BASE_DIR);
  const protoDir = path.join(projectRoot, "proto");

  const parts = [
    "grpc_tools_node_protoc",
    `--js_out=import_style=commonjs,binary:${outDir}`,
    `--grpc_out=grpc_js:${outDir}`,
    "-I proto",
  ];

  const protoFiles = fs
    .readdirSync(protoDir, { recursive: true })
    .filter((p) => p.endsWith(".proto"))
    .map((p) => path.posix.join("proto", p));

  const cmd = [...parts, ...protoFiles].join(" ");
  try {
    const stdout = execSync(cmd, { cwd: projectRoot }).toString();
    console.log(stdout);
  } catch (e) {
    console.error(e);
  }

  const dirs = new Set();

  for (const p of fs.readdirSync(protoDir, { recursive: true })) {
    const full = path.join(protoDir, p);
    if (fs.statSync(full).isDirectory()) {
      dirs.add(p);
    }
  }

  for (const d of dirs) {
    const dir = path.join(outDir, d);
    if (!fs.existsSync(dir)) continue;

    const indexPath = path.join(dir, "index.js");
    if (!fs.existsSync(indexPath)) {
      fs.writeFileSync(indexPath, "");
    }
  }
}

module.exports = build;
