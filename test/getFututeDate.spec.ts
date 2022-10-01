import { test, expect } from "vitest";
import { getFutureDate } from "./utils/getFutureDate";

test("Increases date with one year", () => {
  const year = new Date().getFullYear();
  expect(getFutureDate(`${year}-08-10`).getFullYear()).toEqual(2023);
});
