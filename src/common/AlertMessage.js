import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import { Icon } from "@material-ui/core";
import { clearSnackbar } from "./snackbarActions";
import { connect } from 'react-redux'


import CloseIcon from '@material-ui/icons/Close';


const AlertMessage = () =>{

    const dispatch = useDispatch();

  const { successSnackbarMessage, successSnackbarOpen } = useSelector(
    state => state.ui
  );

  function handleClose() {
    dispatch(clearSnackbar());
  }

    return(
            <Snackbar
                    color='secondary'
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={successSnackbarOpen}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message={<span id="client-snackbar">
                    <Icon>check_circle</Icon>
                        {successSnackbarMessage}
                  </span>}
                    action={
                        <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                        </React.Fragment>
                            }
                    />
    )
}

export default connect()(AlertMessage)