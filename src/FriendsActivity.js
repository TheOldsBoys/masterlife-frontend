import React from 'react';
import Button from '@material-ui/core/Button';
import { Typography, Paper } from '@material-ui/core';
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
export default class FriendsActivity extends React.Component{
  render(){
    return(
      
      <div>
        <Paper>
        <Typography variant="h6"> In costruzione... </Typography>
        </Paper>
      </div>
    )
  }
}