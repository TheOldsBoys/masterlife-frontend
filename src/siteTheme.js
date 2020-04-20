import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';
import 'normalize.css'
import { red } from '@material-ui/core/colors';

export default createMuiTheme({
  palette: {
    primary: 
      {
        light:'rgba(36,111,0,0.4)',
        main:'rgba(36,111,0,0.7)'

        },
    info: yellow,
    secondary:{
        main: red[500]
    },
    background:{
        paper:'rgba(176, 194, 161,0.83)',
     //   default: '#CDB992'
        default: 'rgba(0,0,0,1)',
    },
    text:{
      secondary: "rgba(30,30,30,0.8)"
    },
    divider:"rgba(0, 0, 0, 0.56)"
  },
  typography: {
    fontFamily: "'Karla','Helvetica','Arial','sans-serif'",
    fontSize: 20,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 800,
    body1:{
    lineHeight:1.4,
    },
    h5:{
      lineHeight:1.5
    },
    
    h2:{
      
      fontWeight: 500,
      fontWeightBold: 300,

    }
  }
});

 export const dashboardTheme = createMuiTheme({
    palette: {
      background: {
            paper:'rgba(85, 92, 89,0.7)',
      }
    },
    typography: {
      fontFamily: "'Raleway','Helvetica','Arial','sans-serif'",
      fontSize: 45,
      fontWeightLight: 500,
      fontWeightRegular: 700,
      fontWeightMedium: 800,
      fontWeightBold: 800,
      h5:{
      fontSize:25,
      fontWeight: 300,
      }
    }
});

console.log('eseguito siteTheme.js')