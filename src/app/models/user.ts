export class User {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  cpf?: string;
  dateOfBirth?: Date;
  gender?: string;
  race?: string;
  pwd?: boolean;
  disability?: string;
  cellphone?: string;
  applications?: User[];

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
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.cpf = cpf;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.race = race;
    this.pwd = pwd;
    this.disability = disability;
    this.cellphone = cellphone;
    this.applications = applications;
  }
}
