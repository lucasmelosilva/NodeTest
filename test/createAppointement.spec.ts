import { describe, expect, it } from "vitest";
import { Appointment } from "../src/entities/appointment";
import { CreateAppointment } from "../src/use-cases/create-appointment";

describe("Create Appointement", async () => {
  it("should be able to create an new appointment", () => {
    const createAppointment = new CreateAppointment();
    const startsAt = new Date();
    const endsAt = new Date();

    startsAt.setDate(startsAt.getDate() + 1);
    endsAt.setDate(endsAt.getDate() + 3);

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
