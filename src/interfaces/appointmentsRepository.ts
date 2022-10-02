import { Appointment } from "../entities/appointment";

export interface AppointmentsRepository {
  create(appointment: Appointment): Promise<void>;
  findOverlappingAppoitment(
    startsAt: Date,
    endsAt: Date
  ): Promise<Appointment | null>;
}
