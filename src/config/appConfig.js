export const { APP_HOST, APP_PORT } = process.env;
export const BASE_URL = '/todo-list-api';

export const IMMEDIATE_LOG_FORMAT = '[start-rq] :method :url';
export const LOG_FORMAT = '[end-rq] :method :url :status :res[content-length] - :response-time ms';
export const LOG_LEVEL = 'info';
