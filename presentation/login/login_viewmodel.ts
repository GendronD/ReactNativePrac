import {Email, Password} from '../../domain';

class LoginViewModel {
  email: Email;
  password: Password;

  constructor() {
    this.email = new Email('');
    this.password = new Password('');
  }
}

export default LoginViewModel;
