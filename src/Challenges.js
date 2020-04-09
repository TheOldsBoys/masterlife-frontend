import React from 'react';
import ChallengeList from './gui/ChallengeList.js'
import data from './sfide.json'

export default function Challenges() {
    const [disable, setDisable] = React.useState(true);
            var disabled = false;
        if(document.getElementById("root").offsetWidth<350)disabled=true
        return(
            
    <div id="mainView" className="listChallenges main-container" style={disabled ? {pointerEvents: "none", opacity: "0.4"} : {}}>
        
    <h1>Le sfide ....</h1>
    
  <ChallengeList data={data} />
            
           </div>
        )
        
    }