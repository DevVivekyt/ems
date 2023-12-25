export const createError = (message) => {
  return {
    success: false,
    status: 0,
    message,
  };
};
export const createSuccess = (message, result) => {
  return {
    success: true,
    status: 1,
    message,
    result,
  };
};
