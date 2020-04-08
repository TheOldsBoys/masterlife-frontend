import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import {Link} from 'react-router-dom'

export const mainListItems = (
  <div>
    <Link to="/all_challenges">
      <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      All challenges
    </ListItem></Link>
    <Link to="/user">
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      User
    </ListItem></Link>
    <Link to="/friends_activity">
      <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
     Friends Activity
    </ListItem></Link>
  </div>
);
