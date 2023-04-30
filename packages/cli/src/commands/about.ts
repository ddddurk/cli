import chalk from "chalk";

import { colors, log, logLabel } from "../lib";

export const about = () => {
  log(
    "Hi! I'm " +
      chalk.bold("Durk") +
      ", welcome to my personal CLI."
  );

  console.log("\n");

  log(
    "I'm passionate about building beautiful web applications, creating dynamic user interfaces, and making accessible data visualizations."
  );

  console.log("\n");

  log(
    "I'm committed to a Catholic, holistic, and resolute lifestyle."
  );

  console.log("\n");

  logLabel(
    "more",
    "Visit my website at " +
      chalk.hex(colors.cyan)("https://ddddurk.com")
  );

  log("Run " + chalk.bold("ddddurk commands") + " for more.");

  console.log("\n");
};
