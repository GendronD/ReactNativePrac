import {Credentials} from '../models';

export interface AuthUseCase {
  login(credentials: Credentials): Promise<void>;
}

export default AuthUseCase;
