import taskManager from './taskManagerSingleton';
import NotFoundException from '../exception/NotFoundException';

const validateTaskExistence = async (id) => {
  const existingTask = await taskManager.getTaskById(Number(id));
  if (!existingTask) {
    throw new NotFoundException(`Task with id ${id} not found`);
  }
};
export const addTask = async (name) => {
  return taskManager.addTask(name);
};

export const getTasks = async (search) => {
  return taskManager.getTasks(search);
};

export const getRandomTask = async () => {
  return taskManager.getRandomTask();
};

export const updateTaskName = async (id, name) => {
  await validateTaskExistence(id);
  await taskManager.updateTaskName(id, name);
  return taskManager.getTaskById(id);
};

export const deleteTask = async (id) => {
  await validateTaskExistence(id);
  return taskManager.deleteTask(id);
};

export const updateTaskStatus = async (id, status) => {
  await validateTaskExistence(id);
  return taskManager.updateTaskStatus(id, status);
};
