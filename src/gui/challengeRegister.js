import { confirmAlert } from 'react-confirm-alert'; // Import

import {showSuccessSnackbar,showErrorSnackbar} from '../common/snackbarActions'
import { useDispatch } from 'react-redux';


function postTheChallenge(newChallenge,onSuccess){



          let details = {
              'imagelink':newChallenge.imageViewURL,
              'videolink':newChallenge.videolink,
              'description':newChallenge.description,
              'score':newChallenge.score
          };


          console.log('details::::::::')
          console.log(details)

          let formBody = [];
          for (let property in details)
              if(details[property]!==null) {
                  let encodedKey = encodeURIComponent(property);
                  let encodedValue = encodeURIComponent(details[property]);
                  formBody.push(encodedKey + "=" + encodedValue);
              }
          formBody = formBody.join("&");

        // Simple POST request with a JSON body using fetch
          const requestOptions = {
              method: "POST",
              headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
              body: formBody,
              credentials: 'include'
          };

          console.log(formBody)

          fetch(process.env.REACT_APP_API +process.env.REACT_APP_API_v + 'challenges/'+newChallenge.id,requestOptions)
          .then(response =>{
              if (!response.ok) { throw response }
              console.log(response.body)
              onSuccess('sfida caricata con successo');//we only get here if there is no error
                  })
          .catch( err => {
                  alert(err.status)
              if(err.status===401)
                  alert("Attenzione: Username o password sbagliati")
                          })
}


function updateTheChallenge(newChallenge,onSuccess){


          let details = {
              'imagelink':newChallenge.imageViewURL,
              'videolink':newChallenge.videolink,
              'description':newChallenge.description,
          };

          let formBody = [];
          for (let property in details) {
            if(details[property]!==null){
              let encodedKey = encodeURIComponent(property);
              let encodedValue = encodeURIComponent(details[property]);
              formBody.push(encodedKey + "=" + encodedValue);
            }
          }
          formBody = formBody.join("&");

        // Simple POST request with a JSON body using fetch
          const requestOptions = {
              method: "POST",
              headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
              body: formBody,
              credentials: 'include'
          };
          fetch(process.env.REACT_APP_API +process.env.REACT_APP_API_v + 'challenges/update/'+newChallenge.id,requestOptions)
          .then(response =>{
              if (!response.ok) { throw response }
              console.log(response.body)
              onSuccess('sfida aggiornata con successo');//we only get here if there is no error
                  })
          .catch( err => {
                  console.log(err.status)
              if(err.status===401)
                  alert("Attenzione: Username o password sbagliati")
                          })
}

export default function challengeRegister(newChallenge,oldChallenge,score,onSuccess){
            var ok;
            var imagesOnlyLinks=[];
            console.log('Primopassaggio')
            console.log(newChallenge)
            if(newChallenge.imageViewURL.lenght>0 )newChallenge.imageViewURL.map(imageL => imagesOnlyLinks.push(imageL.data.url));
            newChallenge.imageViewURL=imagesOnlyLinks
            console.log(imagesOnlyLinks)
          /* const options = {
                title: 'Title',
                message: 'Message',
                buttons: [
                  {
                    label: 'Yes',
                    onClick: () => postTheChallenge(id,imagelink,videolink,description,onSuccess)
                  },
                  {
                    label: 'No',
                    onClick: () => window.location.reload
                  }
                ],
                closeOnEscape: true,
                closeOnClickOutside: true,
                willUnmount: () => {},
                afterClose: () => {},
                onClickOutside: () => {},
                onKeypressEscape: () => {}
              };
              confirmAlert(options);*/
              var finalScore=0;

              finalScore= parseInt(score);

              var add = 5;

              if ( newChallenge.videolink!== "" && newChallenge.videolink!== null){
                    finalScore=finalScore+add;
                }

              if(newChallenge.imageViewURL==="")newChallenge.imageViewURL=null;

              console.log('-------------------------')
              console.log(newChallenge)

              if(oldChallenge.isComplete)
                    updateTheChallenge(newChallenge, onSuccess)
              else
                    postTheChallenge(newChallenge,onSuccess);
}