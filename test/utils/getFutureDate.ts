import { setYear, parseISO } from "date-fns";

/*
 * Receives "2022-10-21" and returns "2023-10-21"
 */
export function getFutureDate(date: string): Date {
  return setYear(parseISO(date), new Date().getFullYear() + 1);
}
