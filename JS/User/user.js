let hosting = "https://localhost:7155"
async function registrarme() {
    try {
        nombreCompleto = document.getElementById("username").value;
        emailUser = document.getElementById("email").value;
        contraUser = document.getElementById("password").value
        if (nombreCompleto != "") {
            if (emailUser != "") {
                if (contraUser != "") {
                    if (document.getElementById("terms-conditions").checked) {
                        try {
                            let url = hosting + "/usuario/crear";
                            await fetch(url, {
                                method: 'POST',
                                body: JSON.stringify({
                                    email: emailUser.trim(),
                                    passwordUser: contraUser,
                                    nombreUsuario: nombreCompleto.toLowerCase(),
                                    fkIdRol: 4,
                                    ipPc: "00.00.00.00",
                                }),
                                headers: {
                                    'Content-type': 'application/json; charset=UTF-8',
                                },
                            })
                                .then((response) => response.json())
                                .then((respuesta) =>
                                    verificarUsuario(emailUser, nombreCompleto),
                                    alert("Usuario registrado exitosamente"),

                                )
                        } catch (e) {
                            alert(e, "Error en la peticion a la API-REST");
                        }

                    } else {
                        alert("Aceptar Terminos y Condiciones");
                    }
                } else {
                    alert("Ingrese una contraseña");
                }
            } else {
                alert("Ingrese un email de verificacion");
            }
        } else {
            alert("Ingrese el nombre de usuario");
        }

    } catch (error) {
        console.log(error);
    }
}
function mensajeVerificacionUsuario() {
    const nombreUsuario = window.location.search;
    const urlParams = new URLSearchParams(nombreUsuario);
    let nombre = urlParams.get("usuario");
    let mensaje = " Hola " + nombre.toString().toUpperCase() + ", hemos enviado un mensaje a tu email para confirmar tu cuenta de ELSA."
    document.getElementById("mensajeVerificacion").innerHTML = mensaje;
}
async function verificarUsuario(email, nombreUsuario) {
    try {
        let url = "https://localhost:7155/email/verificacion?userEmail=" + email + "";
        await fetch(url)
            .then(response => response.json())
            .then(respuesta => {
                setTimeout(100);
                location.href = "auth-verify-email-basic-message.html?usuario=" + nombreUsuario.toString() + "";
            })
    } catch (e) {

    }
}
async function validarCuenta() {
    try {
        const emailUsuario = window.location.search;
        const urlParams = new URLSearchParams(emailUsuario);
        let emailValidado = urlParams.get("emailVerificado");
        let url ="https://localhost:7155/usuario/verificar?correoElectronico="+emailValidado+"";
        // let url = "https://localhost:7155/usuario/verificar";
        fetch(url, {
            method: 'PATCH',
            // body: JSON.stringify({
            //     email: emailValidado,
            // }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                alert("Cuenta verificada");
                // location.href = "auth-perfil.html?emailUser=" + emailValidado.toString() + "";
            });
    } catch (e) {
        console.log(e);
    }
}
async function idUsuario() {
    try {
        const emailUsuario = window.location.search;
        const urlParams = new URLSearchParams(emailUsuario);
        let emailUser = urlParams.get("emailUser");
        let url = "https://localhost:7155/usuario/idUser?email=" + emailUser + ""
        await fetch(url)
            .then(response => response.json())
            .then(respuesta => {
                respuesta.forEach( usuario => {
                    idUser = usuario.idUsuario;
                });
                perfilar(parseInt(idUser));
            });

    } catch (e) {
        console.log(e);
    }
}
async function perfilar(idUser) {
    try {
        let sexo;
        if (document.getElementById("sexoMujer").checked === true) {
            sexo = document.getElementById("sexoMujer").value;
        } if (document.getElementById("sexoHombre").checked === true) {
            sexo = document.getElementById("sexoHombre").value;
        }
        let pesoActual = parseFloat(document.getElementById("pesoUsuario").value);
        let estatura = parseFloat(document.getElementById("estaturaUsuario").value);
        let pesoDeseado = parseFloat(document.getElementById("valor").innerText);
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

        let url = "https://localhost:7155/perfil/crear";
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
                fkUsuario: idUser
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                alert("Perfilamiento exitoso"),
                location.href = "free-data.html";

            });
    } catch (e) {
        console.log(e);
    }
}
async function login(){
    try {
        let emailUser = document.getElementById("emailLogin").value;
        let contraUser = document.getElementById("passwordLogin").value;
        console.log(emailUser);
        console.log(contraUser);
    } catch (e) {
        console.log(e);
    }
}