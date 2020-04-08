import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import data from './utenti.json'
import UserCard from './gui/UserCard'



export default class User extends React.Component{

    render(){
        return(
            <div>
               <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
       {UserCard(data[0])}
        
      </Container>
    </React.Fragment>
            </div>
        )
    }
}

