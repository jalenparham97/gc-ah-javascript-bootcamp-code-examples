import { Job } from './Job';

export class HourlyJob implements Job {
  hourlyWage: number;
  title: string;
  yearsRequired: number;
  remote: boolean;

  constructor(
    title: string,
    yearsRequired: number = 0,
    remote: boolean = false,
    hourlyWage: number
  ) {
    this.title = title;
    this.yearsRequired = yearsRequired;
    this.remote = remote;
    this.hourlyWage = hourlyWage;
  }

  getAnnualPay() {
    return this.hourlyWage * 2000;
  }
}
