import { areIntervalsOverlapping } from "date-fns";
import { Appointment } from "../entities/appointment";
import { AppointmentsRepository } from "../interfaces/appointmentsRepository";

export class InMemoryAppoitmentsRepository implements AppointmentsRepository {
  public items: Appointment[] = [];

  async create(appointment: Appointment): Promise<void> {
    this.items.push(appointment);
  }

  async findOverlappingAppoitment(
    startsAt: Date,
    endsAt: Date
  ): Promise<Appointment | null> {
    const overlappingAppoitment = this.items.find((appointment) => {
      return areIntervalsOverlapping(
        { start: startsAt, end: endsAt },
        { start: appointment.startsAt, end: appointment.endsAt },
        { inclusive: true }
      );
    });

    return overlappingAppoitment || null;
  }
}
