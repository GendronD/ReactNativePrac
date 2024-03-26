import {CustomError} from './custom_error';

export class AuthenticationError extends CustomError {
  constructor(message: string) {
    super(message);
  }
}

export default AuthenticationError;
