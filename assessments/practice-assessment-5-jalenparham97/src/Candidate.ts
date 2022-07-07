import { Job } from './Job';

export class Candidate {
  name: string;
  yearsExperience = 0;

  constructor(name: string) {
    this.name = name;
  }

  addExperience(years: number) {
    this.yearsExperience += years;
  }

  fitsJob(job: Job) {
    return this.yearsExperience >= job.yearsRequired;
  }
}
