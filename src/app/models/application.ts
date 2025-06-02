import { Job } from './job';
import { User } from './user';

export class Application {
  id!: number;
  user!: User;
  job!: Job;
  applicationDate!: Date;
  status: string = 'pendente';
}
