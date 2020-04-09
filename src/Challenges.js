import React from 'react';
import ChallengeList from './gui/ChallengeList.js'
import data from './sfide.json'

import { makeStyles } from '@material-ui/core/styles';

export default class Challenges extends React.Component {
    
    render(){
        return(
            <div className="listChallenges main-container" >
                <h1>Le sfide ....</h1>
              <ChallengeList  data={data}/>
            </div>
        )
        
    }
}