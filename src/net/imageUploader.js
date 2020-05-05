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
        let oldImages
        if(props.photos!==null)
                oldImages=props.photos.split(',')
        else 
                oldImages=false
         this.state = { pictures: [],
                        uploadedPhotos: [],
                        loading: 0,
                        loaded: false,
                        oldImages : oldImages, 
                        };
         this.onDrop = this.onDrop.bind(this);
         this.onUploading = props.onUploading;
         this.onUploaded = props.onUploaded;
        
    }


    onDrop(pictures, URLS) {
        console.log(pictures.length)
        if(pictures.length!==0){
            this.onUploading(true)
        }else{
            this.onUploading(false)
        }
        this.setState({
            pictures: pictures,
            uploadedPhotos: URLS,
        });
    }

    onUploadButtonClick(){
        if(this.state.pictures.length!==0){

            this.setState({
                loading: this.state.pictures.length
            });
            this.state.pictures.map((picture) => {
                const formData = new FormData()
                formData.append('image', picture)
                formData.append('key','a3a3b278f015f612cc2020c26cb2e19d')

                var options = {
                    method: "POST",
                    body: formData
                };
                fetch('https://api.imgbb.com/1/upload', options)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    let rest = this.state.loading-1;
                    console.log("Un'immagine in meno ne mancano " + rest)
                    let finishLoading=false;
                    if(rest===0)finishLoading=true
                    console.log('Ho finito di caricare?' + finishLoading)
                    this.setState({
                        loading: rest,
                        loaded: finishLoading,
                    });
                    this.onUploaded(data);
                    this.onUploading(rest)
                })
                .catch(error => {
                    console.error(error)
                })
            })
        }else{
            alert ('Nessuna immagine selezionata!')
        }
    }
 
    render() {
        var displayUploader="block";
        var displayViewer="none";
        if(this.state.loading || this.state.loaded || this.state.oldImages.length) displayUploader="none"
        if(this.state.oldImages.length) displayViewer="block"
        return (
            <div className="sweet-loading">
                <Box display={displayUploader}>
                        <ImageUploader
                            withIcon={true}
                            withPreview={true}
                            buttonText="Scegli un'immagine da caricare"
                            onChange={this.onDrop}
                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                            maxFileSize={5242880}
                        />
                        <Button                
                            onClick={() => this.onUploadButtonClick()}
                            autoFocus color="primary">
                                Carica le immagini
                            </Button>
                </Box>
                <Box display={displayViewer}>
                    Il cambio delle immagini non è ancora supportato!
                </Box>
                
                <ClipLoader
                    css={override}
                    size={70}
                    color={"#123abc"}
                    loading={this.state.loading!==0}
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