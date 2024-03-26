import {Email, Password} from '../value_objects';

export class Credentials {
  email: Email;
  password: Password;

  constructor(email: Email, password: Password) {
    this.email = email;
    this.password = password;
  }

  isValid(): boolean {
    return this.email.validate() && this.password.validate();
  }
}

export default Credentials;
