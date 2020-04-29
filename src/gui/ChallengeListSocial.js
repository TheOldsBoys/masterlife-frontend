import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ImageIcon from '@material-ui/icons/Image';
import { makeStyles } from '@material-ui/core/styles';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Divider from '@material-ui/core/Divider';
import '../listCss.scss'
import ChallengeDetailsView from './challengeDetailsView'
import CheckIcon from '@material-ui/icons/Check';
import { Paper } from '@material-ui/core';

const classes = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      minWidth: '36ch',
//      backgroundColor: theme.palette.background.paper,
    },
  }));

function renderChallengeListItem(entry, handleClickOpen){
 const ChallInfo =  "   (" + entry.level + ") by Gabbopeace";
  const completed = (compl) => {
    if(compl !== null)
    return(<CheckIcon/>)
  }
 const Title =entry.name + ChallInfo

   if(entry.name !== "") return (  
    <ListItem key={entry.id} onClick={() => handleClickOpen(entry)}>
      <ListItemAvatar>
        <ImageIcon color="primary"/>
      </ListItemAvatar>
      <ListItemText primary={Title} secondary={entry.description.substring(0,100)+ '...'} />
    </ListItem>
    )
}


export default function ChallengeList({data}){

const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState([]);

  const handleClickOpen = (l) => {
    setOpen(true);
    setSelectedValue(l);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const renderedList = data.map(l => renderChallengeListItem(l,handleClickOpen))

  return(
  <Paper>
    <List className={classes.root}>
      {renderedList}
      <ChallengeDetailsView open={open} onClose={handleClose} selectedValue={selectedValue} />
    </List>
  </Paper>
  )
}