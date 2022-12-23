async function registrarme() {
    $("#spinnerGeneral").show();
    try {
        var responseRecaptcha = grecaptcha.getResponse();
        if (responseRecaptcha.length == 0) {
            nombreCompleto = document.getElementById("username").value;
            emailUser = document.getElementById("email").value;
            contraUser = document.getElementById("password").value
            if (nombreCompleto != "") {
                if (emailUser != "") {
                    if (contraUser != "") {
                        if (document.getElementById("terms-conditions").checked) {
                            try {
                                let url = apiServer + "usuario/crear";
                                let bodyString = JSON.stringify({
                                    email: emailUser.trim().toLowerCase(),
                                    passwordUser: contraUser,
                                    nombreUsuario: nombreCompleto.toLowerCase(),
                                    fkIdRol: 4,
                                    ipPc: "00.00.00.00"
                                });

                                await fetch(url, {
                                    method: 'POST',
                                    body: bodyString,
                                    headers: {
                                        'Content-type': 'application/json; charset=UTF-8',
                                        'Access-Control-Allow-Origin': 'https://*elsa360.com'
                                    },
                                })
                                    .then((response) => response.json())
                                    .then(function (respuesta) {
                                        console.log("Respuesta:", respuesta)
                                        if (respuesta === 0) {
                                            let url = apiServer + "usuario/buscar?email=" + emailUser.trim().toLowerCase() + ""
                                            fetch(url)
                                                .then(response => response.json())
                                                .then(respuesta => {
                                                    respuesta.forEach(element => {
                                                        if (element === 1) {
                                                            $("#spinnerGeneral").hide();
                                                            $("#modalGeneral #modalCenterTitle").html("Usuario registrado");
                                                            $("#modalGeneral #modalMensaje").html("Ve a iniciar sesion");
                                                            $("#modalGeneral").modal("show");
                                                        } else {
                                                            notificacion(bodyString);
                                                            $("#spinnerGeneral").hide();
                                                        }
                                                    });
                                                });
                                        } else {
                                            console.log("Respuesta Exitosa");
                                            console.log("uri false");
                                            enviarEmail(emailUser.trim().toLowerCase(), respuesta);
                                        }
                                    })

                            } catch (e) {
                                $("#spinnerGeneral").hide();
                                $("#modalGeneral #modalCenterTitle").html("Error en la peticion a la API-REST");
                                $("#modalGeneral #modalMensaje").html(e);
                                $("#modalGeneral").modal("show");
                            }

                        } else {
                            $("#spinnerGeneral").hide();
                            $("#modalGeneral #modalCenterTitle").html("Error");
                            $("#modalGeneral #modalMensaje").html("Acepta nuestros Terminos y condiciones");
                            $("#modalGeneral").modal("show");
                        }
                    } else {
                        $("#spinnerGeneral").hide();
                        $("#modalGeneral #modalCenterTitle").html("Error");
                        $("#modalGeneral #modalMensaje").html("Ingresa una contraseña");
                        $("#modalGeneral").modal("show");
                    }
                } else {
                    $("#spinnerGeneral").hide();
                    $("#modalGeneral #modalCenterTitle").html("Error");
                    $("#modalGeneral #modalMensaje").html("Ingresa un email");
                    $("#modalGeneral").modal("show");
                }
            } else {
                $("#spinnerGeneral").hide();
                $("#modalGeneral #modalCenterTitle").html("Error");
                $("#modalGeneral #modalMensaje").html("Ingrese su  nombre");
                $("#modalGeneral").modal("show");
            }
        } else {
            $("#spinnerGeneral").hide();
            $("#modalGeneral #modalCenterTitle").html("Error");
            $("#modalGeneral #modalMensaje").html("Por favor verifica que no eres un robot");
            $("#modalGeneral").modal("show");
        }


    } catch (error) {
        notificacion(error)
    }
}
function enviarEmail(email, idUser) {
    let url = apiServer + "email/verificacion?userEmail=" + email + "&idUsuario=" + idUser;  
    fetch(url, {
           method: 'GET',
           headers: {
             'Access-Control-Allow-Origin': 'elsa360.com'
           }
         }).then(response => response.text())
         .then(respuesta => {
             if (respuesta === "TRUE") {
                 location.href = "/html/vertical-menu-template/auth-verify-email-basic-message.html?email=" + email.trim().toLowerCase() + "&idUsuario=" + idUser;
             } else {
                 notificacion("Error envio email de verificacion del usuario ", email)
                 $("#spinnerGeneral").hide();
                 $("#modalGeneral #modalCenterTitle").html("Error");
                 $("#modalGeneral #modalMensaje").html("Se nos rompio la cadena, intentalo de nuevo mas tarde");
                 $("#modalGeneral").modal("show");
             }
         })  
  }
