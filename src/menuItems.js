import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FirstIcon from '@material-ui/icons/SportsHandball';
import {NavLink} from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import './listCss.scss'
import { ThemeProvider, Divider, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
const classes = () => ({
  root: {
    fontWeight: 700
    },
  typography: {
    paddingLeft:'50px'
      },
  }
);

export const mainListItems = (
  <div>
    <NavLink to="/all_challenges" activeClassName="main-nav-active" className="main-nav">
    <ListItem button className="principalButton" >
      <ListItemIcon >
        <FirstIcon />
        </ListItemIcon>
        <Typography className={classes.typography} variant="h5"> Sfide!</Typography>
     </ListItem>
    </NavLink>
    <NavLink activeClassName="main-nav-active" className="main-nav" to="/user">
    <ListItem button className="principalButton">
      <ListItemIcon>
      <AccountCircleIcon />
        </ListItemIcon>
        <Typography variant="h5">Profilo</Typography>
    </ListItem></NavLink>
    <NavLink activeClassName="main-nav-active" className="main-nav" to="/friends_activity">
    <ListItem button className="principalButton">
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <Typography variant="h5">...</Typography>
    </ListItem></NavLink>
    <Divider />
    <NavLink activeClassName="main-nav-active" className="main-nav" to="/">
    <ListItem button className="principalButton">
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <Typography variant="h5"> start</Typography>
    </ListItem></NavLink>
  </div>
);
