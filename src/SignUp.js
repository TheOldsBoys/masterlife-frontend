import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AvatarList from './gui/AvatarList'
import CardHeader from '@material-ui/core/CardHeader';

import defaultTheme from './siteTheme'
import { ThemeProvider, Paper } from '@material-ui/core';
import {isValidEmail, isValidUsername, isValidPW} from './functionValidate'


function Copyright() {
  return (
  <div>
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    
    <Typography variant="body2" color="textSecondary" align="center">
      Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      {'.'}
    </Typography>
  </div>
  );
}



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    padding: defaultTheme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxHeight: '80vh',
    overflowY:'scroll',
  },
  avatar: {
    margin: theme.spacing(1),
    background: defaultTheme.palette.primary.main,
    color: defaultTheme.palette.primary.contrastText
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [selectedAvatar, setSelectedAvatar] = React.useState(0);
  const [valid, setValid] = React.useState(false);
  const [validEmail, setValidEmail] = React.useState(true);
  const [validUsername, setValidUsername] = React.useState(false);
  const [validPW, setValidPW] = React.useState(false);

const onAvatarClick = (i) =>{
  setSelectedAvatar(i)
  console.log(selectedAvatar + 'aaaaaa= ' + i)
}

function sendSignup(username, pw, email,avatar){
  if(avatar===true){avatar = 0}
    let details = {
      'username': username,
      'password': pw,
      'email': email,
      'avatar': avatar,
  };

  if(validEmail){
        let formBody = [];
        for (let property in details) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
            body: formBody,
            credentials: 'include'
        };
        fetch(process.env.REACT_APP_API + 'register',requestOptions)
        .then(response =>{
            if (!response.ok) { throw response }
            alert('ok!')
            window.location.href='/login'; //we only get here if there is no error
                })
        .catch( err => {
                console.log(err.status)
        
        alert(formBody)
            if(err.status===401)
                alert("Attenzione: Username o password sbagliati")
                        })
        }
      else{
        alert("Controlla la validità della mail!")
      }
    }

  return (
    
    <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            
          <Grid item xs={12}>
              <TextField
                type="email"
                variant="outlined"
                required
                fullWidth
                error={!validEmail}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => isValidEmail(e.target.value,setValidEmail)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              
      <CardHeader title='Scegli il tuo avatar' />
              <AvatarList onClickHandle={onAvatarClick} selectedAvatar={selectedAvatar} />
            </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>sendSignup( document.getElementById('username').value, document.getElementById('password').value,document.getElementById('email').value,selectedAvatar)}
            >
            Sign Up
          </Button>
          </Grid>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Box mt={3}>
        <Copyright />
      </Box>
    </Container>
    </ThemeProvider>
  );
}