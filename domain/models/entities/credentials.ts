import {Email, Password} from '../value_objects';

export class Credentials {
  email: Email;
  password: Password;

  constructor(email: Email, password: Password) {
    this.email = email;
    this.password = password;
  }
}

export default Credentials;
