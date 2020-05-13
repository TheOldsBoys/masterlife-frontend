import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import { clearSnackbar } from "./snackbarActions";

import CloseIcon from '@material-ui/icons/Close';

import MuiAlert from '@material-ui/lab/Alert';
import { withStyles } from '@material-ui/core';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const StyledSnackbar = withStyles({
              root: {
                bottom:10
              }
          })(Snackbar)


const SuccessMessage = () =>{

    const dispatch = useDispatch();

  const { snackbarMessage, snackbarOpen , severity } = useSelector(
    state => state
  );

  function handleClose() {
    dispatch(clearSnackbar());
  }

    return(
            <StyledSnackbar
                color='error'
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleClose} >
                    
                <Alert 
                    id="client-snackbar" 
                    severity={severity}
                    action={
                        <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                        </React.Fragment>}>
                        {snackbarMessage}
                </Alert>
            </StyledSnackbar>
    )
}

export default (SuccessMessage)