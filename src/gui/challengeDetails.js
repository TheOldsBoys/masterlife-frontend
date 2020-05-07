import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import ChallengeUploadPanel from './challengeUpload';

const styles = (theme) => ({
    root: {
      margin: 0,
      marginRight: 50,
      padding: theme.spacing(2),
      minWidth: 600
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  
  const DialogTitleS = withStyles((theme) => ({
    root: {
      padding: theme.spacing(1),
    },
  }))(MuiDialogTitle);

  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <DialogTitleS disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitleS>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);

export default function SimpleDialog({open,onClose,selectedValue}) {

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const handleClose = () => { 
      onClose();
  };

if(open){
  return (
    <Dialog onClose={handleClose} 
        aria-labelledby="customized-dialog-title" 
        fullScreen={fullScreen} 
        open={open}
        maxWidth='lg'>

            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              {selectedValue.name}
              <Typography variant='body1'>
                ({selectedValue.reward} pt ) : {selectedValue.level}
              </Typography>
            </DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                {selectedValue.description}
              </Typography>
              <ChallengeUploadPanel data={selectedValue}/>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose} color="primary">
                Chiudi
              </Button>
            </DialogActions>
    </Dialog>
  )} else return null
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

 