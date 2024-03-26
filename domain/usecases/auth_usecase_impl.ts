import {Credentials} from '../models';
import {AuthUseCase, AuthRepository} from '../contracts';

export class AuthUseCaseImpl implements AuthUseCase {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  async login(credentials: Credentials): Promise<void> {
    try {
      return await this.authRepository.login(credentials);
    } catch (error) {
      throw error;
    }
  }
}

export default AuthUseCaseImpl;