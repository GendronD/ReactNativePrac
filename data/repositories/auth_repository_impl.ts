import {Credentials, AuthRepository} from '../../domain';

class AuthRepositoryImpl implements AuthRepository {
  async login(credentials: Credentials): Promise<void> {
    try {
      console.log(credentials.email);
    } catch (error) {
      throw error;
    }
  }
}

export default AuthRepositoryImpl;
