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

    if (props.endsAt <= props.startsAt) throw new Error("End date invalid");
  }
}
