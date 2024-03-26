import {AuthUseCase, Credentials, Email, Password} from '../../../domain';

class LoginViewModel {
  private authUseCase: AuthUseCase;
  credentials: Credentials;

  constructor(authUseCase: AuthUseCase) {
    this.authUseCase = authUseCase;
    this.credentials = new Credentials(new Email(''), new Password(''));
  }

  async login(): Promise<void> {
    try {
      if (this.credentials.isValid()) {
        await this.authUseCase.login(this.credentials);
        // Show Success Snackbar to UI
        console.log('login successs');
      } else {
        // Show Failure Snackbar to UI
        console.log('login failure');
      }
    } catch (error) {}
  }
}

export default LoginViewModel;
