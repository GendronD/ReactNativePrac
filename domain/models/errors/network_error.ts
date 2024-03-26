import {CustomError} from './custom_error';

export class NetworkError extends CustomError {
  constructor(message: string) {
    super(message);
  }
}

export default NetworkError;
