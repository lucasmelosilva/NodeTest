import { test, expect } from "vitest";
import { Appointment } from "../src/entities/appointment";
import { getFutureDate } from "./utils/getFutureDate";

test("create an appointment", () => {
  const startsAt = getFutureDate("2022-10-02");
  const endsAt = getFutureDate("2022-10-03");

  const appointment = new Appointment({
    customer: "John Doe",
    startsAt,
    endsAt,
  });

  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.customer).toEqual("John Doe");
});

test("cannot create an appointmemt with end date before start date", () => {
  const startsAt = getFutureDate("2022-10-03");
  const endsAt = getFutureDate("2022-10-01");

  expect(() => {
    return new Appointment({
      customer: "John Doe",
      startsAt,
      endsAt,
    });
  }).toThrow();
});

test("cannot create an appointment with start date before now", () => {
  const startsAt = new Date();
  const endsAt = new Date();

  startsAt.setDate(startsAt.getDate() - 1);
  endsAt.setDate(endsAt.getDate() + 3);

  expect(() => {
    return new Appointment({
      customer: "John Doe",
      startsAt,
      endsAt,
    });
  }).toThrow();
});
