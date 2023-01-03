window.onload = async () => {
    tiempoDisponibleDia()
}
async function traerejercicios(habilidad, niveldeportivo, tiempototal) {

    let url = apiServer + "ejercicioCiclismo/ejercicios?habilidad=" + habilidad + "&nivel=" + niveldeportivo + "&tiempodefinitivo=" + tiempototal + "";
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(respuesta => {

            console.log(respuesta[0]);
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
            itemcabecera.innerText = respuesta[0].habilidad;
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
            tiempocabecera.innerText = tiempototal + " min";
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
                conector1.innerText = " de ";


                let repeticion = document.createElement("spam");
                repeticion.className = "text-success";
                repeticion.style = "font-size: 15px;";
                repeticion.innerText = ejercicio.numRepeticiones + " repeticiones ";
                console.log("Repeticion:", ejercicio.numRepeticiones);

                let conector2 = document.createElement("spam");
                conector2.innerText = " de ";

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
                conector3.innerText = " cada una, al ";

                let intensidadrepeticion = document.createElement("spam");
                intensidadrepeticion.className = "text-success";
                intensidadrepeticion.style = "font-size: 15px;";
                intensidadrepeticion.innerText = ejercicio.intesidadRepeticion + " de intensidad ";
                console.log("Intensidad Repeticion:", ejercicio.intesidadRepeticion);

                let conector4 = document.createElement("spam");
                conector4.innerText = " y manejando una cadencia entre ";

                let cadenciarepeticion = document.createElement("spam");
                cadenciarepeticion.className = "text-success";
                cadenciarepeticion.style = "font-size: 15px;";
                cadenciarepeticion.innerText = ejercicio.rpmRepeticion + " RPM ";
                console.log("Cadencia Repeticion:", ejercicio.rpmRepeticion);

                let conector5 = document.createElement("spam");
                conector5.innerText = " en ";

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
                conector7.innerText = " en pedales. Descansando ";

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
                conector8.innerText = " al ";

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
        });
}
function tiempoDisponibleDia() {
    let fechaActual = new Date(Date.now());
    diasemana = fechaActual.getDay();
    var td = [];
    let url = apiServer + "disponibilidad/perfil?idPerfil=" + localStorage.getItem('perfilamiento') + "";
    try {
        fetch(url)
            .then(response => response.json())
            .then(respuesta => {
                respuesta.forEach(d => {
                    td.push(d.lunes);
                    td.push(d.martes);
                    td.push(d.miercoles);
                    td.push(d.jueves);
                    td.push(d.viernes);
                    td.push(d.sabado);
                    td.push(d.domingo);
                });
                console.log(td);
                if (td[diasemana + 1] > 0) {
                    let tiempodeldia = td[diasemana + 1] * 60;
                    console.log("TiEmPo:",tiempodeldia);
                    minutaDiaria(tiempodeldia);
                } else {
                   
                    const linkTR = document.createElement('a');
                    linkTR.setAttribute('href','psico-respiracion.html'); 

                    const tecResp = document.createElement('button');  
                    tecResp.type = 'button'; 
                    tecResp.innerText = 'Tecnicas de Respiracion'; 
                    tecResp.className = 'btn btn-success btn-sm';

                    linkTR.appendChild(tecResp); 

                    const linkECP = document.createElement('a');
                    linkECP.setAttribute('href','Pages-ejercicios&estiramientos-Routine.html?rutina=fullBody&tipo=estiramiento');

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
function minutaDiaria(tiempo){
    try {
        let url = apiServer + "minutaDiariaCiclismo/dia?nivel="+parseInt(localStorage.getItem('nivel'))+"&semanasTotales="+parseInt(localStorage.getItem('semanas'))+"&diasDisponiblesSemana="+parseInt(localStorage.getItem('dias'))+"&numeroSesion="+parseInt(localStorage.getItem('sesion'))+"";
        console.log(url);
        fetch(url)
        .then(response => response.json())
        .then(respuesta => {
            respuesta.forEach(elemento=>{
                if(elemento.prcntjPotencia>0){
                    localStorage.setItem('habilidad','Potencia')
                }
                if(elemento.prcntjFuerza>0){
                    localStorage.setItem('habilidad','Fuerza')
                }
                if(elemento.prcntjFortalecimiento>0){
                    localStorage.setItem('habilidad','Fortalecimiento')
                }
                if(elemento.prcntjVelocidad>0){
                    localStorage.setItem('habilidad','Velocidad')
                }
                if(elemento.prcntjAgilidad>0){
                    localStorage.setItem('habilidad','Agilidad')
                }
                if(elemento.prcntjResist>0){
                    localStorage.setItem('habilidad','Resistencia')
                }
            });
            traerejercicios(localStorage.getItem('habilidad'),parseInt(localStorage.getItem('nivel')),tiempo);
        });
        
    } catch (e) {
        notificacion("Function minutaDiaria - app-planDeportivo.js / Error: "+e)
    }
}