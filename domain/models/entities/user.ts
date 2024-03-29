import {Email} from '../value_objects';

export class User {
  id: number;
  email: Email;
  firstName: string;
  lastName: string;

  constructor(id: number, email: Email, firstName: string, lastName: string) {
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

export default User;
