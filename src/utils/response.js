export const response = (status, message = null, data = null) => {
  return { status, message, data };
};

export const successResponse = (data, message) => {
  if (data === undefined) throw new Error('"data" must be defined when calling success-response.');
  return {
    status: 'success',
    message,
    data: data && data.data ? data.data : data
  };
};

export const errorResponse = (error, message, data) => {
  return {
    status: error.status || 500,
    message: message || error.message || 'internal server error',
    data
  };
};
