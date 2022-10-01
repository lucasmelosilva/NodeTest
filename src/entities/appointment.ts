import { AppointmentProps } from "../interfaces/appointmentProps";

export class Appointment {
  private props: AppointmentProps;

  get customer() {
    return this.props.customer;
  }

  get startsAt() {
    return this.props.startsAt;
  }

  get endsAt() {
    return this.props.endsAt;
  }

  constructor(props: AppointmentProps) {
    this.props = props;

    const { startsAt, endsAt } = props;

    const nowDate = new Date();

    if (startsAt <= nowDate) throw new Error("Start date invalid");
    if (endsAt <= startsAt) throw new Error("End date invalid");
  }
}
