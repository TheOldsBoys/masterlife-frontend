import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';

export default createMuiTheme({
  palette: {
    primary: green,
    info: yellow,
    secondary: {
      main:yellow[500],
    },
    background:{
        paper:'#E0EBFF',
     //   default: '#CDB992'
        default: '#FFFCED'
    }
  },
});

console.log('eseguito siteTheme.js')