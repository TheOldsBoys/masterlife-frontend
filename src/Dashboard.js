import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import { mainListItems } from './menuItems';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom' 
import Challenges from './Challenges'
import User from './User'
import FriendsActivity from './FriendsActivity';
import isAuth from './Auth'
import {logoutSession} from './Auth'

import theme from './siteTheme'
import {dashboardTheme} from './siteTheme'
import { ThemeProvider, Paper } from '@material-ui/core';
import MainPage from './MainPage';

function Copyright() {
  return (
  <div>
    <Typography variant="h4" color="textSecondary" align="center">
      {'Copyright © masterlife '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  </div>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  //  backgroundImage: "url('/img/bosco.jpg')"
  },
  
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    paddingTop:'56px',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
//    background: 'rgba(76, 175, 80, 0.0)',
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(10),
    },
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  useEffect(() => {
    isAuth();
})

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDrawer = () => {
    if (open) handleDrawerClose();
    if (!open) handleDrawerOpen();
  }
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div className={classes.root}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            className={clsx(classes.menuButton)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            The master life!
          </Typography>
          <IconButton onClick={()=>logoutSession()} color="inherit">
              <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Router>
      <ThemeProvider theme={dashboardTheme}>
        <Drawer
          onClick={handleDrawerClose}
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
          >
          <List className={clsx(!open && classes.iconClosed)}>
                {mainListItems}</List>
                
            <Divider />
        </Drawer>
      </ThemeProvider>
        <main id="main-container" className={classes.content} onClick={handleDrawerClose}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={11}>
                <Switch>
                  <Route exact path="/">
                   <Typography variant="h2"> Benvenuto {sessionStorage.getItem('username')}</Typography>
                   <MainPage/>
                  </Route>
                  <Route path="/all_challenges">
                    <Challenges/>
                  </Route>
                  <Route path="/user">
                    <User/>
                  </Route>
                  <Route path="/friends_activity">
                    <FriendsActivity/>
                  </Route>
                </Switch>
              </Grid>
            </Grid>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
        
      </Router>
    </ThemeProvider>
   </div>
  );
}
