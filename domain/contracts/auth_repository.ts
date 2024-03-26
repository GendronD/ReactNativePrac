import {Credentials} from '../models';

export interface AuthRepository {
  login(credentials: Credentials): Promise<void>;
}

export default AuthRepository;
