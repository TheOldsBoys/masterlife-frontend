import axios from 'axios'
import users from './utenti.json'

export default function isAuth(){
    if(localStorage.getItem('auth')==='true')
    return true;
else
    window.location.href='/login';
}

function checkDB(u) {if(u.username.toLowerCase() === this.user.toLowerCase() && u.pw===this.password) return true}

    export function auth(username, pw){
    let exist = false;

    let details = {
        'username': username,
        'password': pw
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
        body: formBody
    };
    fetch('http://localhost:8080/login',requestOptions)
        .then(response => {
            if (response.ok === true ){alert ('ok')}
            localStorage.setItem('auth', response.ok);
            window.location.href='/';})
    
    }