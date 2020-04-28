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
      <Typography variant="body2">
      Caro amico,
in questo periodo stiamo vivendo settimane strane e particolari...
siamo rimasti senza tutte le nostre certezze, le nostre abitudini, le nostre priorità...
tutto si è fermato e per una volta non lo abbiamo deciso noi.<br/>
I nostri piani e programmi scombussolati da qualcosa più in la di noi,
che ci fa essere per una volta tutti uguali, tutti con gli stessi limiti.<br/>
In questo momento sento ancora più forte il bisogno di avere accanto i miei amici, 
per comprendere ancora una volta che da solo non vado da nessuna parte, 
che ho bisogno di non chiudermi nel mio buco.<br/>
Ho bisogno di qualcuno che mi svegli, che come un campanellino mi ricordi di non stare comodo sul mio divano, 
nella mia camera, davanti al mio computer.. <br/>
e che mi aiuti a non far vincere la noia nemmeno in questi giorni!
<br/>
Non potendoci più trovare insieme, eccoci qua ad inventare nuovi modi per "..scacciar via la noia che inquina i pensieri..!", provare a tenerci vicino e continuare a fare comunque qualcosa di bello nelle nostre giornate...
cercare gesti che, anche se piccoli, possano far sorridere qualcun altro.
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
      <Divider/>
      <Typography variant="h5">
        Le sfide:
      </Typography>
      <Typography variant="h6">
        (come svolgerle bene)
      </Typography>
      <Typography variant="body1">
       Le sfide sono come piccole "idee" o passatempi per fare qualcosa di diverso dal solito.
       Il bello di svolgere ogni sfida sarà il momento della realizzazione, non il completarla.<br/><br/>
       Per ogni sfida c'è la possibilità di caricare una descrizione e il link a un video.
       Il video ora come ora deve essere caricato personalmente su youtube<br/>
       (il link è disponibile nella pagina di caricamento della sfida).<br/><br/>
      Presto sarà disponibile la pagina 'Social', in cui poter visualizzare le sfide fatte dagli altri utenti!  :-)
       <br/><br/>
       Consigli:
      </Typography>
      <div>
        <ListItem>La descrizione è importante, scrivi tutto quello che è successo,cerca il bello!</ListItem>
        <ListItem>Il video è un bene caricarlo ma non è fondamentale, tantomeno serve video da professionisti.</ListItem>
        <ListItem>Comincia dalle prove più semplici o che ti si addicono di più, l'importante è SVOLGERLE BENE!</ListItem>
      </div>
      <Typography variant="h3">HAPPY TIME!</Typography>
      <Divider/>
      <ListItem variant="body2">Per suggerimenti (anche proposte di nuove 'sfide') o necessità siamo disponibili: <br/>
      email: gabbopeace@gmail.com / 3517990492
      </ListItem>
      <Divider/>
    </Paper>
  )
}