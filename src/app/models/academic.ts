import { User } from './user';

export class Academic extends User {
  course?: string;
  educationalInstitution?: string;
  period?: string;
  turn?: string;
  conclusion?: Date;

  constructor(
    id?: number,
    name?: string,
    email?: string,
    password?: string,
    cpf?: string,
    dateOfBirth?: Date,
    gender?: string,
    race?: string,
    pwd?: boolean,
    disability?: string,
    cellphone?: string,
    adress?: string,
    applications?: User[],
    course?: string,
    educationalInstitution?: string,
    period?: string,
    turn?: string,
    conclusion?: Date
  ) {
    super(
      id,
      name,
      email,
      password,
      cpf,
      dateOfBirth,
      gender,
      race,
      pwd,
      disability,
      cellphone,
      adress,
      applications,
      course,
      educationalInstitution,
      period,
      turn,
      conclusion
    );
    this.course = course;
    this.educationalInstitution = educationalInstitution;
    this.period = period;
    this.turn = turn;
    this.conclusion = conclusion;
  }
}
