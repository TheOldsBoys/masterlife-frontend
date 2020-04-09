import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import { makeStyles } from '@material-ui/core/styles';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import '../listCss.scss'
import ChallengeDetails from './challengeDetails'

const classes = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      minWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
  }));

function renderChallengeListItem(entry, handleClickOpen){
 const ChallInfo =  "   ( lv."+ entry.lv+" - "+ entry.pt +"pt)"

 const Title =entry.Nome + ChallInfo

   if(entry.Nome !== "") return ( 
    
  <ListItem key={entry.ID} onClick={() => handleClickOpen(entry)}>
    <ListItemAvatar>
    <Avatar>
      <ImageIcon />
    </Avatar>
  </ListItemAvatar>
  <ListItemText primary={Title} secondary={entry.Descr.substring(0,100)+ '...'} />
  <Divider orientation="vertical" flexItem />   
  
</ListItem>
    )
}


export default function ChallengeList({data}){

const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(data[2]);

  const handleClickOpen = (l) => {
    setOpen(true);
    setSelectedValue(l);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const renderedList = data.map(l => renderChallengeListItem(l,handleClickOpen))

    return(
        <List className={classes.root}>
       {renderedList}
       <ChallengeDetails open={open} onClose={handleClose} selectedValue={selectedValue} />
              </List>
    )
}