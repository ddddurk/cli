import { createRequire } from "module";
const require = createRequire(import.meta.url);

const indigo = require("@ddddurk/colors/colors/indigo.json");

export const colors = {
  ddddurk: indigo[600]
};
