

const uiManage = (state = {
    snackbarOpen: false,
    errorSnackbarOpen: false,
    infoSnackbarOpen: false,
    snackbarMessage: "Ottimo!",
    severity:"success"
  
}, action) => {
    switch (action.type) {
      case "SNACKBAR_SUCCESS":
        return {
          snackbarOpen: true,
          snackbarMessage: action.message,
          severity:"success"
        };
        case "SNACKBAR_ERROR":
          return {
            snackbarOpen: true,
            snackbarMessage: action.message,
            severity:"error"
          };
      case "SNACKBAR_CLEAR":
        return {
          snackbarOpen: false,
          errorSnackbarOpen: false,
          infoSnackbarOpen: false
        };
      default:
        return state;
    }
  };
  
  export default uiManage;