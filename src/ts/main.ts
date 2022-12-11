import { ANSWERS } from "./dict";

export function getAnswer() {
  const max = ANSWERS.length - 1;

  return ANSWERS[Math.floor(Math.random() * max)];
}
