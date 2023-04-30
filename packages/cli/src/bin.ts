import { droplet } from "@dddstack/droplet-core";
import { dirname } from "path";
import { cwd } from "process";
import { fileURLToPath } from "url";

import { boxVersion } from "./boxVersion";
import { about, commands } from "./commands";

const DIRNAME = dirname(fileURLToPath(import.meta.url));

export const bin = droplet({
  fromDirectory: DIRNAME,
  toDirectory: cwd()
});

bin
  .command("about", { isDefault: true })
  .hook("preAction", () => boxVersion())
  .action(() => about());

bin
  .command("commands")
  .alias("help")
  .hook("preAction", () => boxVersion())
  .action(() => commands());

bin.parse();
