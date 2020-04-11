import users from './utenti.json'

export default function isAuth(){
    if(localStorage.getItem('auth'))
    return true;
}

/*function checkDB(u,username){
    alert('sonoqui' + u.username); if(u.username === username) return true
}*/

export function auth(username, pw){
var exist = false;
    exist = users.map(u =>true)

    localStorage.setItem('auth', exist);
}