import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import UserCard from './gui/UserCard'
import UserCompletedChallenges from './gui/UserCompletedChallenges'
import {Grid} from '@material-ui/core'

export default class User extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
            userChallenges: []
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
        })
        fetch(process.env.REACT_APP_API + process.env.REACT_APP_API_v + 'challenges',requestOptions)
        .then(data => data.json())
        .then(challenges => {
            let ch = challenges.filter((c)=>{return c.completed_at != null})
            this.setState({
                userChallenges: ch
            });
        })
    }
    render(){
       // alert(this.state.userData.username)
        let userObj= this.state.userData;
        return(
            <div>
                <React.Fragment>
                    <CssBaseline />
                    <Grid item xs={12}>
                        <Container maxWidth="sm">
                            <UserCard data={userObj}/> 
                        </Container>
                    </Grid>
                    <Grid item xs={12}>
                        <Container maxWidth="sm">
                            <UserCompletedChallenges challenges={this.state.userChallenges}/> 
                        </Container>
                    </Grid>
                </React.Fragment>
            </div>
        )
    }
}
