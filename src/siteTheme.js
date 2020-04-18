import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

export default createMuiTheme({
  palette: {
    primary: green,
    secondary: {
      main: '#f44336',
    },
    background:{
        paper:'#E6D4C3',
     //   default: '#CDB992'
        default: '#FFFCED'
    }
  },
});

console.log('eseguito siteTheme.js')