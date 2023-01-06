function validateLogin(){
    if(localStorage.getItem('login')){
      //window.location.href = "dashboard.html"
      $("#nombreUsusarioNavbar").html(localStorage.nombreUsuario);
      console.log("usuario logueado");
    }else{
        window.location.href = "auth-login-basic.html"
    }
}


function loadavatar(){
  if ((localStorage.avataruri == undefined)||(localStorage.avataruri == "0")) {

  } else {
    $("#uploadedAvatar").attr("src",localStorage.avataruri);
    $("#NavbarAvatar").attr("src",localStorage.avataruri) ;
    $("#TooltipAvatar").attr("src",localStorage.avataruri) ;

  }
}



// A $( document ).ready() block.
$( document ).ready(function() {
  validateLogin();

  // initServer();  
  loadavatar();

});
