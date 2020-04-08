import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import { makeStyles } from '@material-ui/core/styles';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import '../listCss.scss'

const classes = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      minWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
  }));

function renderChallengeItem(entry){
 const challInfo = "lv."+ entry.lv+" ("+ entry.pt +"pt)"
 const challInfoButton= <ListItemText primary={challInfo} />
   if(entry.Nome !== "") return ( 
    
  <ListItem >
    <ListItemAvatar>
    <Avatar>
      <ImageIcon />
    </Avatar>
  </ListItemAvatar>
  <ListItemText primary={entry.Nome} secondary={entry.Descr} />
  <Divider orientation="vertical" flexItem />
</ListItem>
    )
}


export default function ChallengeList(lista){

const renderedList = lista.map(l => renderChallengeItem(l))
    return(
        <List className={classes.root}>
       {renderedList}
              </List>
    )
}