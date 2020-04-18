import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

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
    maxwidth: '500px'
  },
  avatar: {
      width: '100%',
      height: '100%'
  }
}));
export default function AvatarList(onClickHandle) {
    const classes = useStyles();
  return (
<div className={classes.root}>
  <Card className={classes.card}>
      <CardHeader title='Scegli il tuo avatar' />
    <CardContent>
      <Grid container spacing={3}>
        <Grid item xs={6}  sm={4}>
          <Paper className={classes.paper}>
             <Avatar onClick={onClickHandle(0)} className={classes.avatar} alt="Natacha" src={process.env.PUBLIC_URL + '/avatars/png/avatar-0.png'} />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
             <Avatar onClick={onClickHandle(1)} className={classes.avatar} alt="Natacha" src={process.env.PUBLIC_URL + '/avatars/png/avatar-1.png'} />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
             <Avatar onClick={onClickHandle(2)} className={classes.avatar} alt="Natacha" src={process.env.PUBLIC_URL + '/avatars/png/avatar-2.png'} />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
             <Avatar onClick={onClickHandle(3)} className={classes.avatar} alt="Natacha" src={process.env.PUBLIC_URL + '/avatars/png/avatar-3.png'} />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
             <Avatar onClick={onClickHandle(4)} className={classes.avatar} alt="Natacha" src={process.env.PUBLIC_URL + '/avatars/png/avatar-4.png'} />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
             <Avatar onClick={onClickHandle(5)} className={classes.avatar} alt="Natacha" src={process.env.PUBLIC_URL + '/avatars/png/avatar-5.png'} />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
             <Avatar onClick={onClickHandle(6)} className={classes.avatar} alt="Natacha" src={process.env.PUBLIC_URL + '/avatars/png/avatar-6.png'} />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
             <Avatar onClick={onClickHandle(7)} className={classes.avatar} alt="Natacha" src={process.env.PUBLIC_URL + '/avatars/png/avatar-7.png'} />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
             <Avatar onClick={onClickHandle(8)} className={classes.avatar} alt="Natacha" src={process.env.PUBLIC_URL + '/avatars/png/avatar-8.png'} />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
             <Avatar onClick={onClickHandle(9)} className={classes.avatar} alt="Natacha" src={process.env.PUBLIC_URL + '/avatars/png/avatar-9.png'} />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
             <Avatar onClick={onClickHandle(10)} className={classes.avatar} alt="Natacha" src={process.env.PUBLIC_URL + '/avatars/png/avatar-10.png'} />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
             <Avatar onClick={onClickHandle(11)} className={classes.avatar} alt="Natacha" src={process.env.PUBLIC_URL + '/avatars/png/avatar-11.png'} />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
             <Avatar onClick={onClickHandle(12)} className={classes.avatar} alt="Natacha" src={process.env.PUBLIC_URL + '/avatars/png/avatar-12.png'} />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
             <Avatar onClick={onClickHandle(13)} className={classes.avatar} alt="Natacha" src={process.env.PUBLIC_URL + '/avatars/png/avatar-13.png'} />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
             <Avatar onClick={onClickHandle(14)} className={classes.avatar} alt="Natacha" src={process.env.PUBLIC_URL + '/avatars/png/avatar-14.png'} />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
             <Avatar onClick={onClickHandle(15)} className={classes.avatar} alt="Natacha" src={process.env.PUBLIC_URL + '/avatars/png/avatar-15.png'} />
          </Paper>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
</div>
  );
}
