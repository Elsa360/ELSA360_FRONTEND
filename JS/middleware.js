function validateLogin(){
    if(localStorage.getItem('login')){
      //window.location.href = "dashboard.html"
      $("#nombreUsusarioNavbar").html(localStorage.nombreUsuario);
      console.log("usuario logueado");
    }else{
        window.location.href = "auth-login-basic.html"
    }
}


// A $( document ).ready() block.
$( document ).ready(function() {
  validateLogin();

  initServer();

});
 
