import { log } from "@ddddurk/kit";

import { colors } from "../colors";

export const logLabel = (label: string, text: string) =>
  log(text, { label: { hex: colors.ddddurk, text: label } });
