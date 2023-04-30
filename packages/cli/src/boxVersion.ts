import chalk from "chalk";

import { version } from "../package.json";
import { colors, logDdddurk } from "./lib";

export const boxVersion = () => {
  logDdddurk(
    chalk.hex(colors.pink)("v" + version) +
      " @ddddurk/cli initiated."
  );

  console.log("\n");
};
