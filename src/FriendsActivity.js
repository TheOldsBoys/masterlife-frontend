import React from 'react';
import Button from '@material-ui/core/Button';


export default class FriendsActivity extends React.Component{
    render(){
        return(
            <div>
                    <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Carica il video
        </Button>
      </label>
            </div>
        )
    }
}