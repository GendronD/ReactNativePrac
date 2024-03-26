import {CustomError} from './custom_error';

export class UnknownError extends CustomError {
  constructor(message: string) {
    super(message);
  }
}

export default UnknownError;
