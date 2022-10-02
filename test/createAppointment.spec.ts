import { beforeEach, describe, expect, it } from "vitest";
import { Appointment } from "../src/entities/appointment";
import { AppointmentsRepository } from "../src/interfaces/appointmentsRepository";
import { InMemoryAppoitmentsRepository } from "../src/repositories/inMemoryAppoitmentsRepository";
import { CreateAppointment } from "../src/use-cases/create-appointment";
import { getFutureDate } from "./utils/getFutureDate";

describe("Create Appointement", async () => {
  let appointmentsRepository: AppointmentsRepository;
  let createAppointment: CreateAppointment;

  beforeEach(() => {
    appointmentsRepository = new InMemoryAppoitmentsRepository();
    createAppointment = new CreateAppointment(appointmentsRepository);
  });

  it("should be able to create an new appointment", () => {
    const startsAt = getFutureDate("2022-10-10");
    const endsAt = getFutureDate("2022-10-13");

    const appointment = {
      customer: "John Doe",
      startsAt,
      endsAt,
    };

    expect(createAppointment.execute(appointment)).resolves.toBeInstanceOf(
      Appointment
    );
  });

  it("should be able to create an appointment with overlapping dates", async () => {
    const startsAt = getFutureDate("2022-10-10");
    const endsAt = getFutureDate("2022-10-13");

    const firstAppointment = {
      customer: "John Doe",
      startsAt,
      endsAt,
    };

    const secondAppointment = {
      customer: "Josh Doe",
      startsAt,
      endsAt,
    };

    await createAppointment.execute(firstAppointment);

    expect(createAppointment.execute(secondAppointment)).rejects.toBeInstanceOf(
      Error
    );
  });
});
