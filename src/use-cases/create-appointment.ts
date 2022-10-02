import { Appointment } from "../entities/appointment";
import { AppointmentsRepository } from "../interfaces/appointmentsRepository";
import { CreateAppointmentRequest } from "../interfaces/createAppointmentResquest";

type CreateAppointmentResponse = Appointment;

export class CreateAppointment {
  constructor(private appoitmentsRepository: AppointmentsRepository) {}

  async execute({
    customer,
    startsAt,
    endsAt,
  }: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
    const overlappingAppoitment =
      await this.appoitmentsRepository.findOverlappingAppoitment(
        startsAt,
        endsAt
      );

    if (overlappingAppoitment) {
      throw new Error("Another appointment overlaps this appointment dates");
    }

    const appointment = new Appointment({
      customer,
      startsAt,
      endsAt,
    });

    await this.appoitmentsRepository.create(appointment);

    return appointment;
  }
}
