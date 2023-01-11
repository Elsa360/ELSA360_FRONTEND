window.onload = async () => {
   
    tiempoDisponibleDia();
}

async function tiemposDefinitivos() {
    let url = apiServer + "planEntrenamiento/entrenamiento?idusuario=" + parseInt(localStorage.getItem("login")) + "&totalsemanas=" + parseInt(localStorage.getItem("semanas")) + "&semanaactual=" + parseInt(localStorage.getItem("semanaactual")) + "";
    await fetch(url)
        .then(response => response.json())
        .then(habilidad => {
            console.log("Habilidad: ", habilidad);
            // ======================================================================
            // Disponibilidad Semanal
            let fechaActual = new Date(Date.now());
            let diasemana = fechaActual.getDay();
            console.log("Dia: ", diasemana);
            var td = [];
            var tdreal = [];
            let urlDisp = apiServer + "disponibilidad/perfil?idPerfil=" + localStorage.getItem('perfilamiento') + "";
            fetch(urlDisp)
                .then(response => response.json())
                .then(disponibilidad => {
                    disponibilidad.forEach(d => {
                        td.push(d.domingo);
                        if (d.domingo > 0) {
                            tdreal.push(d.domingo);
                        }
                        td.push(d.lunes);
                        if (d.lunes > 0) {
                            tdreal.push(d.lunes);
                        }
                        td.push(d.martes);
                        if (d.martes > 0) {
                            tdreal.push(d.martes);
                        }
                        td.push(d.miercoles);
                        if (d.miercoles > 0) {
                            tdreal.push(d.miercoles);
                        }
                        td.push(d.jueves);
                        if (d.jueves > 0) {
                            tdreal.push(d.jueves);
                        }
                        td.push(d.viernes);
                        if (d.viernes > 0) {
                            tdreal.push(d.viernes);
                        }
                        td.push(d.sabado);
                        if (d.sabado > 0) {
                            tdreal.push(d.sabado);
                        }
                    });
                    console.log("DS:", td);
                    if (diasemana == 1) {
                        if (td[1] > 0) {
                            diaentreno = 0;
                            if (habilidad[0][0] > 0) {
                                cargarEjercicios(0, habilidad[0][diaentreno], tdreal[diaentreno]);
                            }
                            if (habilidad[1][0] > 0) {
                                cargarEjercicios(0, habilidad[1][diaentreno], tdreal[diaentreno]);
                            }
                            if (habilidad[2][0] > 0) {
                                cargarEjercicios(0, habilidad[2][diaentreno], tdreal[diaentreno]);
                            }
                            if (habilidad[3][0] > 0) {
                                cargarEjercicios(0, habilidad[3][diaentreno], tdreal[diaentreno]);
                            }
                            if (habilidad[4][0] > 0) {
                                cargarEjercicios(0, habilidad[4][diaentreno], tdreal[diaentreno]);
                            }
                            if (habilidad[5][0] > 0) {
                                cargarEjercicios(0, habilidad[5][diaentreno], tdreal[diaentreno]);
                            }
                        }
                    }
                    if (diasemana == 2) {
                        diaentreno = 0;
                        console.log("td[1]", td[1]);
                        if (td[1] > 0) {
                            diaentreno++;
                        }
                        if (habilidad[0][0] > 0) {
                            cargarEjercicios("Potencia", habilidad[0][diaentreno], tdreal[diaentreno]);
                        }
                        if (habilidad[1][0] > 0) {
                            cargarEjercicios("Fuerza", habilidad[1][diaentreno], tdreal[diaentreno]);
                        }
                        if (habilidad[2][0] > 0) {
                            // cargarEjercicios("Fortalecimiento", habilidad[2][diaentreno], tdreal[diaentreno]);
                            if (habilidad[2][0] < 30) {
                                const linkEstira = document.createElement('a');
                                linkEstira.setAttribute('href', 'Pages-ejercicios&estiramientos-Routine.html?rutina=postEntreno&tipo=estiramiento');
                                const estiramiento = document.createElement('button');
                                estiramiento.type = 'button';
                                estiramiento.innerText = 'Estiramiento para entrenar';
                                estiramiento.className = 'btn btn-success btn-sm';
                                linkEstira.appendChild(estiramiento);


                                const linkCore = document.createElement('a');
                                linkCore.setAttribute('href', 'Pages-ejercicios&estiramientos-Routine.html?rutina=core&tipo=entrenamiento');
                                const core = document.createElement('button');
                                core.type = 'button';
                                core.innerText = 'Core - Abdominales';
                                core.className = 'btn btn-success btn-sm';
                                linkCore.appendChild(core);


                                let caja = document.getElementById("containerParrafo");
                                caja.appendChild(linkEstira);
                                caja.appendChild(linkCore);
                            } else if (habilidad[2][0] < 45) {
                                const linkEstira = document.createElement('a');
                                linkEstira.setAttribute('href', 'Pages-ejercicios&estiramientos-Routine.html?rutina=postEntreno&tipo=estiramiento');
                                const estiramiento = document.createElement('button');
                                estiramiento.type = 'button';
                                estiramiento.innerText = 'Estiramiento para entrenar';
                                estiramiento.className = 'btn btn-success btn-sm';
                                linkEstira.appendChild(estiramiento);


                                const linkCore = document.createElement('a');
                                linkCore.setAttribute('href', 'Pages-ejercicios&estiramientos-Routine.html?rutina=core&tipo=entrenamiento');
                                const core = document.createElement('button');
                                core.type = 'button';
                                core.innerText = 'Core - Abdominales';
                                core.className = 'btn btn-success btn-sm';
                                linkCore.appendChild(core);


                                const linkTren = document.createElement('a');
                                if ((parseInt(localStorage.getItem('sesion')) % 2) == 0) {
                                    linkTren.setAttribute('href', 'Pages-ejercicios&estiramientos-Routine.html?rutina=trenInferior&tipo=entrenamiento');
                                } else {
                                    linkTren.setAttribute('href', 'Pages-ejercicios&estiramientos-Routine.html?rutina=trenSuperior&tipo=entrenamiento');
                                }
                                const tren = document.createElement('button');
                                tren.type = 'button';
                                tren.innerText = 'Tren Inferior';
                                tren.className = 'btn btn-success btn-sm';
                                linkTren.appendChild(tren);


                                let caja = document.getElementById("containerParrafo");
                                caja.appendChild(linkEstira);
                                caja.appendChild(linkCore);
                                caja.appendChild(linkTren);

                            } else {
                                const linkEstira = document.createElement('a');
                                linkEstira.setAttribute('href', 'Pages-ejercicios&estiramientos-Routine.html?rutina=postEntreno&tipo=estiramiento');
                                const estiramiento = document.createElement('button');
                                estiramiento.type = 'button';
                                estiramiento.innerText = 'Estiramiento para entrenar';
                                estiramiento.className = 'btn btn-success btn-sm';
                                linkEstira.appendChild(estiramiento);


                                const linkCore = document.createElement('a');
                                linkCore.setAttribute('href', 'Pages-ejercicios&estiramientos-Routine.html?rutina=core&tipo=entrenamiento');
                                const core = document.createElement('button');
                                core.type = 'button';
                                core.innerText = 'Core - Abdominales';
                                core.className = 'btn btn-success btn-sm';
                                linkCore.appendChild(core);



                                const linkFullBody = document.createElement('a');
                                linkFullBody.setAttribute('href', 'Pages-ejercicios&estiramientos-Routine.html?rutina=core&tipo=entrenamiento');
                                const fullbody = document.createElement('button');
                                fullbody.type = 'button';
                                fullbody.innerText = 'Full Body';
                                fullbody.className = 'btn btn-success btn-sm';
                                linkFullBody.appendChild(fullbody);


                                let caja = document.getElementById("containerParrafo");
                                caja.appendChild(linkEstira);
                                caja.appendChild(linkCore);
                                caja.appendChild(linkFullBody);
                            }
                        }
                        if (habilidad[3][0] > 0) {
                            cargarEjercicios("Velocidad", habilidad[3][diaentreno], tdreal[diaentreno]);
                        }
                        if (habilidad[4][0] > 0) {
                            cargarEjercicios("Agilidad", habilidad[4][diaentreno], tdreal[diaentreno]);
                        }
                        if (habilidad[5][0] > 0) {
                            console.log("Tiempo Habilidad: ", habilidad[5][diaentreno]);
                            console.log("Dia entreno : ", diaentreno);
                            cargarEjercicios("Resistencia", habilidad[5][diaentreno], tdreal[diaentreno]);
                        }
                    }
                    if (diasemana == 3) {
                        diaentreno = 0;
                        if (td[1] > 0) {
                            diaentreno++;
                        }
                        if (td[2] > 0) {
                            diaentreno++;
                        }
                        if (habilidad[0][0] > 0) {
                            cargarEjercicios(0, habilidad[0][diaentreno], tdreal[diaentreno]);
                        }
                        if (habilidad[1][0] > 0) {
                            cargarEjercicios(0, habilidad[1][diaentreno], tdreal[diaentreno]);
                        }
                        if (habilidad[2][0] > 0) {
                            cargarEjercicios(0, habilidad[2][diaentreno], tdreal[diaentreno]);
                        }
                        if (habilidad[3][0] > 0) {
                            cargarEjercicios(0, habilidad[3][diaentreno], tdreal[diaentreno]);
                        }
                        if (habilidad[4][0] > 0) {
                            cargarEjercicios(0, habilidad[4][diaentreno], tdreal[diaentreno]);
                        }
                        if (habilidad[5][0] > 0) {
                            cargarEjercicios(0, habilidad[5][diaentreno], tdreal[diaentreno]);
                        }
                    }
                    if (diasemana == 4) {
                        diaentreno = 0;
                        if (td[1] > 0) {
                            diaentreno++;
                        }
                        if (td[2] > 0) {
                            diaentreno++;
                        }
                        if (td[3] > 0) {
                            diaentreno++;
                        }
                        if (habilidad[0][0] > 0) {
                            cargarEjercicios(0, habilidad[0][diaentreno], tdreal[diaentreno]);
                        }
                        if (habilidad[1][0] > 0) {
                            cargarEjercicios(0, habilidad[1][diaentreno], tdreal[diaentreno]);
                        }
                        if (habilidad[2][0] > 0) {
                            cargarEjercicios(0, habilidad[2][diaentreno], tdreal[diaentreno]);
                        }
                        if (habilidad[3][0] > 0) {
                            cargarEjercicios(0, habilidad[3][diaentreno], tdreal[diaentreno]);
                        }
                        if (habilidad[4][0] > 0) {
                            cargarEjercicios(0, habilidad[4][diaentreno], tdreal[diaentreno]);
                        }
                        if (habilidad[5][0] > 0) {
                            cargarEjercicios(0, habilidad[5][diaentreno], tdreal[diaentreno]);
                        }
                    }
                    if (diasemana == 5) {
                        diaentreno = 0;
                        if (td[1] > 0) {
                            diaentreno++;
                        }
                        if (td[2] > 0) {
                            diaentreno++;
                        }
                        if (td[3] > 0) {
                            diaentreno++;
                        }
                        if (td[4] > 0) {
                            diaentreno++;
                        }
                        if (habilidad[0][0] > 0) {
                            cargarEjercicios(0, habilidad[0][diaentreno], tdreal[diaentreno]);
                        }
                        if (habilidad[1][0] > 0) {
                            cargarEjercicios(0, habilidad[1][diaentreno], tdreal[diaentreno]);
                        }
                        if (habilidad[2][0] > 0) {
                            cargarEjercicios(0, habilidad[2][diaentreno], tdreal[diaentreno]);
                        }
                        if (habilidad[3][0] > 0) {
                            cargarEjercicios(0, habilidad[3][diaentreno], tdreal[diaentreno]);
                        }
                        if (habilidad[4][0] > 0) {
                            cargarEjercicios(0, habilidad[4][diaentreno], tdreal[diaentreno]);
                        }
                        if (habilidad[5][0] > 0) {
                            cargarEjercicios(0, habilidad[5][diaentreno], tdreal[diaentreno]);
                        }
                    }
                    if (diasemana == 6) {
                        diaentreno = 0;
                        if (td[1] > 0) {
                            diaentreno++;
                        }
                        if (td[2] > 0) {
                            diaentreno++;
                        }
                        if (td[3] > 0) {
                            diaentreno++;
                        }
                        if (td[4] > 0) {
                            diaentreno++;
                        }
                        if (td[5] > 0) {
                            diaentreno++;
                        }
                        if (habilidad[0][0] > 0) {
                            cargarEjercicios(0, habilidad[0][diaentreno], tdreal[diaentreno]);
                        }
                        if (habilidad[1][0] > 0) {
                            cargarEjercicios(0, habilidad[1][diaentreno], tdreal[diaentreno]);
                        }
                        if (habilidad[2][0] > 0) {
                            cargarEjercicios(0, habilidad[2][diaentreno], tdreal[diaentreno]);
                        }
                        if (habilidad[3][0] > 0) {
                            cargarEjercicios(0, habilidad[3][diaentreno], tdreal[diaentreno]);
                        }
                        if (habilidad[4][0] > 0) {
                            cargarEjercicios(0, habilidad[4][diaentreno], tdreal[diaentreno]);
                        }
                        if (habilidad[5][0] > 0) {
                            cargarEjercicios(0, habilidad[5][diaentreno], tdreal[diaentreno]);
                        }
                    }
                    if (diasemana == 7) {
                        diaentreno = 0;
                        if (td[1] > 0) {
                            diaentreno++;
                        }
                        if (td[2] > 0) {
                            diaentreno++;
                        }
                        if (td[3] > 0) {
                            diaentreno++;
                        }
                        if (td[4] > 0) {
                            diaentreno++;
                        }
                        if (td[5] > 0) {
                            diaentreno++;
                        }
                        if (td[6] > 0) {
                            diaentreno++;
                        }
                        if (habilidad[0][0] > 0) {
                            cargarEjercicios(0, habilidad[0][diaentreno], tdreal[diaentreno]);
                        }
                        if (habilidad[1][0] > 0) {
                            cargarEjercicios(0, habilidad[1][diaentreno], tdreal[diaentreno]);
                        }
                        if (habilidad[2][0] > 0) {
                            cargarEjercicios(0, habilidad[2][diaentreno], tdreal[diaentreno]);
                        }
                        if (habilidad[3][0] > 0) {
                            cargarEjercicios(0, habilidad[3][diaentreno], tdreal[diaentreno]);
                        }
                        if (habilidad[4][0] > 0) {
                            cargarEjercicios(0, habilidad[4][diaentreno], tdreal[diaentreno]);
                        }
                        if (habilidad[5][0] > 0) {
                            cargarEjercicios(0, habilidad[5][diaentreno], tdreal[diaentreno]);
                        }
                    }
                });

        });
}
async function traerejercicios(habilidad, niveldeportivo, tiempohabilidad, tiempototal) {
    console.log(habilidad, niveldeportivo, tiempototal);
    let url = apiServer + "ejercicioCiclismo/ejercicios?habilidad=" + habilidad + "&nivel=" + niveldeportivo + "&tiempodefinitivo=" + tiempohabilidad + "";
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(ejercicios => {
            if (ejercicios != 0) {
                //-------------------------------------------
                //CABECERA ----------------------------------
                let habilidadesTrabajar = document.createElement("div");
                habilidadesTrabajar.className = "d-flex align-items-center justify-content-between pb-1";

                let habilidadcabecera = document.createElement("h5");
                habilidadcabecera.className = "card-title mb-0";
                habilidadcabecera.style = "color: #cbcbe2;";
                habilidadcabecera.innerText = "Habilidades a trabajar: ";

                let itemcabecera = document.createElement("spam");
                itemcabecera.className = "text-success";
                itemcabecera.style = "font-size: 15px;";
                itemcabecera.innerText = ejercicios[0].habilidad;
                habilidadcabecera.appendChild(itemcabecera);


                let imagen = document.createElement("img");
                imagen.style = "width: 10%;";
                imagen.srcset = "../../assets/img/icons/unicons/weight.png";


                habilidadesTrabajar.appendChild(habilidadcabecera);
                habilidadesTrabajar.appendChild(imagen);



                //-------------------------------------------

                let tiempoTrabajar = document.createElement("div");
                tiempoTrabajar.className = "d-flex align-items-center justify-content-between pt-1";

                let tiempototalcabezera = document.createElement("h6");
                tiempototalcabezera.className = "card-title mb-1";
                tiempototalcabezera.style = "color: #cbcbe2;";
                tiempototalcabezera.innerText = "Tiempo Total: ";

                let tiempocabecera = document.createElement("spam");
                tiempocabecera.className = "text-success";
                tiempocabecera.style = "font-size: 15px;";
                tiempocabecera.innerText = (tiempototal * 60) + " min";
                tiempototalcabezera.appendChild(tiempocabecera);


                let fecha = document.createElement("h6");
                fecha.className = "card-title mb-2";
                fecha.style = "color: #cbcbe2;";
                fecha.innerText = "Fecha: ";

                let fechadia = document.createElement("spam");
                fechadia.className = "text-success";
                fechadia.style = "font-size: 15px;";
                fechadia.innerText = new Date(Date.now()).toLocaleDateString();
                fecha.appendChild(fechadia);

                tiempoTrabajar.appendChild(tiempototalcabezera)
                tiempoTrabajar.appendChild(fecha)

                cabezeraprincipal = document.createElement("div")
                cabezeraprincipal.className = "mb-2";

                cabezeraprincipal.appendChild(habilidadesTrabajar);
                cabezeraprincipal.appendChild(tiempoTrabajar);

                cajaencabezado = document.getElementById("encabezadoEntreno");
                cajaencabezado.appendChild(cabezeraprincipal);


                ejercicios.forEach(ejercicio => {
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
                    // console.log("Nombre:", ejercicio.nombreEjercicio);


                    let series = document.createElement("spam");
                    series.className = "text-success";
                    series.style = "font-size: 15px;";
                    series.innerText = ejercicio.numSeries + " serie(s) ";
                    // console.log("Series:", ejercicio.numSeries);

                    let conector1 = document.createElement("spam");
                    conector1.innerText = " de ";


                    let repeticion = document.createElement("spam");
                    repeticion.className = "text-success";
                    repeticion.style = "font-size: 15px;";
                    repeticion.innerText = ejercicio.numRepeticiones + " repeticiones ";
                    // console.log("Repeticion:", ejercicio.numRepeticiones);

                    let conector2 = document.createElement("spam");
                    conector2.innerText = " de ";

                    let tiemporepeticion = document.createElement("spam");
                    tiemporepeticion.className = "text-success";
                    tiemporepeticion.style = "font-size: 15px;";
                    tiemporepeticion.innerText = ejercicio.tiempoDuracionRepeticion + " ";
                    // console.log("Duracion Repeticion:", ejercicio.tiempoDuracionRepeticion);

                    let magnitudrepeticion = document.createElement("spam");
                    magnitudrepeticion.className = "text-success";
                    magnitudrepeticion.style = "font-size: 15px;";
                    magnitudrepeticion.innerText = ejercicio.magnitud;
                    // console.log("Magnitud Repeticion:", ejercicio.magnitud);

                    let conector3 = document.createElement("spam");
                    conector3.innerText = " cada una, al ";

                    let intensidadrepeticion = document.createElement("spam");
                    intensidadrepeticion.className = "text-success";
                    intensidadrepeticion.style = "font-size: 15px;";
                    intensidadrepeticion.innerText = ejercicio.intesidadRepeticion + " de intensidad ";
                    // console.log("Intensidad Repeticion:", ejercicio.intesidadRepeticion);

                    let conector4 = document.createElement("spam");
                    conector4.innerText = " y manejando una cadencia entre ";

                    let cadenciarepeticion = document.createElement("spam");
                    cadenciarepeticion.className = "text-success";
                    cadenciarepeticion.style = "font-size: 15px;";
                    cadenciarepeticion.innerText = ejercicio.rpmRepeticion + " RPM ";
                    // console.log("Cadencia Repeticion:", ejercicio.rpmRepeticion);

                    let conector5 = document.createElement("spam");
                    conector5.innerText = " en ";

                    let terreno = document.createElement("spam");
                    terreno.className = "text-success";
                    terreno.style = "font-size: 15px;";
                    terreno.innerText = ejercicio.terreno;
                    // console.log("Terreno:", ejercicio.terreno);

                    let conector6 = document.createElement("spam");
                    conector6.innerText = " y ";

                    let posicionejercicio = document.createElement("spam");
                    posicionejercicio.className = "text-success";
                    posicionejercicio.style = "font-size: 15px;";
                    posicionejercicio.innerText = ejercicio.posicion;
                    // console.log("Posicion:", ejercicio.posicion);

                    let conector7 = document.createElement("spam");
                    conector7.innerText = " en pedales. Descansando ";

                    let tiempoDescRepeticion = document.createElement("spam");
                    tiempoDescRepeticion.className = "text-success";
                    tiempoDescRepeticion.style = "font-size: 15px;";
                    tiempoDescRepeticion.innerText = ejercicio.tiempoDescansoRepeticion + " ";
                    // console.log("Tiempo Desc Rep:", ejercicio.tiempoDescansoRepeticion);

                    let maginitudDescRepeticion = document.createElement("spam");
                    maginitudDescRepeticion.className = "text-success";
                    maginitudDescRepeticion.style = "font-size: 15px;";
                    maginitudDescRepeticion.innerText = ejercicio.magnitudDescanso;
                    // console.log("Magnitud Desc Rep:", ejercicio.magnitudDescanso);

                    let conector8 = document.createElement("spam");
                    conector8.innerText = " al ";

                    let intensidadDescRepeticion = document.createElement("spam");
                    intensidadDescRepeticion.className = "text-success";
                    intensidadDescRepeticion.style = "font-size: 15px;";
                    intensidadDescRepeticion.innerText = ejercicio.intesidadRepeticion + " de intensidad ";
                    // console.log("Int Desc Rep:", ejercicio.intesidadRepeticion);

                    let conector9 = document.createElement("spam");
                    conector9.innerText = " entre repeticiones y ";

                    let tiempoDescSeries = document.createElement("spam");
                    tiempoDescSeries.className = "text-success";
                    tiempoDescSeries.style = "font-size: 15px;";
                    tiempoDescSeries.innerText = ejercicio.tiempoDescansoSeries + " ";
                    // console.log("Tiempo Desc Series:", ejercicio.tiempoDescansoSeries);

                    let magnitudDescSeries = document.createElement("spam");
                    magnitudDescSeries.className = "text-success";
                    magnitudDescSeries.style = "font-size: 15px;";
                    magnitudDescSeries.innerText = ejercicio.magnitudSeries + " ";
                    // console.log("Magnitud Desc Series:", ejercicio.magnitudSeries);

                    let conector10 = document.createElement("spam");
                    conector10.innerText = " entre series. ";

                    cuerpo.appendChild(icono);
                    cuerpo.appendChild(descripcion);
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

            }

        });

}
function tiempoDisponibleDia() {
    let fechaActual = new Date(Date.now());
    diasemana = fechaActual.getDay();
    console.log("Dia de la semana:", diasemana);
    var td = [];
    let url = apiServer + "disponibilidad/perfil?idPerfil=" + localStorage.getItem('perfilamiento') + "";
    try {
        fetch(url)
            .then(response => response.json())
            .then(respuesta => {
                respuesta.forEach(d => {
                    td.push(d.domingo);
                    td.push(d.lunes);
                    td.push(d.martes);
                    td.push(d.miercoles);
                    td.push(d.jueves);
                    td.push(d.viernes);
                    td.push(d.sabado);
                });
                console.log("Tiempo del dia:", td[diasemana], " hr");
                if (td[diasemana] > 0) {
                    tiemposDefinitivos();
                } else {

                    const linkTR = document.createElement('a');
                    linkTR.setAttribute('href', 'psico-respiracion.html');

                    const tecResp = document.createElement('button');
                    tecResp.type = 'button';
                    tecResp.innerText = 'Tecnicas de Respiracion';
                    tecResp.className = 'btn btn-success btn-sm';

                    linkTR.appendChild(tecResp);

                    const linkECP = document.createElement('a');
                    linkECP.setAttribute('href', 'Pages-ejercicios&estiramientos-Routine.html?rutina=fullBody&tipo=estiramiento');

                    const fullBody = document.createElement('button');
                    fullBody.type = 'button';
                    fullBody.innerText = 'Estiramiento Full Body';
                    fullBody.className = 'btn btn-success btn-sm';

                    linkECP.appendChild(fullBody);

                    let caja = document.getElementById("containerParrafo");
                    caja.appendChild(linkTR);
                    caja.appendChild(linkECP);
                }
            });
    } catch (e) {
        console.log("Error: ", e)
    }

}
function minutaDiaria(tiempo) {
    try {
        let url = apiServer + "minutaDiariaCiclismo/dia?nivel=" + parseInt(localStorage.getItem('nivel')) + "&semanasTotales=" + parseInt(localStorage.getItem('semanas')) + "&diasDisponiblesSemana=" + parseInt(localStorage.getItem('dias')) + "&numeroSesion=" + parseInt(localStorage.getItem('sesion')) + "";
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(respuesta => {
                if (respuesta.length > 0) {
                    respuesta.forEach(elemento => {
                        // console.log("Disponibilidad semanal:", elemento);
                        if (elemento.prcntjPotencia > 0) {
                            localStorage.setItem('habilidad', 'Potencia');
                            traerejercicios(localStorage.getItem('habilidad'), parseInt(localStorage.getItem('nivel')), tiempo);
                        }
                        if (elemento.prcntjFuerza > 0) {
                            localStorage.setItem('habilidad', 'Fuerza');
                            traerejercicios(localStorage.getItem('habilidad'), parseInt(localStorage.getItem('nivel')), tiempo);
                        }
                        if (elemento.prcntjFortalecimiento > 0) {
                            if (tiempo < 30) {
                                const linkEstira = document.createElement('a');
                                linkEstira.setAttribute('href', 'Pages-ejercicios&estiramientos-Routine.html?rutina=postEntreno&tipo=estiramiento');
                                const estiramiento = document.createElement('button');
                                estiramiento.type = 'button';
                                estiramiento.innerText = 'Estiramiento para entrenar';
                                estiramiento.className = 'btn btn-success btn-sm';
                                linkEstira.appendChild(estiramiento);


                                const linkCore = document.createElement('a');
                                linkCore.setAttribute('href', 'Pages-ejercicios&estiramientos-Routine.html?rutina=core&tipo=entrenamiento');
                                const core = document.createElement('button');
                                core.type = 'button';
                                core.innerText = 'Core - Abdominales';
                                core.className = 'btn btn-success btn-sm';
                                linkCore.appendChild(core);


                                let caja = document.getElementById("containerParrafo");
                                caja.appendChild(linkEstira);
                                caja.appendChild(linkCore);
                            } else if (tiempo < 45) {
                                const linkEstira = document.createElement('a');
                                linkEstira.setAttribute('href', 'Pages-ejercicios&estiramientos-Routine.html?rutina=postEntreno&tipo=estiramiento');
                                const estiramiento = document.createElement('button');
                                estiramiento.type = 'button';
                                estiramiento.innerText = 'Estiramiento para entrenar';
                                estiramiento.className = 'btn btn-success btn-sm';
                                linkEstira.appendChild(estiramiento);


                                const linkCore = document.createElement('a');
                                linkCore.setAttribute('href', 'Pages-ejercicios&estiramientos-Routine.html?rutina=core&tipo=entrenamiento');
                                const core = document.createElement('button');
                                core.type = 'button';
                                core.innerText = 'Core - Abdominales';
                                core.className = 'btn btn-success btn-sm';
                                linkCore.appendChild(core);


                                const linkTren = document.createElement('a');
                                if ((parseInt(localStorage.getItem('sesion')) % 2) == 0) {
                                    linkTren.setAttribute('href', 'Pages-ejercicios&estiramientos-Routine.html?rutina=trenInferior&tipo=entrenamiento');
                                } else {
                                    linkTren.setAttribute('href', 'Pages-ejercicios&estiramientos-Routine.html?rutina=trenSuperior&tipo=entrenamiento');
                                }
                                const tren = document.createElement('button');
                                tren.type = 'button';
                                tren.innerText = 'Tren Inferior';
                                tren.className = 'btn btn-success btn-sm';
                                linkTren.appendChild(tren);


                                let caja = document.getElementById("containerParrafo");
                                caja.appendChild(linkEstira);
                                caja.appendChild(linkCore);
                                caja.appendChild(linkTren);

                            } else {
                                const linkEstira = document.createElement('a');
                                linkEstira.setAttribute('href', 'Pages-ejercicios&estiramientos-Routine.html?rutina=postEntreno&tipo=estiramiento');
                                const estiramiento = document.createElement('button');
                                estiramiento.type = 'button';
                                estiramiento.innerText = 'Estiramiento para entrenar';
                                estiramiento.className = 'btn btn-success btn-sm';
                                linkEstira.appendChild(estiramiento);


                                const linkCore = document.createElement('a');
                                linkCore.setAttribute('href', 'Pages-ejercicios&estiramientos-Routine.html?rutina=core&tipo=entrenamiento');
                                const core = document.createElement('button');
                                core.type = 'button';
                                core.innerText = 'Core - Abdominales';
                                core.className = 'btn btn-success btn-sm';
                                linkCore.appendChild(core);



                                const linkFullBody = document.createElement('a');
                                linkFullBody.setAttribute('href', 'Pages-ejercicios&estiramientos-Routine.html?rutina=core&tipo=entrenamiento');
                                const fullbody = document.createElement('button');
                                fullbody.type = 'button';
                                fullbody.innerText = 'Full Body';
                                fullbody.className = 'btn btn-success btn-sm';
                                linkFullBody.appendChild(fullbody);


                                let caja = document.getElementById("containerParrafo");
                                caja.appendChild(linkEstira);
                                caja.appendChild(linkCore);
                                caja.appendChild(linkFullBody);
                            }
                        }
                        if (elemento.prcntjVelocidad > 0) {
                            localStorage.setItem('habilidad', 'Velocidad');
                            traerejercicios(localStorage.getItem('habilidad'), parseInt(localStorage.getItem('nivel')), tiempo);
                        }
                        if (elemento.prcntjAgilidad > 0) {
                            localStorage.setItem('habilidad', 'Agilidad');
                            traerejercicios(localStorage.getItem('habilidad'), parseInt(localStorage.getItem('nivel')), tiempo);
                        }
                        if (elemento.prcntjResist > 0) {
                            localStorage.setItem('habilidad', 'Resistencia');
                            traerejercicios(localStorage.getItem('habilidad'), parseInt(localStorage.getItem('nivel')), tiempo);
                        }
                    });
                } else {
                    console.log("El objeto esta vacio");
                }
            });

    } catch (e) {
        notificacion("Function minutaDiaria - app-planDeportivo.js / Error: " + e)
    }
}
function cargarEjercicios(habilidad, thab, tiempodisponible) {
    console.log("cargar ejercicios");
    traerejercicios(habilidad, parseInt(localStorage.getItem("nivel")), thab, tiempodisponible);
}