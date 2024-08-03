import { StatusCodes } from 'http-status-codes';
import ExtendableError from 'es6-error';

const { FORBIDDEN } = StatusCodes;

export default class ForbiddenException extends ExtendableError {
  constructor(message) {
    super(message || 'Forbidden');
    this.status = FORBIDDEN;
  }
}
