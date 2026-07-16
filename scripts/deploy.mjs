import { spawnSync } from "node:child_process";

const port = "65002";
const user = "u619583079";
const hostName = "85.31.227.213";
const remotePath = "~/domains/spartanwarriorfoundation.com/public_html/";

const run = (cmd, args) => {
  const res = spawnSync(cmd, args, { stdio: "inherit", shell: process.platform === "win32" });
  if (res.status !== 0) process.exit(res.status ?? 1);
};

run("npm", ["run", "build"]);
run("scp", ["-P", port, "-r", "dist/.", `${user}@${hostName}:${remotePath}`]);
