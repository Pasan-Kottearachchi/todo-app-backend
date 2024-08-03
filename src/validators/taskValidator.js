import Joi from '@hapi/joi';
import validate from '../utils/validate';
import InvalidRequestException from '../exception/InvalidRequestException';
import { TASK_STATUS_TYPES } from '../constants/commonConstants';

export async function validateCreateTask(req, res, next) {
  try {
    const requestSchema = Joi.object({
      name: Joi.string().required()
    });

    const { isError, ErrorMessage } = validate(req.body, requestSchema);
    if (isError) {
      next(new InvalidRequestException(ErrorMessage));
    }
    next();
  } catch (e) {
    next(e);
  }
}

export async function validateUpdateTask(req, res, next) {
  try {
    const requestSchema = Joi.object({
      name: Joi.string().required()
    });

    const { isError, ErrorMessage } = validate(req.body, requestSchema);
    if (isError) {
      next(new InvalidRequestException(ErrorMessage));
    }
    next();
  } catch (e) {
    next(e);
  }
}

export async function validateReqParamId(req, res, next) {
  try {
    const requestSchema = Joi.object({
      id: Joi.number().required()
    });

    const { isError, ErrorMessage } = validate(req.params, requestSchema);
    if (isError) {
      next(new InvalidRequestException(ErrorMessage));
    }
    next();
  } catch (e) {
    next(e);
  }
}

export async function validateTaskStatus(req, res, next) {
  try {
    const requestSchema = Joi.object({
      status: Joi.string()
        .valid(...Object.values(TASK_STATUS_TYPES))
        .required()
    });

    const { isError, ErrorMessage } = validate(req.body, requestSchema);
    if (isError) {
      next(new InvalidRequestException(ErrorMessage));
    }
    next();
  } catch (e) {
    next(e);
  }
}

export async function validateGetTasks(req, res, next) {
  try {
    const requestSchema = Joi.object({
      search: Joi.string().optional()
    });

    const { isError, ErrorMessage } = validate(req.query, requestSchema);
    if (isError) {
      next(new InvalidRequestException(ErrorMessage));
    }
    next();
  } catch (e) {
    next(e);
  }
}
