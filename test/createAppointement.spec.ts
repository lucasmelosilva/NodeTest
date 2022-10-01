import { describe, expect, it } from "vitest";
import { Appointment } from "../src/entities/appointment";
import { CreateAppointment } from "../src/use-cases/create-appointment";
import { getFutureDate } from "./utils/getFutureDate";

describe("Create Appointement", async () => {
  it("should be able to create an new appointment", () => {
    const createAppointment = new CreateAppointment();

    const startsAt = getFutureDate("2022-10-10");
    const endsAt = getFutureDate("2022-10-13");

    const sut = {
      customer: "John Doe",
      startsAt,
      endsAt,
    };

    expect(createAppointment.execute({ ...sut })).resolves.toBeInstanceOf(
      Appointment
    );
  });
});
