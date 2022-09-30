import { test, expect } from "vitest";
import { Appointment } from "../src/entities/appointment";

test("create an appointment", function () {
  const appointment = new Appointment({
    customer: "John Doe",
    startsAt: new Date(),
    endsAt: new Date(),
  });

  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.customer).toEqual("John Doe");
});
