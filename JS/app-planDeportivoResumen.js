window.onload = async () => {
    traerejercicios();
}
async function traerejercicios() {
    let habilidad = "Resistencia";
    let niveldeportivo = 1;
    let tiempototal = 480;
    let url = apiServer + "ejercicioCiclismo/ejercicios?habilidad=" + habilidad + "&nivel=" + niveldeportivo + "&tiempodefinitivo=" + tiempototal + "";
    await fetch(url)
        .then(response => response.json())
        .then(respuesta => {
            if (respuesta.length > 0) {
                document.getElementById("Habilidad1ATrabajar").innerText = habilidad;
                document.getElementById("TiempoTotalATrabajar").innerText = tiempototal + " min";
                document.getElementById("FechaDeTrabajo").innerText = new Date(Date.now()).toLocaleDateString();
                console.log(respuesta[0]);
                respuesta.forEach(ejercicio => {
                    let cuerpo = document.createElement("p");
                    cuerpo.className = "mb-4";
                    cuerpo.style = "color: #cbcbe2;"

                    //Icono
                    let icono = document.createElement("i");
                    icono.className = "bx bxs-right-arrow text-success";
                    icono.style = "font-size: 12px;";

                    //Ejercicio
                    let descripcion = document.createElement("i");
                    descripcion.innerText = ejercicio.nombreEjercicio + ". Realiza ";
                    console.log("Nombre:", ejercicio.nombreEjercicio);


                    let series = document.createElement("spam");
                    series.className = "text-success";
                    series.style = "font-size: 15px;";
                    series.innerText = ejercicio.numSeries + " serie(s) ";
                    console.log("Series:", ejercicio.numSeries);

                    let conector1 = document.createElement("spam");
                    conector1.innerText = " X ";


                    let repeticion = document.createElement("spam");
                    repeticion.className = "text-success";
                    repeticion.style = "font-size: 15px;";
                    repeticion.innerText = ejercicio.numRepeticiones + " Reps ";
                    console.log("Repeticion:", ejercicio.numRepeticiones);

                    let conector2 = document.createElement("spam");
                    conector2.innerText = " X ";

                    let tiemporepeticion = document.createElement("spam");
                    tiemporepeticion.className = "text-success";
                    tiemporepeticion.style = "font-size: 15px;";
                    tiemporepeticion.innerText = ejercicio.tiempoDuracionRepeticion + " ";
                    console.log("Duracion Repeticion:", ejercicio.tiempoDuracionRepeticion);

                    let magnitudrepeticion = document.createElement("spam");
                    magnitudrepeticion.className = "text-success";
                    magnitudrepeticion.style = "font-size: 15px;";
                    magnitudrepeticion.innerText = ejercicio.magnitud;
                    console.log("Magnitud Repeticion:", ejercicio.magnitud);

                    let conector3 = document.createElement("spam");
                    conector3.innerText = " X ";

                    let intensidadrepeticion = document.createElement("spam");
                    intensidadrepeticion.className = "text-success";
                    intensidadrepeticion.style = "font-size: 15px;";
                    intensidadrepeticion.innerText = ejercicio.intesidadRepeticion + " Int ";
                    console.log("Intensidad Repeticion:", ejercicio.intesidadRepeticion);

                    let conector4 = document.createElement("spam");
                    conector4.innerText = " X ";

                    let cadenciarepeticion = document.createElement("spam");
                    cadenciarepeticion.className = "text-success";
                    cadenciarepeticion.style = "font-size: 15px;";
                    cadenciarepeticion.innerText = ejercicio.rpmRepeticion + " RPM ";
                    console.log("Cadencia Repeticion:", ejercicio.rpmRepeticion);

                    let conector5 = document.createElement("spam");
                    conector5.innerText = " X ";

                    let terreno = document.createElement("spam");
                    terreno.className = "text-success";
                    terreno.style = "font-size: 15px;";
                    terreno.innerText = ejercicio.terreno;
                    console.log("Terreno:", ejercicio.terreno);

                    let conector6 = document.createElement("spam");
                    conector6.innerText = " y ";

                    let posicionejercicio = document.createElement("spam");
                    posicionejercicio.className = "text-success";
                    posicionejercicio.style = "font-size: 15px;";
                    posicionejercicio.innerText = ejercicio.posicion;
                    console.log("Posicion:", ejercicio.posicion);

                    let conector7 = document.createElement("spam");
                    conector7.innerText = "  Descansando ";

                    let tiempoDescRepeticion = document.createElement("spam");
                    tiempoDescRepeticion.className = "text-success";
                    tiempoDescRepeticion.style = "font-size: 15px;";
                    tiempoDescRepeticion.innerText = ejercicio.tiempoDescansoRepeticion + " ";
                    console.log("Tiempo Desc Rep:", ejercicio.tiempoDescansoRepeticion);

                    let maginitudDescRepeticion = document.createElement("spam");
                    maginitudDescRepeticion.className = "text-success";
                    maginitudDescRepeticion.style = "font-size: 15px;";
                    maginitudDescRepeticion.innerText = ejercicio.magnitudDescanso;
                    console.log("Magnitud Desc Rep:", ejercicio.magnitudDescanso);

                    let conector8 = document.createElement("spam");
                    conector8.innerText = " X ";

                    let intensidadDescRepeticion = document.createElement("spam");
                    intensidadDescRepeticion.className = "text-success";
                    intensidadDescRepeticion.style = "font-size: 15px;";
                    intensidadDescRepeticion.innerText = ejercicio.intesidadRepeticion + " de intensidad ";
                    console.log("Int Desc Rep:", ejercicio.intesidadRepeticion);

                    let conector9 = document.createElement("spam");
                    conector9.innerText = " entre repeticiones y ";

                    let tiempoDescSeries = document.createElement("spam");
                    tiempoDescSeries.className = "text-success";
                    tiempoDescSeries.style = "font-size: 15px;";
                    tiempoDescSeries.innerText = ejercicio.tiempoDescansoSeries + " ";
                    console.log("Tiempo Desc Series:", ejercicio.tiempoDescansoSeries);

                    let magnitudDescSeries = document.createElement("spam");
                    magnitudDescSeries.className = "text-success";
                    magnitudDescSeries.style = "font-size: 15px;";
                    magnitudDescSeries.innerText = ejercicio.magnitudSeries + " ";
                    console.log("Magnitud Desc Series:", ejercicio.magnitudSeries);

                    let conector10 = document.createElement("spam");
                    conector10.innerText = " entre series. ";

                    cuerpo.appendChild(icono);
                    // cuerpo.appendChild(descripcion);
                    cuerpo.appendChild(series);
                    cuerpo.appendChild(conector1);
                    cuerpo.appendChild(repeticion);
                    cuerpo.appendChild(conector2);
                    cuerpo.appendChild(tiemporepeticion);
                    cuerpo.appendChild(magnitudrepeticion);
                    cuerpo.appendChild(conector3);
                    cuerpo.appendChild(intensidadrepeticion);
                    cuerpo.appendChild(conector4);
                    cuerpo.appendChild(cadenciarepeticion);
                    cuerpo.appendChild(conector5);
                    cuerpo.appendChild(terreno);
                    cuerpo.appendChild(conector6);
                    cuerpo.appendChild(posicionejercicio);
                    cuerpo.appendChild(conector7);
                    cuerpo.appendChild(tiempoDescRepeticion);
                    cuerpo.appendChild(maginitudDescRepeticion);
                    cuerpo.appendChild(conector8);
                    cuerpo.appendChild(intensidadDescRepeticion);
                    cuerpo.appendChild(conector9);
                    cuerpo.appendChild(tiempoDescSeries);
                    cuerpo.appendChild(magnitudDescSeries);
                    cuerpo.appendChild(conector10);

                    let caja = document.getElementById("containerParrafo");
                    caja.appendChild(cuerpo);
                });
            }else{
                console.log("Coleccion de datos vacia");
            }

        });
}


