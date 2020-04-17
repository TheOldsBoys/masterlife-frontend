
export default function isAuth(){
    if(sessionStorage.getItem('auth')==='true' || sessionStorage.getItem('auth')==='true')
    return true;
else
    window.location.href='/login';
}

function setUpAuthSession(res){
    sessionStorage.setItem('auth', res.auth);
    sessionStorage.setItem('id', res.user.id);
    sessionStorage.setItem('username', res.user.username);
}

export function logoutSession(){
    sessionStorage.clear();
    window.location.href='/login'
}

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
        body: formBody,
        credentials: 'include'
    };
    fetch('https://api.masterlife.it/login',requestOptions)
    .then(response =>{
        if (!response.ok) { throw response }
        return response.json()  //we only get here if there is no error
            })
    .then(data => {
        if (data.auth === true ){console.log(data)}
        setUpAuthSession(data)
        window.location.href='/';
                    })
    .catch( err => {
            console.log(err.status)
        if(err.status===401)
            alert("Attenzione: Username o password sbagliati")
                    })
    
    }