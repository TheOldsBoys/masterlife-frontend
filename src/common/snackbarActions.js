// actions/snackbarActions.js
export const showSuccessSnackbar = message => {
  return { type: "SNACKBAR_SUCCESS", message };
  };
  
export const showErrorSnackbar = message => {
  return { type: "SNACKBAR_ERROR", message };
  };
  
  export const clearSnackbar = () => {
    return { type: "SNACKBAR_CLEAR" };
    };