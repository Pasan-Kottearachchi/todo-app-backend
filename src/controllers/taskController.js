import HttpStatus from 'http-status-codes';
import { successResponse } from '../utils/response';
import * as taskService from '../services/taskService';
import { appendExceptionStack } from '../utils/exceptionUtils';

export const addTask = (req, res, next) => {
  const { name } = req.body;

  taskService
    .addTask(name)
    .then((data) => res.status(HttpStatus.CREATED).json({ data }))
    .catch((err) => next(appendExceptionStack(err)));
};

export const getTasks = (req, res, next) => {
  const { search } = req.query;

  taskService
    .getTasks(search)
    .then((data) => res.json(successResponse(data)))
    .catch((err) => next(appendExceptionStack(err)));
};

export const getRandomTask = (req, res, next) => {
  taskService
    .getRandomTask()
    .then((data) => res.json(successResponse(data)))
    .catch((err) => next(appendExceptionStack(err)));
};

export const updateTask = async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;

  taskService
    .updateTaskName(Number(id), name)
    .then((data) => res.json(successResponse(data)))
    .catch((err) => next(appendExceptionStack(err)));
};

export const deleteTask = async (req, res, next) => {
  const { id } = req.params;

  taskService
    .deleteTask(Number(id))
    .then((data) => res.status(HttpStatus.NO_CONTENT).json({ data }))
    .catch((err) => next(appendExceptionStack(err)));
};

export const updateTaskStatus = async (req, res, next) => {
  const { id } = req.params;
  const { status } = req.body;

  taskService
    .updateTaskStatus(Number(id), status)
    .then((data) => res.json(successResponse(data)))
    .catch((err) => next(appendExceptionStack(err)));
};
