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
    var exist = false;

     // Simple POST request with a JSON body using fetch
     const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: {
            username: "gabbopeace",
            password: "gabbopeace" }
    };
    fetch('http://localhost:8080/login', requestOptions)
        .then(response => console.log(response))
     //   .then(text => alert(text));
    


   /* const UserFinded = users.find(checkDB,{user:username, password:pw})
        if (UserFinded !== undefined ){alert ('ok'); exist=true}
        localStorage.setItem('auth', exist);*/
      //  window.location.href='/';
    }