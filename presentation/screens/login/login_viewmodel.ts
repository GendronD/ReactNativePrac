import {AuthUseCase, Credentials, Email, Password} from '../../../domain';
import {store, setUser} from '../../../domain';
import Toast from 'react-native-toast-message';

export class LoginViewModel {
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
        Toast.show({
          type: 'success',
          text1: 'Login Successful',
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Login Failed',
        });
      }
    } catch (error) {}
  }
}

export default LoginViewModel;
