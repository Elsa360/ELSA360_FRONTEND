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

async function verificarUsuario(email, nombreUsuario) {
    try {
        let url = "https://localhost:7155/email/verificacion?userEmail=" + email + "";
        await fetch(url)
            .then(response => response.json())
            .then(respuesta => {
                setTimeout(500);
                location.href = "auth-verify-email-basic.html?usuario=" + nombreUsuario.toString() + "";
            })
    } catch (e) {

    }
}

function mensajeVerificacionUsuario() {
    const nombreUsuario = window.location.search;
    const urlParams = new URLSearchParams(nombreUsuario);
    let nombre = urlParams.get("usuario");
    let mensaje = " Hola " + nombre.toString() + ", hemos enviado un mensaje a tu email para confirmar tu cuenta de ELSA."
    document.getElementById("mensajeVerificacionUsuario").innerHTML = mensaje;
}