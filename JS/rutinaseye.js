window.onload = async () => {
    traerRutinas();
}
function traerRutinas() {
    console.log("Trayendo rutina...")
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

        if (tipoRutina === 'fullBody' && tipo === 'estiramiento') {
            tituloRutina = "Estiramiento de cuerpo completo"
            img = 'FullBodyStretch';
        }
        if (tipoRutina === 'postEntreno' && tipo === 'estiramiento') {
            tituloRutina = "Estiramiento para entrenar"
            img = 'stretchTrain';
        }
        if (tipoRutina === 'fullBody' && tipo === 'entrenamiento') {
            tituloRutina = "Rutina de cuerpo completo"
            img = 'fullbodyRoutine';
        }
        if (tipoRutina === 'trenInferior' && tipo === 'entrenamiento') {
            tituloRutina = "Rutina para el tren inferior"
            img = 'lowerBody';
        }
        if (tipoRutina === 'trenSuperior' && tipo === 'entrenamiento') {
            tituloRutina = "Rutina para el tren superior"
            img = 'upperBody';
        }
        if (tipoRutina === 'core' && tipo === 'entrenamiento') {
            tituloRutina = "Fortalecimiento de CORE"
            img = 'core';
        }
        if (tipo === 'estiramiento') {
            url = apiServer + "rutinaEstiramientoFisico/traer?nivel=" + nivel + "&rutina=" + tipoRutina + ""
        }
        if (tipo === 'entrenamiento') {
            url = apiServer + "rutinaEjercicioFisico/traer?nivel=" + nivel + "&escala=" + escala + "&rutina=" + tipoRutina + ""
        }
        document.getElementById("nombreRutina").innerText = tituloRutina;
        document.getElementById("imagenFondo").setAttribute("src", "../../assets/img/pages/" + img + ".jpg")
        console.log("URL: ", url);
        //Traer datos de la DB
        fetch(url)
            .then(response => response.json())
            .then(ejercicios => {
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
                    if (tipo === 'estiramiento') {
                        thRepeticion.innerText = "DURACION";
                    }
                    if (tipo === 'entrenamiento') {
                        thRepeticion.innerText = "REPETICIONES";
                    }

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
                    if (tipo === 'estiramiento') {
                        tdRepeticion.innerText = ejercicios[i].duracionEstiramiento;
                    }
                    if (tipo === 'entrenamiento') {
                        tdRepeticion.innerText = ejercicios[i].repeticiones;
                    }
                    let tdRir = document.createElement("td");
                    if (tipo === 'estiramiento') {
                        tdRir.innerText = 0;
                    }
                    if (tipo === 'entrenamiento') {
                        tdRir.innerText = ejercicios[i].rir;
                    }

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
};