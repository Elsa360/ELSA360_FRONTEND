function validateLogin(){
    if(sessionStorage.getItem('user')){
        window.location.href = "dashboard.html"
    }else{
        window.location.href = "auth-login-basic.html"
    }
}