import {User, Credentials, AuthRepository} from '../../domain';

export class AuthRepositoryImpl implements AuthRepository {
  async login(credentials: Credentials): Promise<User> {
    try {
      return new User(1, credentials.email, 'First', 'Last');
    } catch (error) {
      throw error;
    }
  }

  async signUp(credentials: Credentials): Promise<User> {
    try {
      return new User(1, credentials.email, 'First', 'Last');
    } catch (error) {
      throw error;
    }
  }
}

export default AuthRepositoryImpl;
