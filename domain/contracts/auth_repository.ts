import {Credentials} from '../models';

export interface AuthRepository {
  login(credentials: Credentials): Promise<void | null>;
}

export default AuthRepository;
