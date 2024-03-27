import {AuthUseCase, Credentials, Email, Password} from '../../../domain';
import {store, setUser} from '../../../domain';

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
        const user = await this.authUseCase.login(this.credentials);
        store.dispatch(setUser(user));
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
