import chalk from "chalk";

import { version } from "../package.json";
import { logDdddurk } from "./lib";

export const boxVersion = () => {
  console.log("\n");

  logDdddurk(
    chalk.bold("v" + version) + " @ddddurk/cli initiated."
  );

  console.log("\n");
};
