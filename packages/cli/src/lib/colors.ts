import { createRequire } from "module";
const require = createRequire(import.meta.url);

const cyan = require("@ddddurk/colors/colors/cyan.json");
const pink = require("@ddddurk/colors/colors/pink.json");

export const colors = {
  cyan: cyan[500],
  pink: pink[500]
};
