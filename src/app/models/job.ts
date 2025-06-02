export class Job {
  id!: number;
  title!: string;
  enterprise = {
    companyName: '',
  };
  description!: string;
  model!: string;
  type!: string;
  deadline!: string;
  location!: string;
  // applications!: <User>
}
