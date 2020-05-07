// actions/snackbarActions.js
export const showSuccessSnackbar = message => {
    console.log('Show success snackbar')
    return dispatch => {
      dispatch({ type: "SNACKBAR_SUCCESS", message });
    };
  };
  
  export const clearSnackbar = () => {
    return dispatch => {
      dispatch({ type: "SNACKBAR_CLEAR" });
    };
  };