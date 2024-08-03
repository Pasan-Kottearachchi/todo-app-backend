import { StatusCodes } from 'http-status-codes';
import { errorResponse } from '../utils/response';
import NotFoundException from '../exception/NotFoundException';

const { INTERNAL_SERVER_ERROR } = StatusCodes;

export const notFoundErrorHandler = () => {
  return (req, res, next) => {
    next(new NotFoundException());
  };
};

export const defaultErrorHandler = () => {
  // eslint-disable-next-line no-unused-vars
  return (err, req, res, next) => {
    res
      .status(err.status || INTERNAL_SERVER_ERROR)
      .send(errorResponse(err))
      .json();
  };
};
