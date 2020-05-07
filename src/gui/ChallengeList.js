import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ImageIcon from '@material-ui/icons/Image';
import { makeStyles } from '@material-ui/core/styles';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Divider from '@material-ui/core/Divider';
import '../styles/listCss.scss'
import ChallengeDetails from './challengeDetails'
import CheckIcon from '@material-ui/icons/Check';
import { Paper, Box, useMediaQuery } from '@material-ui/core';
import ChallengeDetailsView from './challengeDetailsView';
import theme from '../siteTheme';

const classes = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      minWidth: '80vw',
//      backgroundColor: theme.palette.background.paper,
    },
  }));

function renderChallengeListItem(entry, handleClickOpen){

 const ChallInfo =  "   ( " + entry.reward +"pt) : " + entry.level;
  const completed = (compl) => {
    if(compl !== null)
    return(<CheckIcon/>)
  }
 const Title =entry.name + ChallInfo

   if(entry.name !== "") return (  
     
    <ListItem key={entry.id} onClick={() => handleClickOpen(entry)}>
     <Box display={{xs:'none',sm:'none' , md:'block'}} clone>
        <ListItemAvatar >
          <ImageIcon color="primary"/>
        </ListItemAvatar>
      </Box>  
      <ListItemText primary={Title} secondary={entry.description.substring(0,100)+ '...'} />
      <Divider orientation="vertical" flexItem />   
      <ListItemSecondaryAction>{completed(entry.completed_at)}</ListItemSecondaryAction>
    </ListItem>
    )
}


export default function ChallengeList({data}){

  const [openView, setOpenView] = React.useState(false);
  const [openUpdate, setOpenUpdate] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState([]);
  const [updatingChall, setUpdatingChall] = React.useState(false);

  const handleClickOpen = (l) => {
    if(l.completed_at!==null)
    setOpenView(true)
    else
    setOpenUpdate(true)
    setSelectedValue(l);
  };
  const handleCloseView = () => {
    setOpenView(false);
  };
  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };

  const renderedList = data.map(l => renderChallengeListItem(l,handleClickOpen))

  function onUpdatingClick(){
    setUpdatingChall(true)
    setOpenUpdate(true)
    setOpenView(false);
    console.log('clickedUpdatingButton')
  }

  return(
  <Paper>
    <List className={classes.root}>
      {renderedList}
      <ChallengeDetails open={openUpdate} onClose={handleCloseUpdate} selectedValue={selectedValue} />
      <ChallengeDetailsView open={openView} 
      onClose={handleCloseView} 
      selectedValue={selectedValue} 
      onUpdatingClick={onUpdatingClick} />
    </List>
  </Paper>
  )
}