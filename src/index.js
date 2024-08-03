import httpContext from 'express-http-context';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import express from 'express';
import compression from 'compression';

import './env';

import routes from './routes';
import logger, { logStream } from './utils/logger';
import requestUuid from './middleware/requestUuid';
import { defaultErrorHandler, notFoundErrorHandler } from './middleware/errorHandler';

import { APP_HOST, APP_PORT, BASE_URL, IMMEDIATE_LOG_FORMAT, LOG_FORMAT } from './config/appConfig';
import errorLogger from './middleware/errorLogger';
import initializer from './initializer';

// set stack trace limit
Error.stackTraceLimit = 10;

initializer().then(() => {
  const app = express();

  app.set('port', APP_PORT);
  app.set('host', APP_HOST);
  app.locals.title = process.env.APP_NAME;
  app.locals.version = process.env.APP_VERSION;

  // standard middleware
  app.use(cors());
  app.use(helmet());
  app.use(compression());
  app.use(express.json());

  app.use(httpContext.middleware);
  app.use(requestUuid());

  app.use(morgan(IMMEDIATE_LOG_FORMAT, { immediate: true, stream: logStream }));
  app.use(morgan(LOG_FORMAT, { stream: logStream }));

  // app.use(authentication());

  // routes
  app.use(BASE_URL, routes);

  // handling errors
  app.use(notFoundErrorHandler());
  app.use(errorLogger());
  app.use(defaultErrorHandler());

  app.listen(app.get('port'), app.get('host'), () => {
    logger.info(`server started at http://${app.get('host')}:${app.get('port')}${BASE_URL}`);
  });

  // catch unhandled rejections
  process.on('unhandledRejection', (err) => {
    logger.error('unhandled rejection', err);
    process.exit(1);
  });

  // catch uncaught exceptions
  process.on('uncaughtException', (err) => {
    logger.error('uncaught exception', err);
    process.exit(1);
  });
});
