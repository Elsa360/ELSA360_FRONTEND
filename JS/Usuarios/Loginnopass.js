(async function LoginNoPass() {
    const urlperfilamiento = window.location.search;
    const urlParams = new URLSearchParams(urlperfilamiento);
    let idusuario = urlParams.get("usuarioVerificado");
    if (idusuario != null) {
        let url = apiServer + "usuario/loginnopass?usuario=" + idusuario + "";
        try {
            await fetch(url)
                .then(response => response.json())
                .then(respuesta => {
                    respuesta.forEach(elemento => {
                        console.log(elemento);
                        localStorage.setItem("login", idusuario);
                        localStorage.setItem("perfil", elemento.perfilamiento);
                        localStorage.setItem("membresia", elemento.membresia);
                    });
                    if (elemento.perfilamiento > 0) {
                        if (elemento.membresia != "No") {
                            location.href = "dashboard.html";
                        } else {
                            location.href = "pages-pricing.html"
                        }
                    } else {
                        location.href = "auth-perfil.html";
                    }
                });
        } catch (e) {
            notificacion("Error LoginnNoPass usuario ", idusuario);
            $("#spinnerGeneral").hide();
            $("#modalGeneral #modalCenterTitle").html("Error");
            $("#modalGeneral #modalMensaje").html("Se nos rompio la cadena, intentalo de nuevo mas tarde");
            $("#modalGeneral").modal("show");
        }
    } else {
        if (localStorage.getItem("login") != 0) {
            location.href = "auth-perfil.html";
        } else {
            location.href = "auth-login-basic.html";
        }

    }


})();