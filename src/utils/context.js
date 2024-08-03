import httpContext from 'express-http-context';

export function setRequestUuid(uuid) {
  httpContext.set('request-uuid', uuid);
}

export function setContextValue(key, value) {
  httpContext.set(key, value);
}

export function getContextValue(key) {
  return httpContext.get(key);
}
