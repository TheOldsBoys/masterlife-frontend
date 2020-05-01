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
import ReactPlayer from 'react-player';
import InfoYoutube from './InfoYoutube'
import {InputAdornment, IconButton } from '@material-ui/core';
import {isValidLink} from '../functionValidate'

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




export default function ChallengeUploadPanel({data}) {
  const classes = useStyles();

  const [validLink, setValidLink] = React.useState(true);
  const [description, setDescription] = React.useState("");
  const [imagelink, setImagelink] = React.useState("");
  const [videolink, setVideolink] = React.useState("");
  const [score, setScore] = React.useState(0);
 
  const isComplete = disable(data.completed_at)

  function disable(completed_at){if(completed_at !== null) return true; else return false}
  
  function onVideoTextfieldChange(value){
    const isValid = isValidLink(value)
    setValidLink(isValid);
    if(isValid) setVideolink(value)
    else setVideolink(false)
  }

  const completed = (compl) => {
    if(compl)
    return( 
      <Typography className={classes.heading}>
      "Aggiorna la tua sfida!"
          </Typography>
           )
      else
      return(<Typography className={classes.heading}>Carica la tua SFIDA!</Typography>)
  }

  function labelIfCompleted(description,label){if(isComplete)return description; else return label}
  function videoIfCompleted(videolink){
    var defaultVideoLink="Link al tuo video (+ 5 punti):";
    if(videolink!=="")defaultVideoLink=videolink

    return(
    <TextField
                    id="video"
                    label={defaultVideoLink}
                    error={!validLink}
                    onChange={(e) => onVideoTextfieldChange(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <InfoYoutube/>
                        </InputAdornment>
                      ),
                    }}/>
    )
    
  }

  function onSubmitClick(){
if(!validLink)alert("Il link al video non sembra corretto!")
else challengeRegister(isComplete, data.id,"immagine",videolink,description,data.reward)  
  }

  return (
    <div className={classes.root}>
      <ExpansionPanel >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {completed(isComplete)}
          
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className={classes.allWidht}>
            <Grid key='0' container direction="column" spacing={2}> 
              <Grid key={1} item>  Descrizione : </Grid>
              <Grid key={2} item xs={12} sm={12}>              
                <TextField
                  className={classes.textField}
                  id="description"
                  defaultValue={labelIfCompleted(data.user_challenge_description,"",isComplete)}
                  placeholder="Descrizione dello svolgimento"
                  multiline
                  variant="outlined"
                  width='100%'
                  onChange= {(e) => setDescription(e.target.value)}
                />
              </Grid>
              <Grid key={6} item>                
                {videoIfCompleted(data.video_link,data.completed_at,isComplete)}
              </Grid>
              <Grid key={4} item>
                <Button
                  onClick={onSubmitClick}
                  autoFocus color="primary">
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