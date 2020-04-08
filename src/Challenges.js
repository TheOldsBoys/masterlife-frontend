import React from 'react';
import ChallengeList from './gui/ChallengeList.js'
import data from './sfide.json'

export default class Challenges extends React.Component {
    render(){
       
        return(
            <div>
              {ChallengeList(data)}
            </div>
        )
        
    }
}