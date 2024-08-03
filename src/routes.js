import { Router } from 'express';
import taskRoutes from './routes/taskRoutes';

const router = Router();

router.get('/health', (req, res) => {
  const healthCheck = {
    uptime: process.uptime(),
    memoryUsage: process.memoryUsage(),
    nodeVersion: process.versions.node,
    nodeEnv: process.env.NODE_ENV,
    message: 'OK',
    serviceName: 'todo-list-pasan',
    timestamp: Date.now()
  };

  try {
    res.send(healthCheck);
  } catch (e) {
    healthCheck.message = e;
    res.status(503).send();
  }
});

router.use('/tasks', taskRoutes);

export default router;
