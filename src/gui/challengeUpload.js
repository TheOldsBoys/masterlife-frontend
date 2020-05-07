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
import AlertMessage from '../common/AlertMessage';
import {showSuccessSnackbar} from '../common/snackbarActions'
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

  const [validLink, setValidLink] = React.useState(true);
  const [description, setDescription] = React.useState(data.user_challenge_description!==null ? data.user_challenge_description : "");
  const [imageIsUploading, setImageIsUploading] = React.useState(false);
  const [imageViewURL, setImageViewURL] = React.useState([]);
  const [videolink, setVideolink] = React.useState(data.video_link);
  const [score, setScore] = React.useState(0);
  const [descriptionError, setdescriptionError] = React.useState(false);
  const isComplete = disable(data.completed_at)

  const dispatch = useDispatch();

  const onImageUploading = (isUploading) => {
    setImageIsUploading(isUploading);
    console.log('Sto caricando??????? '+isUploading)
  }
  const onImageUploaded = (imageViewURLN) => {
    let arrayofURLS = imageViewURL
    arrayofURLS.push(imageViewURLN)
    setImageViewURL(arrayofURLS);
    console.log(imageViewURL)
  }

  function disable(completed_at){if(completed_at !== null) return true; else return false}
  
  function onVideoTextfieldChange(value){
    let isValid = isValidLink(value)
    let isNull = false

    if
      (value==="")
        isNull=true

    setValidLink(isValid);

    if
      (isValid && !isNull) setVideolink(value)
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
    if(videolink!==null)defaultVideoLink=videolink

    return(
    <TextField
                    className={classes.textField}
                    id="video"
                    label={defaultVideoLink}
                    error={!validLink}
                    onChange={(e) => onVideoTextfieldChange(e.target.value)}
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

  function onSubmitClick(){
          
    dispatch(showSuccessSnackbar("il primo messaggio!!"))
            if(imageIsUploading){
              alert("le immagini stanno caricando")

                }
            else if(description===""){
                  alert("Scrivi qualcosa nella descrizione!")
                  setdescriptionError(true)
            }
            else if(!validLink)
                  alert("Il link al video non sembra corretto!")
            else 
                  challengeRegister(isComplete, data.id,imageViewURL,videolink,description,data.reward)  
        }

        return (
          <div className={classes.root}>
             
            <AlertMessage />

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
                        defaultValue={labelIfCompleted(data.user_challenge_description,"",isComplete)}
                        placeholder="Descrizione dello svolgimento"
                        multiline
                        variant="outlined"
                        error={descriptionError}
                        onChange= {(e) => setDescription(e.target.value)}
                      />
                    </Grid>
                    <Divider/>
                    <Grid key={3} lg={3} item>  Link a un video : </Grid>
                    <Grid key={4} lg={9} sm={12}  item>                
                      {videoIfCompleted(data.video_link,data.completed_at,isComplete)}
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