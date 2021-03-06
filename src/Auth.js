export default function isAuth(){
    const requestOptions = {
        method: "GET",
        credentials: 'include',
    };
    fetch(process.env.REACT_APP_API + process.env.REACT_APP_API_v + 'user',requestOptions)
    .then(data => {
        if(!data.ok)window.location.href='/login'
        data.json()});   

       // if(!sessionStorage.getItem('auth'))window.location.href='/login';
}

function setUpAuthSession(res){
    sessionStorage.setItem('id', res.user.id);
    sessionStorage.setItem('username', res.user.username);
}

export function logoutSession(){
    sessionStorage.clear();
    localStorage.clear();
    const requestOptions = {
        method: "GET",
        credentials: 'include',
    };
    fetch(process.env.REACT_APP_API + 'logout',requestOptions)
    .then(window.location.href='/login')
    
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
    fetch(process.env.REACT_APP_API + 'login',requestOptions)
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
            console.log(err)
        if(err.status===401)
            alert("Attenzione: Username o password sbagliati")
                    })
    
    }

