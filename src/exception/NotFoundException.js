import ExtendableError from 'es6-error';
import { StatusCodes } from 'http-status-codes';

const { NOT_FOUND } = StatusCodes;

export default class NotFoundException extends ExtendableError {
  constructor(message) {
    super(message || 'Not Found');
    this.status = NOT_FOUND;
  }
}
