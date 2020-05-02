import React from 'react';
import ImageUploader from 'react-images-upload';
import PropTypes from 'prop-types';

import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import { Button, Box, Typography } from '@material-ui/core';
 
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
 
 
export default class ImageUpload extends React.Component {
 
    constructor(props) {
        super(props);
         this.state = { pictures: [],
                        uploadedPhotos: [],
                        loading: false,
                        loaded: false
                        };
         this.onDrop = this.onDrop.bind(this);
         this.onUploading = props.onUploading;
         this.onUploaded = props.onUploaded;
        
    }


    onDrop(picture,URLS) {
            this.setState({
                pictures: picture,
                uploadedPhotos: URLS,
            });
            
        console.log(URLS)
    }

    onUploadButtonClick(){
        if(this.state.pictures.length!==0){
            this.setState({
                loading: true
            });
                const formData = new FormData()
                formData.append('image', this.state.pictures[0])
                formData.append('key','a3a3b278f015f612cc2020c26cb2e19d')



                var options = {
                    method: "POST",
                    body: formData
                };

                fetch('https://api.imgbb.com/1/upload', options)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.setState({
                        loading: false,
                        loaded: true,
                    });
                    this.onUploaded(data);
                })
                .catch(error => {
                    console.error(error)
                })
            }else {alert ('Nessuna immagine selezionata!')}
    }
 
    render() {
        var display="block";
        if(this.state.loading || this.state.loaded)display="none"
        return (
            
            <div className="sweet-loading">
                <Box display={display}>
                        <ImageUploader
                            withIcon={true}
                            withPreview={true}
                            buttonText="Scegli un'immagine da caricare"
                            onChange={this.onDrop}
                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                            maxFileSize={5242880}
                            singleImage={true}


                        />
                        <Button   
                            
                            onClick={() => this.onUploadButtonClick()}
                            autoFocus color="primary">
                                Carica le immagini
                            </Button>
                </Box>
        <ClipLoader
        
          css={override}
          size={70}
          color={"#123abc"}
          loading={this.state.loading}
        />
        <SuccessUpload isVisible={this.state.loaded} />
      </div>
        );
    }
}

ImageUpload.propTypes = {
    onUploading: PropTypes.func.isRequired,
    onUploaded: PropTypes.func.isRequired,
  };
  

  function SuccessUpload({isVisible}){
    if(isVisible)return(
        <Typography color='secondary' align='center'>Immagine caricata correttamente!</Typography>
    )
    else
        return null;

  }