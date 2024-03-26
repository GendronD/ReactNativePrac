import {Credentials, AuthRepository} from '../../domain';

class AuthRepositoryImpl implements AuthRepository {
  async login(credentials: Credentials): Promise<void | null> {
    // try/catch here
    console.log(credentials.email);
    return;
  }
}

export default AuthRepositoryImpl;
