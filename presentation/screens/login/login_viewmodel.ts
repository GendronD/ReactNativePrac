import {Credentials, Email, Password} from '../../../domain';

class LoginViewModel {
  credentials: Credentials;

  constructor() {
    this.credentials = new Credentials(new Email(''), new Password(''));
  }

  login(): void {
    setTimeout(() => {
      const isValid =
        this.credentials.email.validate() &&
        this.credentials.password.validate();

      if (isValid) {
        console.log('login successs');
      } else {
        console.log('login failure');
      }
    }, 2000); // Simulates Network Delay
  }
}

export default LoginViewModel;
