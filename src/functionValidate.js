import validate from 'validate.js'

var constraints = {
    from: {
      email: true
    }
  };

export function isValidEmail(val,setEmailValidator){
    var errors = validate({from: val}, constraints) ;

    if(errors){
        console.log(errors)
        setEmailValidator(false)
    }
        else setEmailValidator(true);
    
}
export function isValidUsername(val){}
export function isValidPW(val){}

export function isValidLink(val,setLinkValidator){
    var errors = validate({website: val}, {website: {url: true}});

    if(errors){
        console.log(errors)
        return false
    }
        else return true;
    
}