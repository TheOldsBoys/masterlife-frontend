import React from "react"
import ReactPlayer from "react-player"
import { Paper, Typography, Divider, List, ListItem } from "@material-ui/core"
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import defaultTheme from './siteTheme';
import FirstIcon from '@material-ui/icons/SportsHandball';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import section from './section.json'
 
const useStyles = makeStyles(() => ({
  paper: {
    marginTop: defaultTheme.spacing(4),
    padding: defaultTheme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default function MainPage() {
  
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <ReactPlayer
        url="https://youtu.be/g18is-vpVbo"
        width='100%'
      />
      <Typography variant='h5'>
        "... E quando la noia ti inquina i pensieri inventati un modo per venirne fuori...!"
      </Typography>
      <Divider/>
      <Typography>
        Il gioco è stato pensato per...
      </Typography>
      <Divider/>
      <Typography variant='h5'>
       -Come si gioca a MasterLife:
      </Typography>
      <Typography variant='body1'>
        Materlife è pensato per avere un'interfaccia molto semplice, con poche schermate:
      </Typography>
       <List>
          <ListItem><FirstIcon/>  Dove puoi trovare tutte le sfide e i passatempi da fare</ListItem>
          <ListItem><AccountCircleIcon/>  Il tuo profilo e le tue statistiche e le impostazioni</ListItem>
          <ListItem><SettingsIcon/>  (in costruzione) Pagina "social"</ListItem>
          <ListItem><HomeIcon/>  Questa pagina introduttiva </ListItem>
       </List>
      <Divider/>
      <Typography variant="h5">
        Le sezioni:
      </Typography>
        Ci sono 5 sezioni a cui può appartenere una sfida:
        <div>
          <ListItem><Typography variant="h6">{section.name[0]}</Typography> : {section.desc[0]}</ListItem>
          <ListItem><Typography variant="h6">{section.name[1]}</Typography> : {section.desc[1]}</ListItem>
          <ListItem><Typography variant="h6">{section.name[2]}</Typography> : {section.desc[2]}</ListItem>
          <ListItem><Typography variant="h6">{section.name[3]}</Typography> : {section.desc[3]}</ListItem>
          <ListItem><Typography variant="h6">{section.name[4]}</Typography> : {section.desc[4]}</ListItem>
        </div>
      

    </Paper>
  )
}