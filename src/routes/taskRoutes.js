import { Router } from 'express';
import * as taskController from '../controllers/taskController';
import {
  validateCreateTask,
  validateGetTasks,
  validateReqParamId,
  validateTaskStatus,
  validateUpdateTask
} from '../validators/taskValidator';

const taskRoutes = Router();

taskRoutes.post('/', validateCreateTask, taskController.addTask);
taskRoutes.get('/', validateGetTasks, taskController.getTasks);
taskRoutes.get('/random', taskController.getRandomTask);
taskRoutes.put('/:id', validateReqParamId, validateUpdateTask, taskController.updateTask);
taskRoutes.put('/:id/status', validateReqParamId, validateTaskStatus, taskController.updateTaskStatus);
taskRoutes.delete('/:id', validateReqParamId, taskController.deleteTask);

export default taskRoutes;
