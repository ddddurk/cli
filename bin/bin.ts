import { droplet } from "@dddstack/droplet";
import chalk from "chalk";
import gradientString from "gradient-string";
import { dirname } from "path";
import { cwd } from "process";
import { fileURLToPath } from "url";

const DIRNAME = dirname(fileURLToPath(import.meta.url));

export const program = droplet({
  fromDirectory: DIRNAME,
  toDirectory: cwd()
});

console.log(
  chalk.bold(gradientString(["#80FFAA", "#66EFFF", "#E368E3"])(">>> DDDDURK\n"))
);

program.parse();
