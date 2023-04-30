import chalk from "chalk";

import { log, logDdddurk } from "../lib";

export const commands = () => {
  logDdddurk("Commands:");

  log(
    chalk.bold("commands") + " Display @ddddurk/cli commands."
  );
  log(chalk.bold("about") + " About Durk.");
  log(chalk.bold("file") + " (Droplet) Durk's file.");
  log(chalk.bold("template") + " (Droplet) Durk's template.");

  console.log("\n");
};
