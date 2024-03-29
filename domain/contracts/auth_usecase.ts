import {User, Credentials} from '../models';

export interface AuthUseCase {
  login(credentials: Credentials): Promise<User>;
  signUp(credentials: Credentials): Promise<User>;
}

export default AuthUseCase;
