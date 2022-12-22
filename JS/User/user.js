async function registrarme() {
  $("#spinnerGeneral").show();
  var server = getServer();
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
                    'Access-Control-Allow-Origin': 'https://*elsa360.com'
                  },
                })
                .then((response) => response.json())
                .then(function (respuesta) {
                  console.log("Respuesta:", respuesta)
                  if (respuesta === 0) {
                    let url = apiServer + "CRUD/listar?tabla=usuario&filtro=email='" + emailUser.trim().toLowerCase() + "'&campos=count(idusuario)"
                    console.log(url)
                    fetch(url)
                    .then(response => response.json())
                    .then(respuesta => {
                      respuesta.forEach(element => {
                        let r2 = element;
                        console.log(r2)
                        if (r2 === 1) {
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
                    //si el registro tiene URI en la URL después del registro va a enviarlo a la URI
                    if (getUrlParameter('uri') === false) {
                      console.log("uri false");
                      enviarEMail(emailUser.trim(), respuesta);
                    }
                    else {
                      console.log("uri:" + getUriOnGet());
                      location.href = getUriOnGet() + "&idUsuario=" + respuesta;
                    }

                    //$("#spinnerGeneral").hide();

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

function mensajeVerificacionUsuario() {
  const nombreUsuario = window.location.search;
  const urlParams = new URLSearchParams(nombreUsuario);
  let usuario = urlParams.get("email");
  document.getElementById("emailUserRegister").innerHTML = usuario;
}
function enviarEMail(email, idUser) {
  console.log("Enviar email")
  let url = apiServer + "email/verificacion?userEmail=" + email + "&idUsuario=" + idUser;

  console.log(url);

  fetch(url, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': 'elsa360.com'
    }
  }).then(response => response.text())
  .then(respuesta => {
    console.log("==respuesta==");
    console.log(respuesta);
    console.log("==respuesta==");
    if (respuesta == "TRUE") {
      location.href = "/html/vertical-menu-template/auth-verify-email-basic-message.html?email=" + email.trim() + "&idUsuario=" + idUser;
    } else {
      notificacion("Error envio email de verificacion del usuario ", email)
      $("#spinnerGeneral").hide();
      $("#modalGeneral #modalCenterTitle").html("Error");
      $("#modalGeneral #modalMensaje").html("Se nos rompio la cadena, intentalo de nuevo mas tarde");
      $("#modalGeneral").modal("show");
    }
  })


}



async function validarCuenta() {
  //$("#spinnerGeneral").show();
  const emailUsuario = window.location.search;
  const urlParams = new URLSearchParams(emailUsuario);
  let userId = urlParams.get("usuarioVerificado");
  if (userId != null) {
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
          $("#modalGeneral #modalMensaje").html("Tu cuenta ha sido verificada");
          // $("#modalGeneral").modal("show");
          loginNoPass(userId);
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
}




//Login and Logout
async function login() {
  $("#spinnerGeneral").show();
  try {
    let emailUser = document.getElementById("emailLogin").value;
    let contraUser = document.getElementById("passwordLogin").value;
    let url = apiServer + "usuario/login?usuario=" + emailUser + "&contra=" + contraUser + ""
    // console.log(emailUser);
    // console.log(contraUser);
    // console.log(url);
    await fetch(url)
    .then(response => response.json())
    .then(respuesta => {
      if (respuesta.length == 0) {
        $("#spinnerGeneral").hide();
        $("#modalGeneral #modalCenterTitle").html("Error");
        $("#modalGeneral #modalMensaje").html("Usuario o contraseña incorrecta");
        $("#modalGeneral").modal("show");
      } else {
        respuesta.forEach(idUser => {
          let email = idUser.email;
          let estado = idUser.estado;
          let fechaActualizacion = idUser.fechaActualizacion;
          let fechaEliminacion = idUser.fechaEliminacion;
          let fechaRegistro = idUser.fechaRegistro;
          let fkIdRol = idUser.fkIdRol;
          let idUsuario = idUser.idUsuario;
          let ipPc = idUser.ipPc;
          let nombreUsuario = idUser.nombreUsuario;
          let passwordUser = idUser.passwordUser;
          let verificacion = idUser.verificacion;
          //let membresia = idUser.verificacion;
          idUsuario = idUser.idUsuario;

          //----

          //let userLogin = idUser;
          let idLogin = idUsuario;

          console.log("verificacion");
          console.log(verificacion);
          if (Boolean(verificacion) === true) {
            $("#spinnerGeneral").hide();
            console.log("Aqui");
            localStorage.setItem('validarusuario', true);
            console.log(localStorage);
            loginNoPass(parseInt(idLogin))
          } else {
            enviarEMail(email, idUsuario);
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
async function loginNoPass(idusuario, membresia, verificado) {

  // sessionStorage.clear();
  console.log("login nopass");
  let url = apiServer + "usuario/loginnopass?usuario=" + idusuario
  console.log(url)
  await fetch(url)
  .then(response => response.json())
  .then(respuesta => {
    console.log(respuesta[0]);
    localStorage.setItem('membresia', respuesta[0].membresia);
    localStorage.setItem('verificacion', respuesta[0].verificacion);
    localStorage.setItem('email', respuesta[0].email);
    localStorage.setItem('nombreUsuario', respuesta[0].nombreUsuario);
    localStorage.setItem('perfilamiento', respuesta[0].perfilamiento);


    sessionStorage.setItem('membresia', respuesta[0].membresia);
    sessionStorage.setItem('verificacion', respuesta[0].verificacion);
    sessionStorage.setItem('email', respuesta[0].email);
    sessionStorage.setItem('nombreUsuario', respuesta[0].nombreUsuario);
    sessionStorage.setItem('perfilamiento', respuesta[0].perfilamiento);



    if(window.location.hostname!="127.0.0.1"){
      console.log("127.0.0.1");
      uri = mainUrl + "_sesion.php?action=login&membresia=" + respuesta[0].membresia + "&verificado=" + respuesta[0].verificacion + "&idUsuario=" + idusuario;
      console.log("php sesion");
      console.log(uri);
      fetch(uri)
      .then(response => response.json())
      .then(respuesta => {
        console.log(respuesta) ;
        redirectuser();
      });
    }
    else
    {
      redirectuser();
    }

  });

  localStorage.setItem('login', idusuario);
  localStorage.setItem('idusuario', idusuario);




}


function redirectuser(){

  console.log(localStorage.verificacion);
  console.log(localStorage.perfilamiento);
  console.log(localStorage.membresia);

  if (localStorage.verificacion == false) {
    console.log("verificacion");
    enviarEMail(localStorage.email, localStorage.idUsuario);
  } else if (localStorage.perfilamiento == "0") {
    console.log("perfilamiento");
    location.href = "/html/vertical-menu-template/auth-perfil.html";
  } else if (localStorage.membresia != "ACTIVA") {
    console.log("PreciosPlanes");
    location.href = "pages-pricing.html";
  } else {
    console.log("dashboard");
    location.href = "/html/vertical-menu-template/dashboard.html";
  }

}

function logout() {
  sessionStorage.clear();
  localStorage.clear();
  location.href = "/logout.php";

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
async function buscarPerfil() {
  limpiarperfil();
  let usuario = localStorage.idusuario
  try {
    let url = apiServer + "perfil/usuario?idusuario=" + usuario + ""
    fetch(url)
    .then(response => response.json())
    .then(respuesta => {
      respuesta.forEach(perfil => {
        if (perfil.idPerfilUsuario > 0) {
          sessionStorage.setItem('perfil', perfil.idPerfilUsuario);
          location.href = "dashboard.html";
        }
        else{
          $("#spinnerGeneral").hide();
        }
      });
    });
  } catch (e) {
    console.log("Buscar_Perfil ", e)
  }
}
async function perfilar() {
  $("#spinnerGeneral").show();
  let idUsuario = localStorage.idusuario;
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


  localStorage.getItem("perfil", respuesta);
  localStorage.setItem("sexoUser", sexo.toString());
  localStorage.setItem("fechaNacimiento", fechaNacimiento.toString());
  localStorage.setItem("estatura", estatura);
  localStorage.setItem("cuerpo", tipoCuerpo);
  localStorage.setItem("dieta", tipoDieta);
  localStorage.setItem("pesoActual", pesoActual);
  localStorage.setItem("pesoDeseado", pesoDeseado);
  localStorage.setItem("porqueHace", porque);
  localStorage.setItem("nivelDeportivo", nivel);
  localStorage.setItem("escalaDeportiva", escala);

  localStorage.setItem("sexo",sexo);
  localStorage.setItem("statura",statura);
  localStorage.setItem("tipoDieta",tipoDieta);
  localStorage.setItem("tipoCuerpo",tipoCuerpo);
  localStorage.setItem("nivel",nivel);
  localStorage.setItem("scala",scala);
  localStorage.setItem("potenciometro",potenciometro);
  localStorage.setItem("pulsometro",pulsometro);
  localStorage.setItem("velocimetro",velocimetro);
  localStorage.setItem("cadenciometro",cadenciometro);
  localStorage.setItem("porque",porque);


  location.href = "free-data.html";
}

function limpiarperfil(){

    localStorage.getItem("perfil", respuesta);
    localStorage.setItem("sexoUser", sexo.toString());
    localStorage.setItem("fechaNacimiento", fechaNacimiento.toString());
    localStorage.setItem("estatura", estatura);
    localStorage.setItem("cuerpo", tipoCuerpo);
    localStorage.setItem("dieta", tipoDieta);
    localStorage.setItem("pesoActual", pesoActual);
    localStorage.setItem("pesoDeseado", pesoDeseado);
    localStorage.setItem("porqueHace", porque);
    localStorage.setItem("nivelDeportivo", nivel);
    localStorage.setItem("escalaDeportiva", escala);

    localStorage.setItem("sexo",sexo);
    localStorage.setItem("statura",statura);
    localStorage.setItem("tipoDieta",tipoDieta);
    localStorage.setItem("tipoCuerpo",tipoCuerpo);
    localStorage.setItem("nivel",nivel);
    localStorage.setItem("scala",scala);
    localStorage.setItem("potenciometro",potenciometro);
    localStorage.setItem("pulsometro",pulsometro);
    localStorage.setItem("velocimetro",velocimetro);
    localStorage.setItem("cadenciometro",cadenciometro);
    localStorage.setItem("porque",porque);
}

function guardarPerilUsuario(){
  let url = apiServer + "perfil/crear";
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      sexo: localStorage.sexo,
      peso: localStorage.pesoActual,
      estatura: localStorage.statura,
      pesoObjetivo: localStorage.pesoDeseado,
      fechaNacimiento: localStorage.fechaNacimiento,
      fkTipoDieta: localStorage.tipoDieta,
      fkTipoCuerpo: localStorage.tipoCuerpo,
      fkNivelDeportivo: localStorage.nivel,
      fkEscalaDeportiva: localStorage.scala,
      potenciometro: localStorage.potenciometro,
      pulsometro: localStorage.pulsometro,
      velocimetro: localStorage.velocimetro,
      cadenciometro: localStorage.cadenciometro,
      fkPorque: localStorage.porque,
      fkUsuario: localStorage.idUsuario,
      ippc: server.REMOTE_ADDR
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((respuesta) => {
    console.log(respuesta);
    location.href = "free-data.html";
  });
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
