import { StatusCodes } from 'http-status-codes';
import ExtendableError from 'es6-error';

const { UNAUTHORIZED } = StatusCodes;

export default class UnauthorizedException extends ExtendableError {
  constructor(message) {
    super(message || 'Unauthorized');
    this.statusCode = UNAUTHORIZED;
  }
}
