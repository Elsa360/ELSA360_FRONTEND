function validateLogin(){
    if(localStorage.getItem('login')){
      //window.location.href = "dashboard.html"
      console.log("usuario logueado");
    }else{
        window.location.href = "auth-login-basic.html"
    }
}

if (window.location.href!='https://elsa360.com/html/vertical-menu-template/auth-login-basic.html') {
  validateLogin();
}
