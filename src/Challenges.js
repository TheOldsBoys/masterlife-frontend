import React from 'react';
import ChallengeList from './gui/ChallengeList.js'
import data from './sfide.json'
import { ThemeProvider, Typography } from '@material-ui/core';
import defaultTheme from './siteTheme'

export default class Challenges extends React.Component{
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
        console.log('--------------------------')
        console.log(this.state.listOfChall)
        console.log('--------------------------')
    return(     
    <ThemeProvider theme={defaultTheme}>   
        <div id="mainView" className="listChallenges main-container" style={false ? {pointerEvents: "none", opacity: "0.4"} : {}}>
        <Typography variant="h2">Le sfide ....</Typography>
            <ChallengeList data={data} />
        </div>
    </ThemeProvider>
    )
        
    }
}