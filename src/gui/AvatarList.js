import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import defaultTheme from '../siteTheme'
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    height: '100px',
    width: '100px',
  },
  card: {
    maxwidth: '500px',
    maxHeight: '300px',
    overflowY: 'scroll'
  },
  avatar: {
      width: '100%',
      height: '100%'
  },
  selectedAvatar: {
    background: defaultTheme.palette.secondary.main,
  }
}));

function renderAvatarItem(i,s,classes,onClickHandle){
  if(s===true)s=0;
var sel = false;
 if (i===s)sel=true;
  return (
    <Grid key={i} item xs={6}  sm={4}>
          <Paper className={clsx(classes.paper, sel && classes.selectedAvatar) }>
             <Avatar  onClick={() => onClickHandle(i)} className={classes.avatar} alt="Il tuo avatar" src={process.env.PUBLIC_URL + '/avatars/png/avatar-' + i + '.png'} />
          </Paper>
        </Grid>
  )

}

export default function AvatarList({onClickHandle,selectedAvatar}) {
    const classes = useStyles();
    const iter = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const renderedAvatars = iter.map(i => renderAvatarItem(i,selectedAvatar,classes,onClickHandle))
  return (
<div className={classes.root}>
  <Card className={classes.card}>
    <CardContent>
      <Grid container spacing={3}>
        {renderedAvatars}
        
      </Grid>
    </CardContent>
  </Card>
</div>
  );
}
