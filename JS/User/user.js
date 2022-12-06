async function registrarme() {
    $("#spinnerGeneral").show();
    var server = getServer()
    try {
        var responseRecaptcha = grecaptcha.getResponse();
        if (responseRecaptcha.length > 0) {
            nombreCompleto = document.getElementById("username").value;
            emailUser = document.getElementById("email").value;
            contraUser = document.getElementById("password").value
            if (nombreCompleto != "") {
                if (emailUser != "") {
                    if (contraUser != "") {
                        if (document.getElementById("terms-conditions").checked) {
                            try {
                                let url = apiServer + "usuario/crear";
                                console.log("url");
                                console.log(url);
                                console.log("2:" + server.REMOTE_ADDR);
                                let bodyString = JSON.stringify({
                                    email: emailUser.trim(),
                                    passwordUser: contraUser,
                                    nombreUsuario: nombreCompleto.toLowerCase(),
                                    fkIdRol: 4,
                                    ipPc: server.REMOTE_ADDR
                                });

                                await fetch(url, {
                                    method: 'POST',
                                    body: bodyString,
                                    headers: {
                                        'Content-type': 'application/json; charset=UTF-8',
                                        'Access-Control-Allow-Origin': '*'
                                    },
                                })
                                    .then((response) => response.json())
                                    .then(function (respuesta) {
                                        console.log("Respuesta:", respuesta)
                                        if (respuesta === 0) {
                                            let url = apiServer+"CRUD/listar?tabla=usuario&filtro=email='"+emailUser.trim()+"'&campos=count(idusuario)"
                                            console.log(url)
                                            fetch(url)
                                                .then(response => response.json())
                                                .then(respuesta => {
                                                   respuesta.forEach(element=>{
                                                    let r = element[0]
                                                    console.log(r);
                                                    let r2 = r.split(":")
                                                    console.log(r2)
                                                    if (parseInt(r2[1]) === 1) {
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
                                            enviarEMail(emailUser.trim(), respuesta);
                                            $("#spinnerGeneral").hide();

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
                            $("#modalGeneral #modalMensaje").html("Aceptar Terminos y condiciones");
                            $("#modalGeneral").modal("show");
                        }
                    } else {
                        $("#spinnerGeneral").hide();
                        $("#modalGeneral #modalCenterTitle").html("Error");
                        $("#modalGeneral #modalMensaje").html("Ingrese una contraseña");
                        $("#modalGeneral").modal("show");
                    }
                } else {
                    $("#spinnerGeneral").hide();
                    $("#modalGeneral #modalCenterTitle").html("Error");
                    $("#modalGeneral #modalMensaje").html("Ingrese un email");
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
            $("#modalGeneral #modalMensaje").html("Por favor verifique que no eres un robot");
            $("#modalGeneral").modal("show");
        }


    } catch (error) {
        notificacion(error)
    }
}
function mensajeVerificacionUsuario() {
    const nombreUsuario = window.location.search;
    const urlParams = new URLSearchParams(nombreUsuario);
    let usuario = urlParams.get("email");
    document.getElementById("emailUserRegister").innerHTML = usuario;
}
function enviarEMail(email, idUser) {
    console.log("Enviar email")
    let url = apiServer + "email/verificacion?userEmail=" + email + "&idUsuario=" + idUser + "";
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(respuesta => {
            if (respuesta === true) {
                location.href = "auth-verify-email-basic-message.html?email=" + emailUser.trim() + "&idUsuario=" + respuesta;
            } else {
                notificacion("Error envio email de verificacion del usuario ", email)
                $("#spinnerGeneral").hide();
                $("#modalGeneral #modalCenterTitle").html("Error");
                $("#modalGeneral #modalMensaje").html("Se nos rompio la cadena, intenta de nuevo mas tarde");
                $("#modalGeneral").modal("show");
            }
        })

}



async function validarCuenta() {
    $("#spinnerGeneral").show();
    const emailUsuario = window.location.search;
    const urlParams = new URLSearchParams(emailUsuario);
    let userId = urlParams.get("usuarioVerificado");
    let url = apiServer + "usuario/verificar?idUsuario=" + userId + "";
    console.log(url);
    try {
        await fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
                idusuario: userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((respuesta) => {
                if (respuesta === 1) {
                    $("#spinnerGeneral").hide();
                    $("#modalGeneral #modalCenterTitle").html("Gracias");
                    $("#modalGeneral #modalMensaje").html("Tu cuenta a sido verificada");
                    // $("#modalGeneral").modal("show");
                    loginNoPass();
                } else {
                    // $("#spinnerGeneral").hide();
                    // $("#modalGeneral #modalCenterTitle").html("Error");
                    // $("#modalGeneral #modalMensaje").html("Tu cuenta no ha sido verificada");
                    // $("#modalGeneral").modal("show");
                }
            });
    } catch (e) {
        console.log(e);
    }
}




//Login and Logout
async function login() {
    $("#spinnerGeneral").show();
    try {
        let emailUser = document.getElementById("emailLogin").value;
        let contraUser = document.getElementById("passwordLogin").value;
        let url = apiServer + "usuario/login?usuario=" + emailUser + "&contra=" + contraUser + ""
        console.log(emailUser);
        console.log(contraUser);
        console.log(url);
        await fetch(url)
            .then(response => response.json())
            .then(respuesta => {
                if (respuesta.length === 0) {
                    $("#spinnerGeneral").hide();
                    $("#modalGeneral #modalCenterTitle").html("Error");
                    $("#modalGeneral #modalMensaje").html("Usuario o contraseña incorrecta");
                    $("#modalGeneral").modal("show");
                } else {
                    respuesta.forEach(idUser => {
                        let userLogin = idUser[0];
                        let idLogin = userLogin.split(":");
                        let userVerificacion = idUser[1];
                        let stateVerification = userVerificacion.split(":");
                        if (Boolean(stateVerification[1]) === true) {
                            $("#spinnerGeneral").hide();
                            loginNoPass(parseInt(idLogin[1]))
                            location.href = "auth-perfil.html";
                        } else {
                            $("#spinnerGeneral").hide();
                            $("#modalGeneral #modalCenterTitle").html("Error");
                            $("#modalGeneral #modalMensaje").html("El usuario no esta verificado");
                            $("#modalGeneral").modal("show");
                        }
                    });
                }
            })
            .catch((error) => {
                console.log('Error: ', error)
            })
    } catch (e) {
        console.log(e);
    }
}
async function loginNoPass(idusuario) {
    sessionStorage.clear();
    sessionStorage.setItem('login', idusuario);
}
function logout() {
    try {
        sessionStorage.clear();
        location.href = "auth-login-basic.html";
    } catch (e) {
        console.log(e);
    }
}




async function verificarUsuario(email, nombreUsuario) {
    try {
        let url = apiServer + "email/verificacion?userEmail=" + email + "";
        await fetch(url)
            .then(response => response.json())
            .then(respuesta => {
                setTimeout(10);
                location.href = "auth-verify-email-basic-message.html?usuario=" + nombreUsuario.toString() + "";
            })
    } catch (e) {

    }
}
async function perfilar() {
    $("#spinnerGeneral").show();
    try {
        let idUsuario = parseInt(window.sessionStorage.getItem("login"));
        let sexo;
        if (document.getElementById("sexoMujer").checked === true) {
            sexo = document.getElementById("sexoMujer").value;
        } if (document.getElementById("sexoHombre").checked === true) {
            sexo = document.getElementById("sexoHombre").value;
        }
        let pesoActual = parseFloat(document.getElementById("pesoUsuario").value);
        let estatura = parseFloat(document.getElementById("estaturaUsuario").value);
        let pesoDeseado = document.getElementById("valor").innerText;
        console.log(pesoDeseado);
        let fechaNacimiento = document.getElementById("fechaNacimiento").value;
        let tipoDieta = parseInt(document.getElementById("tipoDietaUsuario").value);
        let tipoCuerpo = parseInt(document.getElementById("tipoCuerpoUsuario").value);

        let porque;
        if (document.getElementById("rendimiento").checked === true) {
            porque = parseInt(document.getElementById("rendimiento").value);
        }
        if (document.getElementById("salud").checked === true) {
            porque = parseInt(document.getElementById("salud").value);
        }
        if (document.getElementById("entretenimiento").checked === true) {
            porque = parseInt(document.getElementById("entretenimiento").value);
        }

        let nivel = document.getElementById("nivel").value;
        let escala = document.getElementById("escala").value;

        let potenciometro = false;
        let pulsometro = false;
        let cadenciometro = false;
        let velocimetro = false;
        if (document.getElementById("potenciometro").checked === true) {
            potenciometro = true;
        }
        if (document.getElementById("pulsometro").checked === true) {
            pulsometro = true;
        }
        if (document.getElementById("cadenciometro").checked === true) {
            cadenciometro = true;
        }
        if (document.getElementById("velocimetro").checked === true) {
            velocimetro = true;
        }

        let url = apiServer + "perfil/crear";
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                sexo: sexo.toString(),
                peso: pesoActual,
                estatura: estatura,
                pesoObjetivo: pesoDeseado,
                fechaNacimiento: fechaNacimiento.toString(),
                fkTipoDieta: tipoDieta,
                fkTipoCuerpo: tipoCuerpo,
                fkNivelDeportivo: nivel,
                fkEscalaDeportiva: escala,
                potenciometro: potenciometro,
                pulsometro: pulsometro,
                velocimetro: velocimetro,
                cadenciometro: cadenciometro,
                fkPorque: porque,
                fkUsuario: idUsuario
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((respuesta) => {
                console.log(respuesta);
                sessionStorage.getItem("perfil", respuesta);
                sessionStorage.setItem("sexoUser", sexo.toString());
                sessionStorage.setItem("fechaNacimiento", fechaNacimiento.toString());
                sessionStorage.setItem("estatura", estatura);
                sessionStorage.setItem("cuerpo", tipoCuerpo);
                sessionStorage.setItem("dieta", tipoDieta);
                sessionStorage.setItem("pesoActual", pesoActual);
                sessionStorage.setItem("pesoDeseado", pesoDeseado);
                sessionStorage.setItem("porqueHace", porque);
                sessionStorage.setItem("nivelDeportivo", nivel);
                sessionStorage.setItem("escalaDeportiva", escala);
                $("#spinnerGeneral").show();
                $("#modalGeneral #modalCenterTitle").html("Gracias");
                $("#modalGeneral #modalMensaje").html("Tu perfil ha sido registrado exitosamente");
                $("#modalGeneral").modal("show");
                location.href = "free-data.html";

            });
    } catch (e) {
        console.log(e);
    }
}


//Gestion de contraseña
async function enviarEmailResetPassword() {
    $("#spinnerGeneral").show();
    console.log("Funcion");

    let email = document.getElementById("emailResetPassword").value;
    let url = apiServer + "email/restablecerContrasena?userEmail=" + email;
    console.log(url);
    try {
        await fetch(url)
    } catch (e) {
        console.log("Error: " + e);
    }
}
async function resetPass() {
    console.log("Reset Password")
    $("#spinnerGeneral").show();
    try {
        let userId = 1;
        let newPassword = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirm-password").value;
        if (newPassword === confirmPassword) {
            await fetch(apiServer + "usuario/retrievePassword?newContra=" + newPassword + "&userId=" + userId,
                {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                .then(response => response.json())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
            $("#spinnerGeneral").hide();
            $("#spinnerGeneral").hide();
            $("#modalGeneral #modalCenterTitle").html("Gracias");
            $("#modalGeneral #modalMensaje").html("Tu contraseña ha sido actualizada");
            $("#modalGeneral").modal("show");
            setTimeout(1000);
            location.href = "auth-login-basic.html";
        }
    } catch (e) {
        console.log(e);
    }
}
async function changePassword() {
    $("#spinnerGeneral").show();
    try {
        let email = "lebab1990@gmail.com";
        let passwordCurrent = document.getElementById("currentPassword").value;
        let passwordNew = document.getElementById("newPassword").value;
        let passwordConfirm = document.getElementById("confirmPassword").value;
        if (passwordNew === passwordConfirm) {
            await fetch(apiServer + "usuario/changePassword?email=" + email + "&contraActual=" + passwordCurrent + "&newContra=" + passwordNew + "",
                {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                .then(response => response.json())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
            $("#spinnerGeneral").hide();
        }
    } catch (e) {
        console.log(e);
    }
}


//Funcion Modales Dashboard
async function saveSportsGoal() {
    try {
        console.log("Guardando Objetivo Deportivo");
    } catch (error) {
        console.log(error);
    }
}
async function updateWeight() {
    try {

    } catch (error) {
        console.log("Peso actualizado")
    }
}
