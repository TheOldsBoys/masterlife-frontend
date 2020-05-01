import { confirmAlert } from 'react-confirm-alert'; // Import

function postTheChallenge(id,imagelink,videolink,description,score,onSuccess){
          let details = {
              'imagelink':imagelink,
              'videolink':videolink,
              'description':description,
              'score':score
          };

          let formBody = [];
          for (let property in details) {
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
          fetch(process.env.REACT_APP_API +process.env.REACT_APP_API_v + 'challenges/'+id,requestOptions)
          .then(response =>{
              if (!response.ok) { throw response }
              alert('sfida caricata con successo');//we only get here if there is no error
              window.location.reload();
              console.log(response.body)
                  })
          .catch( err => {
                  console.log(err.status)
              if(err.status===401)
                  alert("Attenzione: Username o password sbagliati")
                          })
}


function updateTheChallenge(id,imagelink,videolink,description,onSuccess){
          let details = {
              'imagelink':imagelink,
              'videolink':videolink,
              'description':description,
          };

          let formBody = [];
          for (let property in details) {
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
          fetch(process.env.REACT_APP_API +process.env.REACT_APP_API_v + 'challenges/update/'+id,requestOptions)
          .then(response =>{
              if (!response.ok) { throw response }
              alert('sfida aggiornata con successo');//we only get here if there is no error
              window.location.reload();
              console.log(response.body)
                  })
          .catch( err => {
                  console.log(err.status)
              if(err.status===401)
                  alert("Attenzione: Username o password sbagliati")
                          })
}

export default function challengeRegister(isUpdating,id,imagelink,videolink,description,score,onSuccess){
            var ok;
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
              finalScore= score;
              var add = 5;
              if ( videolink!== ""){
                alert("Bravo che hai caricato un video!")
              }
              if(isUpdating)updateTheChallenge(id,imagelink,videolink,description,onSuccess)
              else
              postTheChallenge(id,imagelink,videolink,description,score,onSuccess);
}