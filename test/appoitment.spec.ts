import { test, expect } from "vitest";
import { Appointment } from "../src/entities/appointment";

test("create an appointment", function () {
  const startsAt = new Date();
  const endsAt = new Date();

  endsAt.setDate(endsAt.getDate() + 1);

  const appointment = new Appointment({
    customer: "John Doe",
    startsAt,
    endsAt,
  });

  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.customer).toEqual("John Doe");
});

test("cannot create an appointmemt with end date before start date", function () {
  const startsAt = new Date();
  const endsAt = new Date();

  endsAt.setDate(endsAt.getDate() - 1);

  expect(() => {
    return new Appointment({
      customer: "John Doe",
      startsAt,
      endsAt,
    });
  }).toThrow();
});
