import { Job } from './Job';

export class SalaryJob implements Job {
  salary: number;
  title: string;
  yearsRequired: number;
  remote: boolean;

  constructor(
    title: string,
    salary: number,
    yearsRequired: number = 0,
    remote: boolean = false
  ) {
    this.title = title;
    this.yearsRequired = yearsRequired;
    this.remote = remote;
    this.salary = salary;
  }

  getAnnualPay() {
    return this.salary;
  }
}

const salaryJob = new SalaryJob('Job', 70000);
