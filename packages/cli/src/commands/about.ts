import chalk from "chalk";

import { log, logLabel } from "../lib";

export const about = () => {
  log(
    "Hi! I'm " +
      chalk.bold("Durk") +
      ", welcome to my personal CLI."
  );

  console.log("\n");

  log(
    "I'm passionate about building great web applications, creating dynamic user interfaces, and making accessible data visualizations."
  );

  console.log("\n");

  log(
    "I'm committed to a Catholic, holistic, and purpose-filled lifestyle."
  );

  console.log("\n");

  logLabel(
    "more",
    "Visit my website at " + chalk.bold("https://ddddurk.com")
  );

  log("Run " + chalk.bold("ddddurk commands") + " for more.");

  console.log("\n");
};
