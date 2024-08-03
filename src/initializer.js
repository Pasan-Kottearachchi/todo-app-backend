import logger from './utils/logger';
import taskManager from './services/taskManagerSingleton';

export default async function initializer() {
  logger.info('Initialization start');

  const initialTasks = [
    'Task 1: General Setup',
    'Task 2: Database Connection',
    'Task 3: Implement API',
    'Task 4: Testing',
    'Task 5: Deployment'
  ];

  // eslint-disable-next-line no-restricted-syntax
  for (const taskName of initialTasks) {
    // eslint-disable-next-line no-await-in-loop
    await taskManager.addTask(taskName);
  }

  logger.info('Initialization complete');
}
