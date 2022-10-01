import { Appointment } from "../entities/appointment";
import { CreateAppointmentRequest } from "../interfaces/createAppointmentResquest";

type CreateAppointmentResponse = Appointment;

export class CreateAppointment {
  async execute({
    customer,
    startsAt,
    endsAt,
  }: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
    return new Appointment({
      customer,
      startsAt,
      endsAt,
    });
  }
}
