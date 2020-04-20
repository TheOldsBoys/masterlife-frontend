import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {auth} from './Auth'


import defaultTheme from './siteTheme'
import { Paper } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(() => ({
  paper: {
    marginTop: defaultTheme.spacing(8),
    padding: defaultTheme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: defaultTheme.spacing(1),
    background: defaultTheme.palette.primary.main,
    color: defaultTheme.palette.primary.contrastText
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: defaultTheme.spacing(1),
  },
  submit: {
    margin: defaultTheme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
<ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
       //     type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>auth( document.getElementById('username').value, document.getElementById('password').value)}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
             
            </Grid>
            <Grid item >
              <Link href="/signup" variant="body2" color="textPrimary">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
</ThemeProvider>

  );
}

          /* Form per chiedere se l'utente vuole salvare la sessione
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          ------e se ha dimenticato la password
           <Link href="#" variant="body2">
                Forgot password?
              </Link>*/