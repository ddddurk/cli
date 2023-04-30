import { log } from "@ddddurk/kit";

import { colors } from "../colors";

export const logDdddurk = (text: string) =>
  log(text, { label: { hex: colors.cyan, text: "ddddurk" } });
