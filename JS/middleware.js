function validateLogin() {
    console.log(localStorage.getItem('nombreusuario'));
    var nombreusuariologeado = localStorage.getItem('nombreusuario');
    window.onload = async () => {
        document.getElementById("nombreUsusarioNavbar").innerText = "Que empanada";
    };
    // if(sessionStorage.getItem('login')){
    //   //window.location.href = "dashboard.html"
    //   console.log("usuario logueado");
    // }else{
    //     window.location.href = "auth-login-basic.html"
    // }

}
validateLogin();


