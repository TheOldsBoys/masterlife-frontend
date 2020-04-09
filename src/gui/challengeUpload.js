import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { GridList } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  DialogActions: {
    margin: 0,
    padding: theme.spacing(1),

  },
  textField: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100ch',
    },
  },
  grid: {
    width:'lg'
  },
  allWidht:{
    flexGrow: 1,
    width:'100%'
  }
}));



export default function ChallengeUploadPanel({data}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Carica la tua SFIDA!</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <div className={classes.allWidht}>
          <Grid
  container 
  direction="column"
  justify="center"
  alignItems="center"
>
<Grid key={1} item>  Descrizione : </Grid>
<Grid key={2} item>
              
           <TextField
           className={classes.textField}
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="outlined"
        /></Grid>

<Grid key={2} item>
    <Button autoFocus color="primary">
      Save changes
    </Button>
    </Grid>
    </Grid>
    </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
     
   
    </div>
  );
}
//how to disable expansion panel per una sfida già compiuta
 /*  <ExpansionPanel disabled>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Disabled Expansion Panel</Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>*/