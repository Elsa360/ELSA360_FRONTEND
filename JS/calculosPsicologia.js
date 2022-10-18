function traerRutinas() {
    try {

        //Imagen y mensaje de la rutina de estiramiento o ejercicio
        const valores = window.location.search;
        const urlParams = new URLSearchParams(valores);
        var tipoRutina = urlParams.get('rutina');
        var tipo = urlParams.get('tipo');
        console.log(tipoRutina)
        console.log(tipo)
        let img;
        let tituloRutina;
        let url = "";
        let nivel = 1;
        let escala = 1;
        let rutina = "fullbody";

        if (tipoRutina === 'fullbody' && tipo === 'estiramiento') {
            tituloRutina = "Estiramiento de cuerpo completo"
            img = 'FullBodyStretch';
        }
        if (tipoRutina === 'postentreno' && tipo === 'estiramiento') {
            tituloRutina = "Estiramiento para entrenar"
            img = 'stretchTrain';
        }
        if (tipoRutina === 'fullbody' && tipo === 'entrenamiento') {
            tituloRutina = "Rutina de cuerpo completo"
            img = 'fullbodyRoutine';
        }
        if (tipoRutina === 'treninferior' && tipo === 'entrenamiento') {
            tituloRutina = "Rutina para el tren inferior"
            img = 'lowerBody';
        }
        if (tipoRutina === 'trensuperior' && tipo === 'entrenamiento') {
            tituloRutina = "Rutina para el tren superior"
            img = 'upperBody';
        }
        if (tipoRutina === 'core' && tipo === 'entrenamiento') {
            tituloRutina = "Fortalecimiento de CORE"
            img = 'core';
        }
        if (tipo === 'estiramiento') {
            url = "https://localhost:7155/rutinaEstiramientoFisico/traer?nivel=" + nivel + "&rutina=" + tipoRutina + ""
        }
        if (tipo === 'entrenamiento') {
            url = "https://localhost:7155/rutinaEjercicioFisico/traer?nivel=" + nivel + "&escala=" + escala + "&rutina=" + tipoRutina + ""
        }
        document.getElementById("nombreRutina").innerText = tituloRutina;
        document.getElementById("imagenFondo").setAttribute("src", "../../assets/img/pages/" + img + ".jpg")

        //Traer datos de la DB
        fetch(url)
            .then(response => response.json()).
            then(ejercicios => {
                for (let i = 0; i < (Object.keys(ejercicios).length); i++) {
                    console.log(ejercicios[i]);
                    //Mensaje Inicial
                    let tituloMensaje = document.createElement("span");
                    tituloMensaje.innerText = "Preparate para iniciar";
                    tituloMensaje.className = "badge rounded-pill bg-label-success";
                    let h5Mensaje = document.createElement("h5");
                    h5Mensaje.className = "card-title mb-0";
                    h5Mensaje.appendChild(tituloMensaje);
                    let divTituloInicial = document.createElement("div");
                    divTituloInicial.className = "card-header d-flex justify-content-between align-items-center flex-wrap";
                    divTituloInicial.appendChild(h5Mensaje);


                    let MensajeInicial = document.createElement("p");
                    MensajeInicial.innerText = ejercicios[i].mensajeInicial;
                    MensajeInicial.className = "mb-2";
                    let divMensajeInicial = document.createElement("div");
                    divMensajeInicial.className = "card-body"
                    divMensajeInicial.appendChild(MensajeInicial);

                    let contendorMensajeInicial = document.createElement("div");
                    contendorMensajeInicial.className = "timeline-event card p-0";
                    contendorMensajeInicial.appendChild(divTituloInicial);
                    contendorMensajeInicial.appendChild(divMensajeInicial);

                    let liMensajeInicial = document.createElement("li");
                    liMensajeInicial.className = "timeline-item mb-md-4 mb-5";
                    liMensajeInicial.appendChild(contendorMensajeInicial);

                    //Mensaje Final
                    let tituloFinal = document.createElement("span");
                    tituloFinal.innerText = "Paso final";
                    tituloFinal.className = "badge rounded-pill bg-label-success";
                    let h5TituloFinal = document.createElement("h5");
                    h5TituloFinal.className = "card-header";
                    h5TituloFinal.appendChild(tituloFinal);

                    let mensajeFinal = document.createElement("p");
                    mensajeFinal.innerText = ejercicios[i].mensajeFinal;
                    mensajeFinal.className = "mb-2";
                    let contenedorMensajeFinal = document.createElement("div");
                    contenedorMensajeFinal.className = "card-body";
                    contenedorMensajeFinal.appendChild(mensajeFinal);

                    let contendorFinal = document.createElement("div");
                    contendorFinal.className = "timeline-event card p-0";
                    contendorFinal.appendChild(h5TituloFinal);
                    contendorFinal.appendChild(contenedorMensajeFinal);

                    let liContenedorMensajeFinal = document.createElement("li");
                    liContenedorMensajeFinal.className = "timeline-item mb-md-4 mb-5";
                    liContenedorMensajeFinal.appendChild(contendorFinal);

                    if (tipo === 'estiramiento') {
                        var nom = ejercicios[i].estiramiento
                        var descrip = ejercicios[i].descripcionEstiramiento
                    }
                    if (tipo === 'entrenamiento') {
                        var nom = ejercicios[i].nombreEjercicio
                        var descrip = ejercicios[i].descripcionEjercicio
                    }
                    //Tarjeta del Ejercicio
                    //Nombre Tarjeta
                    let nombre = document.createElement("span");
                    nombre.innerText = nom;
                    nombre.className = "badge rounded-pill bg-label-success";
                    let contenedorH5 = document.createElement("h5");
                    contenedorH5.className = "card-title mb-0";
                    contenedorH5.appendChild(nombre);
                    let contenedorNombre = document.createElement("div");
                    contenedorNombre.className = "card-header d-flex justify-content-between align-items-center flex-wrap";
                    contenedorNombre.appendChild(contenedorH5);

                    //Cuerpo Tarjeta
                    //Contenedor Video
                    let video = document.createElement("iframe");
                    video.width = "560";
                    video.height = "315";
                    video.src = "https://www.youtube.com/embed/iSSAk4XCsRA";
                    video.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";

                    let contenedorVideo = document.createElement("div");
                    contenedorVideo.className = "video-responsive";
                    contenedorVideo.appendChild(video);

                    //Contenedor Acordeon 
                    let buttonAcordeon = document.createElement("button");
                    buttonAcordeon.className = "accordion-button";
                    buttonAcordeon.style = "color: #9BCB3B;";
                    buttonAcordeon.setAttribute("data-bs-target", "#accordionOne");
                    buttonAcordeon.setAttribute("data-bs-toggle", "collapse");
                    buttonAcordeon.setAttribute("aria-expanded", "true")
                    buttonAcordeon.setAttribute("aria-controls", "accordionOne");
                    buttonAcordeon.innerText = "Descripción ejercicio";

                    let contendorButton = document.createElement("h2");
                    contendorButton.className = "accordion-header";
                    contendorButton.id = "headingOne";
                    contendorButton.appendChild(buttonAcordeon);

                    let descripcion = document.createElement("div");
                    descripcion.innerText = descrip;
                    descripcion.className = "accordion-body";
                    let contenedorDescripcion = document.createElement("div");
                    contenedorDescripcion.className = "accordion-collapse collapse";
                    contenedorDescripcion.id = "accordionOne";
                    contenedorDescripcion.appendChild(descripcion);

                    let contenedorBtnAcordeon = document.createElement("div");
                    contenedorBtnAcordeon.className = "card accordion-item mb-3";
                    contenedorBtnAcordeon.appendChild(contendorButton);
                    contenedorBtnAcordeon.appendChild(contenedorDescripcion);

                    //Contenedor Tabla
                    //Encabezado
                    let thSeries = document.createElement("th");
                    thSeries.innerText = "SERIES";
                    let thRepeticion = document.createElement("th");
                    thRepeticion.innerText = "REPETICIONES";
                    let thDescanso = document.createElement("th");
                    thDescanso.innerText = "RIR";
                    let filaEncabezado = document.createElement("tr");
                    filaEncabezado.appendChild(thSeries);
                    filaEncabezado.appendChild(thRepeticion);
                    filaEncabezado.appendChild(thDescanso);
                    let theadTabla = document.createElement("thead");
                    theadTabla.className = "table-light";
                    theadTabla.appendChild(filaEncabezado);

                    //Cuerpo
                    let tdSeries = document.createElement("td");
                    tdSeries.innerText = ejercicios[i].series;
                    let tdRepeticion = document.createElement("td");
                    tdRepeticion.innerText = ejercicios[i].repeticiones;
                    let tdRir = document.createElement("td");
                    tdRir.innerText = ejercicios[i].rir;
                    let filaCuerpo = document.createElement("tr");
                    filaCuerpo.appendChild(tdSeries);
                    filaCuerpo.appendChild(tdRepeticion);
                    filaCuerpo.appendChild(tdRir);
                    let bodyTabla = document.createElement("tbody");
                    bodyTabla.className = "table-border-bottom-0";
                    bodyTabla.appendChild(filaCuerpo);

                    //Agregar datos a la tabla
                    let tabla = document.createElement("table");
                    tabla.className = "table ta-sm text-center";
                    tabla.appendChild(theadTabla);
                    tabla.appendChild(bodyTabla);

                    let contendorTabla = document.createElement("div");
                    contendorTabla.className = "table-responsive text-nowrap";
                    contendorTabla.appendChild(tabla);

                    //Agregar datos contendor principal de la tabla
                    let contenedorPrincipalTabla = document.createElement("div");
                    contenedorPrincipalTabla.className = "card";
                    contenedorPrincipalTabla.appendChild(contendorTabla);

                    //Agregar contenedores al cuerpo de la tarjeta
                    let cuerpoTarjeta = document.createElement("div");
                    cuerpoTarjeta.className = "card-body";
                    cuerpoTarjeta.appendChild(contenedorVideo);
                    cuerpoTarjeta.appendChild(contenedorBtnAcordeon);
                    cuerpoTarjeta.appendChild(contenedorPrincipalTabla);


                    //Principal
                    let contenedorPrincipal = document.createElement("div")
                    contenedorPrincipal.className = "timeline-event card p-0";
                    contenedorPrincipal.appendChild(contenedorNombre);
                    contenedorPrincipal.appendChild(cuerpoTarjeta);

                    //Items
                    let ItemEjercicio = document.createElement("span")
                    ItemEjercicio.innerText = [i + 1];
                    ItemEjercicio.className = "timeline-indicator timeline-indicator-primary";

                    //Lista
                    let liEjercicio = document.createElement("li")
                    liEjercicio.appendChild(ItemEjercicio);
                    liEjercicio.appendChild(contenedorPrincipal);
                    liEjercicio.className = "timeline-item mb-md-4 mb-5";

                    //Item a la lista
                    let listado = document.getElementById("listado");
                    if (i === 0) {
                        listado.appendChild(liMensajeInicial);
                    }
                    listado.appendChild(liEjercicio);
                    if (i === (Object.keys(ejercicios).length) - 1) {
                        listado.appendChild(liContenedorMensajeFinal);
                    }
                };
            });
    } catch (e) {
        console.log(e);
    }
}

function calcularEdad(fecha) {
    try {
        const fechaNacimiento = fecha;
        //Datos Fecha Actual    
        const fechaActual = new Date();
        const anoActual = parseInt(fechaActual.getFullYear());
        const mesActual = parseInt(fechaActual.getMonth()) + 1;
        const diaActual = parseInt(fechaActual.getDate());
        //Datos Fecha Nacimiento
        const anoNacimiento = parseInt(String(fechaNacimiento).substring(0, 4));
        const mesNacimiento = parseInt(String(fechaNacimiento).substring(5, 7));
        const diaNacimiento = parseInt(String(fechaNacimiento).substring(8, 10));
        let edad = anoActual - anoNacimiento;
        if (mesActual < mesNacimiento) {
            edad--;
        } else if (mesActual === mesNacimiento) {
            if (diaActual < diaNacimiento) {
                edad--;
            }
        }
        // console.log(edad);
        return parseInt(edad);
    } catch (e) {
        console.log(e, "Error al calcular la edad");
    }
}





function entrevistaInicialDia1() {
    try {
        // Pregunta 1
        var p1 = parseInt(document.getElementById("pregunta1Psico").value);
        // Pregunta 2
        var p2 = parseInt(document.getElementById("pregunta2Psico").value);
        // Pregunta 3
        var p3 = parseInt(document.getElementById("pregunta3Psico").value);
        // Pregunta 4
        var p4 = parseInt(document.getElementById("pregunta4Psico").value);
        // Preguntas 5
        var p5a = parseInt(document.getElementById("pregunta5APsico").value);
        var p5b = parseInt(document.getElementById("pregunta5BPsico").value);
        var p5c = parseInt(document.getElementById("pregunta5CPsico").value);
        //Preguntas 6
        var p6a = parseInt(document.getElementById("pregunta6APsico").value);
        var p6b = parseInt(document.getElementById("pregunta6BPsico").value);
        var p6c = parseInt(document.getElementById("pregunta6CPsico").value);
        // Preguntas 7
        var p7a = parseInt(document.getElementById("pregunta7APsico").value);
        var p7b = parseInt(document.getElementById("pregunta7BPsico").value);
        var p7c = parseInt(document.getElementById("pregunta7CPsico").value);
        var sumatoria = p1 + p2 + p3 + p4 + (p5a + p5b + p5c) + (p6a + p6b + p6c) + (p7a + p7b + p7c);

        const valores = window.location.search;
        const urlParams = new URLSearchParams(valores);
        var email = urlParams.get('email');
        fetch('https://www.elsa360.com/perfil/idPerfil', {
            method: 'GET',
            body: JSON.stringify({
                emailUsuario: email,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((idPerfil) => {
                fetch('url', {
                    method: 'POST',
                    body: JSON.stringify({
                        nombreTest: 'entrevista inicial',
                        subtituloTest: 'parte 1',
                        resultadoTest: sumatoria,
                        conclusionesTest: "",
                        fkPerfilUsuarioTest: idPerfil,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((json) => console.log(json));
            });
        location.href = "html/vertical-menu-template/app-planPsicologico.html?" + email

    } catch (e) {
        console.log(e, 'Funcion -> Entrevista Inicial Dia 1');
    }

}
function entrevistaInicialDia2() {
    try {
        // Pregunta 8
        var p8 = document.getElementById("pregunta8Psico").value;
        // Pregunta 9
        var p9 = document.getElementById("pregunta9Psico").value;
        // Pregunta 10
        var p10 = parseInt(document.getElementById("pregunta10Psico").value);
        // Pregunta 11
        var p11 = parseInt(document.getElementById("pregunta11Psico").value);
        // Preguntas 12
        var p12a = parseInt(document.getElementById("pregunta12APsico").value);
        var p12b = parseInt(document.getElementById("pregunta12BPsico").value);
        var p12c = parseInt(document.getElementById("pregunta12CPsico").value);
        //Preguntas 13
        var p13a = document.getElementById("pregunta13APsico").value;
        var p13b = document.getElementById("pregunta13BPsico").value;
        // Preguntas 14
        var p14aD = document.getElementById("pregunta14APsico").value;
        var p14bD = document.getElementById("pregunta14BPsico").value;
        var p14cD = document.getElementById("pregunta14CPsico").value;

        var p14aF = document.getElementById("pregunta14DPsico").value;
        var p14bF = document.getElementById("pregunta14EPsico").value;
        var p14cF = document.getElementById("pregunta14FPsico").value;

        var sumatoria = p10 + p11 + (p12a + p12b + p12c);
        const valores = window.location.search;
        const urlParams = new URLSearchParams(valores);
        var email = urlParams.get('email');
        fetch('https://www.elsa360.com/perfil/idPerfil', {
            method: 'GET',
            body: JSON.stringify({
                emailUsuario: email,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((idPerfil) => {
                fetch('url', {
                    method: 'POST',
                    body: JSON.stringify({
                        nombreTest: 'entrevista inicial',
                        subtituloTest: 'parte 2',
                        resultadoTest: sumatoria,
                        conclusionesTest: "",
                        fkPerfilUsuarioTest: idPerfil,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((json) => console.log(json));
            });
        location.href = "html/vertical-menu-template/app-planPsicologico.html?" + email
    } catch (e) {
        console.log(e, 'Funcion -> Entrevista Inicial Parte 2')
    }
}
function listaEstresores() {
    try {
        var estresor1 = document.getElementById("pregunta15APsico").value;
        var estresor2 = document.getElementById("pregunta15BPsico").value;
        var estresor3 = document.getElementById("pregunta15CPsico").value;
        var estresor4 = document.getElementById("pregunta15DPsico").value;
        var estresor5 = document.getElementById("pregunta15EPsico").value;
        const valores = window.location.search;
        const urlParams = new URLSearchParams(valores);
        var email = urlParams.get('email');
        fetch('https://www.elsa360.com/perfil/idPerfil', {
            method: 'GET',
            body: JSON.stringify({
                emailUsuario: email,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((idPerfil) => {
                fetch('url', {
                    method: 'POST',
                    body: JSON.stringify({
                        nombreTest: 'Lista de Estresores',
                        subtituloTest: 'Lista de Estresores',
                        resultadoTest: sumatoria,
                        conclusionesTest: "",
                        fkPerfilUsuarioTest: idPerfil,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((json) => console.log(json));
            });
        location.href = "html/vertical-menu-template/app-planPsicologico.html?" + email
    } catch (e) {
        console.log(e, 'Funcion -> Lista de Estresores');
    }


}
function objetivosRealizacion() {
    try {
        var obj1 = document.getElementById("pregunta16APsico").value;
        var obj2 = document.getElementById("pregunta16BPsico").value;
        var obj3 = document.getElementById("pregunta16CPsico").value;
        const valores = window.location.search;
        const urlParams = new URLSearchParams(valores);
        var email = urlParams.get('email');
        fetch('https://www.elsa360.com/perfil/idPerfil', {
            method: 'GET',
            body: JSON.stringify({
                emailUsuario: email,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((idPerfil) => {
                fetch('url', {
                    method: 'POST',
                    body: JSON.stringify({
                        nombreTest: 'Objetivos de realizacion',
                        subtituloTest: 'Lista de Estresores',
                        resultadoTest: sumatoria,
                        conclusionesTest: "",
                        fkPerfilUsuarioTest: idPerfil,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((json) => console.log(json));
            });
        location.href = "html/vertical-menu-template/app-planPsicologico.html?" + email
    } catch (e) {
        console.log(e, 'Funcion -> Objetivos de realizacion');
    }
}
function necesidadAceptacion() {
    try {
        var p1 = parseInt(document.getElementById("pregunta17Psico").value);
        var p2 = parseInt(document.getElementById("pregunta18Psico").value);
        var p3 = parseInt(document.getElementById("pregunta19Psico").value);
        var p4 = parseInt(document.getElementById("pregunta20Psico").value);
        var p5 = parseInt(document.getElementById("pregunta21Psico").value);
        var p6 = parseInt(document.getElementById("pregunta22Psico").value);
        var p7 = parseInt(document.getElementById("pregunta23Psico").value);
        var sumatoria = p1 + p2 + p3 + p4 + p5 + p6 + p7
        const valores = window.location.search;
        const urlParams = new URLSearchParams(valores);
        var email = urlParams.get('email');
        fetch('https://www.elsa360.com/perfil/idPerfil', {
            method: 'GET',
            body: JSON.stringify({
                emailUsuario: email,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((idPerfil) => {
                fetch('url', {
                    method: 'POST',
                    body: JSON.stringify({
                        nombreTest: 'Test de creencias irracionales',
                        subtituloTest: 'Necesidad de aceptacion',
                        resultadoTest: sumatoria,
                        conclusionesTest: "",
                        fkPerfilUsuarioTest: idPerfil,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((json) => console.log(json));
            });
        location.href = "html/vertical-menu-template/app-planPsicologico.html?" + email

    } catch (e) {
        console.log(e, 'Funcion -> Necesidad de aceptacion');
    }

}
function altasAutoexpectativas() {
    try {
        var p1 = parseInt(document.getElementById("pregunta24Psico").value);
        var p2 = parseInt(document.getElementById("pregunta25Psico").value);
        var p3 = parseInt(document.getElementById("pregunta26Psico").value);
        var p4 = parseInt(document.getElementById("pregunta27Psico").value);
        var p5 = parseInt(document.getElementById("pregunta28Psico").value);
        var sumatoria = p1 + p2 + p3 + p4 + p5;
        const valores = window.location.search;
        const urlParams = new URLSearchParams(valores);
        var email = urlParams.get('email');
        fetch('https://www.elsa360.com/perfil/idPerfil', {
            method: 'GET',
            body: JSON.stringify({
                emailUsuario: email,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((idPerfil) => {
                fetch('url', {
                    method: 'POST',
                    body: JSON.stringify({
                        nombreTest: 'Test de creencias irracionales',
                        subtituloTest: 'Altas autoexpectativas',
                        resultadoTest: sumatoria,
                        conclusionesTest: "",
                        fkPerfilUsuarioTest: idPerfil,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((json) => console.log(json));
            });
        location.href = "html/vertical-menu-template/app-planPsicologico.html?" + email
    } catch (e) {
        console.log(e, 'Funcion -> Altas autoexpectativas')
    }
}


function culpabilizacion() {
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6;
    document.getElementById("resultadoTest").innerHTML = resultado;
}
function intoleranciaFrustracion() {
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6;
    document.getElementById("resultadoTest").innerHTML = resultado;
}
function preocupacionAnsiedad() {
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var resultado = p1 + p2 + p3 + p4 + p5;
    document.getElementById("resultadoTest").innerHTML = resultado;
}
function irresponsabilidadEmocional() {
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var p7 = parseInt(document.getElementById("pregunta7").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6 + p7;
    document.getElementById("resultadoTest").innerHTML = resultado;
}
function evitacionProblemas() {
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var resultado = p1 + p2 + p3;
    document.getElementById("resultadoTest").innerHTML = resultado;
}
function dependencia() {
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6;
    document.getElementById("resultadoTest").innerHTML = resultado;
}
function indefension() {
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var p7 = parseInt(document.getElementById("pregunta7").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6 + p7;
    document.getElementById("resultadoTest").innerHTML = resultado;
    console.log(borgh);
}
function perfeccionismo() {
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var resultado = p1 + p2 + p3 + p4 + p5;
    document.getElementById("resultadoTest").innerHTML = resultado;
}
function cualidadesDebilidadesTecFis() {
    //Cualidades Tecnicas
    var ct1 = document.getElementById("cualidadTec1").value;
    var rct1 = parseInt(document.getElementById("respuestaCualidadTec1").value);
    var ct2 = document.getElementById("cualidadTec2").value;
    var rct2 = parseInt(document.getElementById("respuestaCualidadTec2").value);
    //Debilidades Tecnicas
    var dt1 = document.getElementById("debilidadTec1").value;
    var rd1 = parseInt(document.getElementById("respuestaDebilidadTec1").value);
    var dt2 = document.getElementById("debilidadTec2").value;
    var rd2 = parseInt(document.getElementById("respuestaDebilidadTec2").value);
    //Cualidades Fisicas
    var cf1 = document.getElementById("cualidadFis1").value;
    var rcf1 = parseInt(document.getElementById("respuestaCualidadFis1").value);
    var cf2 = document.getElementById("cualidadFis2").value;
    var rcf2 = parseInt(document.getElementById("respuestaCualidadFis2").value);
    //Debilidades Fisicas
    var df1 = document.getElementById("debilidadFis1").value;
    var rdf1 = parseInt(document.getElementById("respuestaDebilidadFis1").value);
    var df2 = document.getElementById("debilidadFis2").value;
    var rdf2 = parseInt(document.getElementById("respuestaDebilidadFis2").value);

    console.log(ct1 + ":" + rct1);
    console.log(ct2 + ":" + rct2);
    console.log(dt1 + ":" + rd1);
    console.log(dt2 + ":" + rd2);
    console.log(cf1 + ":" + rcf1);
    console.log(cf2 + ":" + rcf2);
    console.log(df1 + ":" + rdf1);
    console.log(df2 + ":" + rdf2);

}
function cualidadesDebilidadesPsicoPerso() {
    //Cualidades Psicologicas
    var ct1 = document.getElementById("cualidadPsico1").value;
    var rct1 = parseInt(document.getElementById("respuestaCualidadPsico1").value);
    var ct2 = document.getElementById("cualidadPsico2").value;
    var rct2 = parseInt(document.getElementById("respuestaCualidadPsico2").value);
    //Debilidades Psicologicas
    var dt1 = document.getElementById("debilidadPsico1").value;
    var rd1 = parseInt(document.getElementById("respuestaDebilidadPsico1").value);
    var dt2 = document.getElementById("debilidadPsico2").value;
    var rd2 = parseInt(document.getElementById("respuestaDebilidadPsico2").value);
    //Cualidades Personales
    var cf1 = document.getElementById("cualidadPer1").value;
    var rcf1 = parseInt(document.getElementById("respuestaCualidadPer1").value);
    var cf2 = document.getElementById("cualidadPer2").value;
    var rcf2 = parseInt(document.getElementById("respuestaCualidadPer2").value);
    //Debilidades Personales
    var df1 = document.getElementById("debilidadPer1").value;
    var rdf1 = parseInt(document.getElementById("respuestaDebilidadPer1").value);
    var df2 = document.getElementById("debilidadPer2").value;
    var rdf2 = parseInt(document.getElementById("respuestaDebilidadPer2").value);

    console.log(ct1 + ":" + rct1);
    console.log(ct2 + ":" + rct2);
    console.log(dt1 + ":" + rd1);
    console.log(dt2 + ":" + rd2);
    console.log(cf1 + ":" + rcf1);
    console.log(cf2 + ":" + rcf2);
    console.log(df1 + ":" + rdf1);
    console.log(df2 + ":" + rdf2);

}
function autoconfianza() {
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6;
    document.getElementById("resultadoTest").innerHTML = resultado;

}
function afrontamientoNeg() {
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6;
    document.getElementById("resultadoTest").innerHTML = resultado;
}
function controlAtencional() {
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6;
    document.getElementById("resultadoTest").innerHTML = resultado;
}
function controlVisuoImaginativo() {
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6;
    document.getElementById("resultadoTest").innerHTML = resultado;
}
function nivelMotivacional() {
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6;
    document.getElementById("resultadoTest").innerHTML = resultado;
}
function afrontamientoPos() {
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6;
    document.getElementById("resultadoTest").innerHTML = resultado;
}
function controlActitudinal() {
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6;
    document.getElementById("resultadoTest").innerHTML = resultado;
}
function hamilton() {
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var p7 = parseInt(document.getElementById("pregunta7").value);
    var p8 = parseInt(document.getElementById("pregunta8").value);
    var p9 = parseInt(document.getElementById("pregunta9").value);
    var p10 = parseInt(document.getElementById("pregunta10").value);
    var p11 = parseInt(document.getElementById("pregunta11").value);
    var p12 = parseInt(document.getElementById("pregunta12").value);
    var p13 = parseInt(document.getElementById("pregunta13").value);
    var p14 = parseInt(document.getElementById("pregunta14").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + p10 + p11 + p12 + p13 + p14;
    document.getElementById("resultadoTest").innerHTML = resultado;
}






(function caloriasPorciones() {
    var datos = [];
    var todosInput = document.querySelectorAll('.NumeroPorciones');
    todosInput.forEach(element => {
        element.addEventListener('change', function (e) {
            datos = document.getElementsByTagName("td");
            var totalCalorias = 0;
            var totalporciones = 0;
            for (var i = 1; i <= datos.length; i++) {
                try {
                    var idcalorias = "cal" + i.toString();
                    var idporciones = "porcion" + i.toString();
                    calorias = document.getElementById(idcalorias).innerHTML;
                    numPorcion = document.getElementById(idporciones).value;
                    numPorcion = numPorcion.replace(',', '.');
                    numPorcion = parseFloat(numPorcion);
                    // console.log(typeof (numPorcion));
                    if (isNaN(numPorcion) !== true) {
                        total = parseFloat(calorias) * parseFloat(numPorcion);
                        totalporciones = totalporciones + parseFloat(numPorcion);
                        totalCalorias = totalCalorias + total;
                        // console.log(totalCalorias);
                    }

                } catch {
                    // console.log("");
                }
            }
            document.getElementById("totalCaloriasElegidas").innerHTML = totalCalorias.toFixed(2);
            document.getElementById("totalPorciones").innerHTML = totalporciones.toFixed(2);

        });
    });
})();
(function buscar() {
    document.addEventListener("keyup", e => {
        if (e.target.matches("#buscador")) {
            if (e.key === "Escape") e.target.value = ""
            document.querySelectorAll("tr,.semana").forEach(alimento => {
                alimento.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                    ? (alimento.classList.remove("filtro"), deschequiar())
                    : (alimento.classList.add("filtro"), chequiar())
            })
        }
    })
    function chequiar() {
        document.querySelectorAll('input[type=checkbox]').forEach(function (checkElement) {
            checkElement.checked = true;
        });
    }
    function deschequiar() {
        document.querySelectorAll('input[type=checkbox]').forEach(function (checkElement) {
            checkElement.checked = false;
        });
    }
})();
function seleccionAlimentos(idMomento, grupo) {
    if (grupo === 1) {
        location.href = "completeFoodListEnergetic.html?momentoComida=" + idMomento.toString() + "&grupo=" + grupo.toString();
    }
    if (grupo === 2) {
        location.href = "completeFoodListProtein.html?momentoComida=" + idMomento.toString() + "&grupo=" + grupo.toString();
    }
    if (grupo === 3) {
        location.href = "completeFoodListDairy.html?momentoComida=" + idMomento.toString() + "&grupo=" + grupo.toString();
    }
    if (grupo === 4) {
        location.href = "completeFoodListFruitsAndVegetables.html?momentoComida=" + idMomento.toString() + "&grupo=" + grupo.toString();
    }
    if (grupo === 5) {
        location.href = "completeFoodListFats.html?momentoComida=" + idMomento.toString() + "&grupo=" + grupo.toString();
    }

}
function eliminarGrupos(grupo) {
    var grupoAlimenticio = grupo;
    document.querySelectorAll(".semana").forEach(alimento => {
        alimento.textContent.toLowerCase().includes(grupoAlimenticio.toLowerCase())
            ? (alimento.classList.remove("filtro"))
            : (alimento.classList.add("filtro"))
    })
}
(function desayuno() {
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    var idMomento = parseInt(urlParams.get('momentoComida'));
    var grupoAlim = parseInt(urlParams.get('grupo'));
    if (idMomento === 1) {
        document.getElementById("momentoComida").innerHTML = "Desayuno";
    }
    if (idMomento === 2) {
        document.getElementById("momentoComida").innerHTML = "Snack 1";
    }
    if (idMomento === 3) {
        document.getElementById("momentoComida").innerHTML = "Almuerzo";
    }
    if (idMomento === 4) {
        document.getElementById("momentoComida").innerHTML = "Snack 2";
    }
    if (idMomento === 5) {
        document.getElementById("momentoComida").innerHTML = "Cena";
    }
    if (idMomento === 6) {
        document.getElementById("momentoComida").innerHTML = "Refrigerio Nocturno";
    }
})()
function chequiar() {
    document.querySelectorAll('input[type=checkbox]').forEach(function (checkElement) {
        checkElement.checked = true;
    });
}
function deschequiar() {
    document.querySelectorAll('input[type=checkbox]').forEach(function (checkElement) {
        checkElement.checked = false;
    });
}
function foodEnergetic() {
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    var idMomento = parseInt(urlParams.get('momentoComida'));
    var grupo = parseInt(urlParams.get('grupo'));
    location.href = "completeFoodListEnergetic.html?momentoComida=" + idMomento.toString() + "&grupo=" + grupo.toString();
}
function foodProtein() {
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    var idMomento = parseInt(urlParams.get('momentoComida'));
    var grupo = parseInt(urlParams.get('grupo'));
    location.href = "completeFoodListProtein.html?momentoComida=" + idMomento.toString() + "&grupo=" + grupo.toString();
}
function foodDairy() {
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    var idMomento = parseInt(urlParams.get('momentoComida'));
    var grupo = parseInt(urlParams.get('grupo'));
    location.href = "completeFoodListDairy.html?momentoComida=" + idMomento.toString() + "&grupo=" + grupo.toString();
}
function foodFruitsVegetables() {
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    var idMomento = parseInt(urlParams.get('momentoComida'));
    var grupo = parseInt(urlParams.get('grupo'));
    location.href = "completeFoodListFruitsAndVegetables.html?momentoComida=" + idMomento.toString() + "&grupo=" + grupo.toString();
}
function foodFats() {
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    var idMomento = parseInt(urlParams.get('momentoComida'));
    var grupo = parseInt(urlParams.get('grupo'));
    location.href = "completeFoodListFats.html?momentoComida=" + idMomento.toString() + "&grupo=" + grupo.toString();
}


function calcularIMC() {
    try {
        peso = document.getElementById("peso").value;
        estatura = document.getElementById("estatura").value;
        IMC = peso / (estatura * estatura);
        console.log(IMC);
        if (IMC >= 18.5 && IMC <= 24.9) {
            mensaje = "Normal";
        } else if (IMC >= 25 && IMC <= 29.9) {
            mensaje = "Sobrepeso";
        }
        else if (IMC >= 30 && IMC <= 34.9) {
            mensaje = "Obesidad Tipo 1";
        }
        else if (IMC >= 35 && IMC <= 39.9) {
            mensaje = "Obesidad Tipo 2";
        } else if (IMC >= 40) {
            mensaje = "Obesidad Tipo 3";
        } else {
            mensaje = "Error"
        }
        console.log(mensaje);
    } catch (e) {
        console.log(e, "Error al calcular IMC");
    }
}
function calcularLiquidos() {
    try {
        const peso = document.getElementById("peso").value;
        let rl = (35 * peso) / 1000;
        console.log(rl);
    } catch (e) { console.log(e, "Error al calcular los liquidos") }
}
function tmb() {
    try {
        genero = document.getElementById("genero").value;
        peso = document.getElementById("peso").value;
        estatura = document.getElementById("estatura").value;
        let edad = calcularEdad();
        //console.log(edad);
        //console.log(genero);
        let tmb;
        if (genero === "hombre") {
            tmb = 66.5 + (13.75 * peso) + (5 * (estatura * 100)) - (6.8 * edad);
        } else {
            tmb = 665 + (9.6 * peso) + (1.8 * (estatura * 100)) - (4.7 * edad);
        }
        console.log(tmb);
        return tmb;
    } catch (e) { console.log(e, "Error al calcular el TMB") }
}
function naf() {
    try {
        const tmb = tmb();
        const naf = 0.2 * tmb;
        // console.log(naf);
        return naf;
    } catch (e) { console.log(e, "Error al calcular NAF") }
}
function eta() {
    try {
        const tmb = tmb();
        const eta = 0.1 * tmb;
        // console.log(eta);
        return eta;
    } catch (e) { console.log(e, "Error al calcular el ETA") }
}
function gde(met, timeTotal) {
    // Gasto deportivo entrenamiento
    try {
        const peso = document.getElementById("peso").value;
        let gde = (0.0175 * peso * met) * timeTotal;
        // console.log(gde);
        return gde;
    } catch (e) { console.log(e, "Error al calcular el GDE") }
}
function rs() {
    //R= Restriccion;  S=Superavit
    try {
        const peso = document.getElementById("peso").value;
        const pesoDeseado = 60;
        let diferencia = pesoDeseado - peso;
        // console.log(diferencia);
        let ipm = 0;
        //ipm = Incremento Peso Mensual
        if (Math.abs(diferencia) <= 12) {
            ipm = Math.abs(diferencia) / 3;
        } else if (Math.abs(diferencia) <= 24) {
            ipm = Math.abs(diferencia) / 6;
        } else if (Math.abs(diferencia) <= 48) {
            ipm = Math.abs(diferencia) / 12;
        } else {
            ipm = 4;
        }
        // console.log(ipm);
        if (diferencia > 0) {
            if (ipm <= 0.5) {
                rs = 350;
            }
            if (ipm > 0.5 && ipm <= 1) {
                rs = 400;
            }
            if (ipm > 1 && ipm <= 1.5) {
                rs = 450;
            }
            if (ipm > 1.5 && ipm <= 2) {
                rs = 500;
            }
            if (ipm > 2 && ipm <= 2.5) {
                rs = 550;
            }
            if (ipm > 2.5 && ipm <= 3) {
                rs = 600;
            }
            if (ipm > 3 && ipm <= 3.5) {
                rs = 650;
            }
            if (ipm > 3.5 && ipm <= 4) {
                rs = 700;
            }
        } else if (diferencia < 0) {
            if (ipm <= 0.5) {
                rs = -375;
            } if (ipm > 0.5 && ipm <= 1) {
                rs = -500;
            } if (ipm > 1 && ipm <= 1.5) {
                rs = -583;
            } if (ipm > 1.5 && ipm <= 2) {
                rs = -666;
            } if (ipm > 2 && ipm <= 2.5) {
                rs = -750;
            } if (ipm > 2.5 && ipm <= 3) {
                rs = -833;
            } if (ipm > 3 && ipm <= 3.5) {
                rs = -916;
            } if (ipm > 3.5 && ipm <= 4) {
                rs = -1000;
            }
        } else {
            rs = 0;
        }
        // console.log(peso);
        // console.log(pesoDeseado);
        // console.log(rs);
        return rs;
    } catch (e) { console.log(e, "Error al calcular el RS"); }
}
function get() {
    try {
        let tmb = tmb();
        let naf = naf();
        let eta = eta();
        let tgd = gde(6, 4);
        let rs = rs();
        let get = tmb + naf + eta + tgd + rs;
        // console.log(tmb);
        // console.log(naf);
        // console.log(eta);
        // console.log(tgd);
        // console.log(rs);
        console.log(get);
        return parseFloat(get);
    } catch (e) { console.log(e, "Error al calcular el GET"); }
}
function rangoGET() {
    try {
        let rangeGet = get();
        let max = rangeGet * 1.05;
        let min = rangeGet * 0.95;
        console.log(max);
        console.log(rangeGet);
        console.log(min);
    } catch (e) { console.log(e, "Error al calcular el RANGO_GET") }
}
function getMacronutrientes() {
    vrGet = get();
    if (diferenciaPeso < 0) {
        vrCarbo = vrGet * 0.48
        vrProte = vrGet * 0.30
        vrGrasa = vrGet * 0.22
    } else if (diferenciaPeso > 0) {
        vrCarbo = vrGet * 0.53
        vrProte = vrGet * 0.25
        vrGrasa = vrGet * 0.22
    } else {
        vrCarbo = vrGet * 0.54
        vrProte = vrGet * 0.16
        vrGrasa = vrGet * 0.30
    }
    const macronutrientes = {
        carbohidratos: vrCarbo,
        proteinas: vrProte,
        grasas: vrGrasa
    }

    return console.log(macronutrientes)
}
function getMomento() {
    vrGet = get();
    if (diferenciaPeso < 0) {
        vrdesayuno = vrGet * 0.22
        vrsnack1 = vrGet * 0.15
        vralmuerzo = vrGet * 0.28
        vrsnack2 = vrGet * 0.15
        vrcena = vrGet * 0.20
        vrsnack3 = vrGet * 0
    } else if (diferenciaPeso > 0) {
        vrdesayuno = vrGet * 0.20
        vrsnack1 = vrGet * 0.15
        vralmuerzo = vrGet * 0.20
        vrsnack2 = vrGet * 0.15
        vrcena = vrGet * 0.20
        vrsnack3 = vrGet * 0.10
    } else {
        vrdesayuno = vrGet * 0.25
        vrsnack1 = vrGet * 0.15
        vralmuerzo = vrGet * 0.25
        vrsnack2 = vrGet * 0
        vrcena = vrGet * 0.25
        vrsnack3 = vrGet * 0.22
    }
    const macronutrientes = {
        desayuno: vrdesayuno,
        snack1: vrsnack1,
        almuerzo: vralmuerzo,
        snack2: vrsnack2,
        cena: vrcena,
        snack3: vrsnack3
    }

    return console.log(macronutrientes)
}
function cetMacro() { }
function cetMomento() { }



function calcularDiferenciaDias() {
    try {
        const fechaIncioEntreno = "2022-09-15";
        //Datos Fecha Actual    
        const fechaActual = new Date();
        const anoActual = parseInt(fechaActual.getFullYear());
        const mesActual = parseInt(fechaActual.getMonth()) + 1;
        const diaActual = parseInt(fechaActual.getDate());
        const fechaSistema = (anoActual + '-' + mesActual + '-' + diaActual)
        //console.log(fechaSistema);
        //Datos Fecha Nacimiento
        // const anoEntreno = parseInt(String(fechaIncioEntreno).substring(0, 4));
        // const mesEntreno = parseInt(String(fechaIncioEntreno).substring(5, 7));
        // const diaEntreno = parseInt(String(fechaIncioEntreno).substring(8, 10));
        // const fechaEntreno=(anoActual+'-'+mesActual+'-'+diaActual)
        //console.log(fechaIncioEntreno);
        let fechaInicial = new Date(fechaIncioEntreno).getTime();
        let fechaFinal = new Date(fechaSistema).getTime();
        let diff = fechaFinal - fechaInicial;
        dias = (diff / (1000 * 60 * 60 * 24));
        console.log(dias);
        if (dias == 1) {
            console.log("Enviar URL Tienda");
        }
        if (dias == 3) {
            console.log("Enviar FeedBack Final");
        }
        if (dias == 5) {
            console.log("Enviar Remarketing");
        }
        if (dias > 7) {
            console.log("Bloquear actulizacion de datos - Nivel, Escala y Porque");
            document.getElementById("btnActualizar").style.display = "none";
        }
        if (dias == 15) {
            console.log("Enviar Remarketing");
        }
        if (dias >= 30) {
            console.log("Enviar FeedBack 30 sino lo ha diligenciado");
        }

    } catch (e) {
        console.log(e, "Error al calcular la actualizacion de Nivel , Escala y ¿Porque?");
    }
}
function dividirEnteroDecimal() {
    let numCompleto = 3.02321
    let numEntero = Math.trunc(numCompleto)
    let parteDecimal = parseFloat(numCompleto - numEntero).toFixed(5)

    console.log(numCompleto);
    console.log(parteDecimal);
}
(function () {
    try {
        var totalHoras = 0;
        var datos = [];
        var regLunes = false;
        datos = document.querySelectorAll(".form-control.dias");
        datos.forEach(element => {
            element.addEventListener('change', function (e) {
                var hrLunes = parseInt(document.getElementById("dia1").value);
                var hrMartes = parseInt(document.getElementById("dia2").value);
                var hrMiercoles = parseInt(document.getElementById("dia3").value);
                var hrJueves = parseInt(document.getElementById("dia4").value);
                var hrViernes = parseInt(document.getElementById("dia5").value);
                var hrSabado = parseInt(document.getElementById("dia6").value);
                var hrDomingo = parseInt(document.getElementById("dia7").value);
                if (isNaN(hrLunes) === true) {
                    hrLunes = 0
                }
                if (isNaN(hrMartes) === true) {
                    hrMartes = 0
                }
                if (isNaN(hrMiercoles) === true) {
                    hrMiercoles = 0
                }
                if (isNaN(hrJueves) === true) {
                    hrJueves = 0
                }
                if (isNaN(hrViernes) === true) {
                    hrViernes = 0
                }
                if (isNaN(hrSabado) === true) {
                    hrSabado = 0
                }
                if (isNaN(hrDomingo) === true) {
                    hrDomingo = 0
                }
                totalHoras = hrLunes + hrMartes + hrMiercoles + hrJueves + hrViernes + hrSabado + hrDomingo;

                document.getElementById("horasEntrenamiento").innerHTML = totalHoras;
                enviarDisponibilidad()
            });
        });
    } catch (e) {
        console.log(e, "Error al calcular las horas disponibles semanales")
    }
})();
function enviarDisponibilidad() {
    try {
        var totalDias = 0;
        var hrLunes = parseInt(document.getElementById("dia1").value);
        var hrMartes = parseInt(document.getElementById("dia2").value);
        var hrMiercoles = parseInt(document.getElementById("dia3").value);
        var hrJueves = parseInt(document.getElementById("dia4").value);
        var hrViernes = parseInt(document.getElementById("dia5").value);
        var hrSabado = parseInt(document.getElementById("dia6").value);
        var hrDomingo = parseInt(document.getElementById("dia7").value);
        if (hrLunes > 0) {
            totalDias++;
        }
        if (hrMartes > 0) {
            totalDias++;
        }
        if (hrMiercoles > 0) {
            totalDias++;
        }
        if (hrJueves > 0) {
            totalDias++;
        }
        if (hrViernes > 0) {
            totalDias++;
        }
        if (hrSabado > 0) {
            totalDias++;
        }
        if (hrDomingo > 0) {
            totalDias++;
        }
        document.getElementById("DisponibilidadDias").innerHTML = totalDias;
    } catch (e) {
        console.log(e, "Error enviar dias disponibles")
    }
};

