import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import challengeRegister from './challengeRegister'

import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    
  },
  
  input: {
    display: 'none',
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
    },
    width : '100%'
  },
  allWidht:{
    flexGrow: 1,
    width:'100%'
  }
}));


function disable(completed_at){if(completed_at === null) return false; else return true}

export default function ChallengeUploadPanel({data}) {
  const classes = useStyles();
  const completed = (compl) => {
    if(compl)
    return( "sfida già completata!" )
      else
      return("Carica la tua SFIDA!")
  }

  console.log('-------------------')
  console.log(disable(data.completed_at))
  return (
    <div className={classes.root}>
      <ExpansionPanel disabled={disable(data.completed_at)}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{completed(disable(data.completed_at))}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className={classes.allWidht}>
            <Grid key='0' container direction="column" spacing='2'>
              <Grid key={1} item>  Descrizione : </Grid>
              <Grid key={2} item xs={12} sm={12}>              
                <TextField
                  className={classes.textField}
                  id="description"
                  label="Descrizione dello svolgimento"
                  placeholder="Placeholder"
                  multiline
                  variant="outlined"
                  width='100%'
                />
              </Grid>
              <Grid key={6} item>                
                <TextField id="video" placeholder='Incolla qui il link al tuo video' label="Link al tuo video:" />
              </Grid>
              <Grid key={4} item>
                <Button onClick={() => {challengeRegister(data.id,"immagine","video",document.getElementById('description').value)}} autoFocus color="primary">
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