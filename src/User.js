import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import UserCard from './gui/UserCard'



export default class User extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
          };        
      }
    componentDidMount() {
        const requestOptions = {
            method: "GET",
            credentials: 'include',
        };
        fetch(process.env.REACT_APP_API + process.env.REACT_APP_API_v + 'user',requestOptions)
        .then(data => data.json())
        .then(userArr => {console.log('userone------------' + userArr.username)
        this.setState({
            userData: userArr,
          });
    });
        
    }
    render(){
       // alert(this.state.userData.username)
        let userObj= this.state.userData;
        return(
            <div>
               <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
       <UserCard data={userObj}/>
        
      </Container>
    </React.Fragment>
            </div>
        )
    }
}

