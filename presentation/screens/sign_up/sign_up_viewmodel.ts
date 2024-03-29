import {AuthUseCase, Credentials, Email, Password} from '../../../domain';
import {store, setUser} from '../../../domain';
import Toast from 'react-native-toast-message';

export class SignUpViewModel {
  private authUseCase: AuthUseCase;
  credentials: Credentials;

  constructor(authUseCase: AuthUseCase) {
    this.authUseCase = authUseCase;
    this.credentials = new Credentials(new Email(''), new Password(''));
  }

  async signUp(): Promise<void> {
    try {
      if (this.credentials.isValid()) {
        const user = await this.authUseCase.signUp(this.credentials);
        store.dispatch(setUser(user));
        Toast.show({
          type: 'success',
          text1: 'Sign Up Successful',
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Sign Up Credentials Not Valid',
        });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Sign Up Failed',
      });
    }
  }
}

export default SignUpViewModel;
