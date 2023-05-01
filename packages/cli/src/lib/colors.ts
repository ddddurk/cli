import { createRequire } from "module";
const require = createRequire(import.meta.url);

const pink = require("@ddddurk/colors/colors/pink.json");

export const colors = {
  ddddurk: pink[600]
};
