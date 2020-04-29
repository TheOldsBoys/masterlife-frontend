import React from 'react';
import Button from '@material-ui/core/Button';
import { Typography, Paper, Box } from '@material-ui/core';
import ChallengeListSocial from './gui/ChallengeListSocial'
import { spacing } from '@material-ui/system';
/*import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
 
// Somewhere in your code
const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    this.setState({ userInfo });
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (f.e. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};
*/

const theme = {
  spacing: 8,
}

export default class FriendsActivity extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        listOfChall: [],
      };        
  }
componentDidMount() {
    const requestOptions = {
        method: "GET",
        credentials: 'include',
    };
    fetch(process.env.REACT_APP_API + process.env.REACT_APP_API_v + 'challenges',requestOptions)
    .then(data => data.json())
    .then(listOfC => {
    this.setState({
        listOfChall: listOfC,
      });
});
    
}
  render(){
    let data= this.state.listOfChall;
    return(
        <Paper >
            <Box p={2}>
                <Typography variant="h6"> Dai un'occhiata </Typography>
                <Typography variant="body1"> a cosa fanno gli altri giocatori! (in costruzione)</Typography>
           
            </Box>
        </Paper>
    )
  }
}

 // <ChallengeListSocial data={data}/>