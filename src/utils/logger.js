import winston from 'winston';
import httpContext from 'express-http-context';
import split from 'split';
import { LOG_LEVEL } from '../config/appConfig';

const logTemplate = (info) => {
  const { level, timestamp, stack, message } = info;
  const requestId = httpContext.get('request-uuid') || 'NO_UUID';
  let log;
  if (stack) {
    log = `${level}|${requestId}|${timestamp}:${message}\n${stack}`;
  } else {
    log = `${level}|${requestId}|${timestamp}:${message}`;
  }
  return log;
};

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.align(),
        winston.format.printf(logTemplate)
      ),
      level: LOG_LEVEL
    })
  ]
});

export const logStream = split().on('data', (line) => {
  logger.info(line.toString());
});

export default logger;
