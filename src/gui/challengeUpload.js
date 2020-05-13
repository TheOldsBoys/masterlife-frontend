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
import ImageUpload from '../net/imageUploader'

import TextField from '@material-ui/core/TextField';
import InfoYoutube from './InfoYoutube'
import {InputAdornment, IconButton, Divider, Snackbar } from '@material-ui/core';
import {isValidLink} from '../functionValidate'
import {showSuccessSnackbar,showErrorSnackbar} from '../common/snackbarActions'
import { useDispatch } from 'react-redux';

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

  const oldChallenge={
    id:data.id,
    isComplete:disable(data.completed_at),
    description:data.description,
    videolink:data.video_link,
    imageViewURL:Array.from(data.images_link),
    score:0

  };

  const [newChallenge, setNewChallenge] = React.useState(oldChallenge);

  const [validLink, setValidLink] = React.useState(true);
  const [imageIsUploading, setImageIsUploading] = React.useState(false);
  const [descriptionError, setdescriptionError] = React.useState(false);
  const isComplete = disable(data.completed_at)

  const updateField = (name,value) => {
    setNewChallenge({
      ...newChallenge,
      [name]: value
    });
  };

  var defaultVideoLink=null;
  if(newChallenge.videolink!==null)defaultVideoLink=newChallenge.videolink

  const dispatch = useDispatch();

  const onImageUploading = (isUploading) => {
    setImageIsUploading(isUploading);
    console.log('Sto caricando??????? '+isUploading)
  }
  const onImageUploaded = (imageViewURLN) => {
    let arrayofURLS = newChallenge.imageViewURL
    arrayofURLS.push(imageViewURLN)
    updateField('imageViewURL',arrayofURLS);
    console.log(newChallenge.imageViewURL)
  }

  function disable(completed_at){if(completed_at !== null) return true; else return false}
  
  function onVideoTextfieldChange(event){
    let isValid = isValidLink(event.target.value)
    console.log(event.target.value)

    if
      (event.target.value==="" || event.target.value===null)
        isValid=true

      setValidLink(isValid);

      updateField('videolink',event.target.value)
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

  function videoTextfield(){
    return(
    <TextField
                    className={classes.textField}
                    id="video"
                    label="Link al tuo video (+ 5 punti):"
                    error={!validLink}
                    defaultValue={defaultVideoLink}
                    onChange={onVideoTextfieldChange}
                    xs={12}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <InfoYoutube/>
                        </InputAdornment>
                      ),
                    }}/>
    )
    
  }

  const onSuccess = (msg)=>{
    dispatch(showSuccessSnackbar(msg))
    setTimeout(
      ()=>(window.location.reload()),
    3000)
  }


  function onSubmitClick(){
          
    
            if(imageIsUploading){
                dispatch(showErrorSnackbar("le immagini stanno caricando"))

                }
            else if(newChallenge.description===""){
              dispatch(showErrorSnackbar("Scrivi qualcosa nella descrizione!"))
                  setdescriptionError(true)
            }
            else if(!validLink )
              dispatch(showErrorSnackbar("Il link al video non sembra corretto!"))
            else {
                  console.log(newChallenge)
                  challengeRegister(newChallenge,oldChallenge, data.reward,onSuccess)  
            }
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
                  <Grid key='0' container direction="row" spacing={2}> 
                    <Grid key={1} item>  Descrizione : </Grid>
                    <Grid key={2} item xs={12} sm={12}>              
                      <TextField
                        className={classes.textField}
                        id="description"
                        defaultValue={data.user_challenge_description}
                        placeholder="Descrizione dello svolgimento"
                        multiline
                        variant="outlined"
                        error={descriptionError}
                        onChange= {(e) => updateField('description',e.target.value)}
                      />
                    </Grid>
                    <Divider/>
                    <Grid key={3} lg={3} item>  Link a un video : </Grid>
                    <Grid key={4} lg={9} sm={12}  item>                
                      {videoTextfield()}
                    </Grid>
                    <Divider/>
                    <Grid key={5} xs={12} lg={3} item>Le tue immagini : </Grid>
                    <Grid key={6} xs={12} lg={9} item>
                      <ImageUpload 
                       justify='flex-end'
                      onUploading={onImageUploading}
                      onUploaded={onImageUploaded}
                      photos={data.images_link}
                      />
                    </Grid>
                    <Grid key={7} xs={12} item>
                    <Divider/>
                      <Button
                      fullWidth={true}
                        variant="contained"
                        onClick={onSubmitClick}
                        autoFocus color="primary">
                          SALVA!
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        );
}