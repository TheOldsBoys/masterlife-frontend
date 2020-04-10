import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import {NavLink} from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './listCss.scss'

const styles = (theme) => ({
  root: {
    font:"inherit"
    },
  icon: {
    fontsize:40
  }
  }
);
export const mainListItems = (
  <div>
    
     
      
    <NavLink to="/all_challenges" activeClassName="main-nav-active" className="main-nav">
    <ListItem button className="principalButton">
      <ListItemIcon >
        <DashboardIcon />
        </ListItemIcon>
     Sfide!
     </ListItem>
    </NavLink>
    <NavLink activeClassName="main-nav-active" className="main-nav" to="/user">
    <ListItem button className="principalButton">
      <ListItemIcon>
      <AccountCircleIcon />
        </ListItemIcon>
      Profilo
    </ListItem></NavLink>
    <NavLink activeClassName="main-nav-active" className="main-nav" to="/friends_activity">
    <ListItem button className="principalButton">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
     ...
    </ListItem></NavLink>
  </div>
);
