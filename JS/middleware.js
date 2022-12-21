function validateLogin(){
    if(localStorage.getItem('login')){
      //window.location.href = "dashboard.html"
      console.log("usuario logueado");
    }else{
        window.location.href = "auth-login-basic.html"
    }
}
  validateLogin();
