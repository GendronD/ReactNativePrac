import {User, Credentials} from '../models';

export interface AuthRepository {
  login(credentials: Credentials): Promise<User>;
}

export default AuthRepository;
