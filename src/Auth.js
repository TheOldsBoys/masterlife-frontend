import users from './utenti.json'

export default function isAuth(){
    if(localStorage.getItem('auth')==='true')
    return true;
}

function checkDB(u) {if(u.username.toLowerCase() === this.user.toLowerCase() && u.pw===this.password) return true}

    export function auth(username, pw){
    var exist = false;
    const UserFinded = users.find(checkDB,{user:username, password:pw})
        if (UserFinded !== undefined ){alert ('ok'); exist=true}
        localStorage.setItem('auth', exist);
        window.location.href='/'
    }