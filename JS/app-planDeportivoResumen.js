
document.getElementById("Habilidad1ATrabajar").innerText="Fuerza";
document.getElementById("Habilidad2ATrabajar").innerText="Resistencia";
document.getElementById("TiempoTotalATrabajar").innerText="10 hrs";
document.getElementById("FechaDeTrabajo").innerText="18/12/2022";















// CREANDO ELEMENTOS
var parrafo = document.createElement("p");
var flecha = document.createElement("i");
var nombreEjercicio = document.createElement("span");
var realiza = document.createElement("span");
var series = document.createElement("span");
var Serie = document.createElement("span");
var de = document.createElement("span")
var repeticiones = document.createElement("span");
var repeticion = document.createElement("span");
var de2 = document.createElement("span")
var tiempoRepeticion = document.createElement("span");
var MagnitudTiempoRepeticion = document.createElement("span");
var cadaUna = document.createElement("span")
var PorcentajeIntensidad = document.createElement("span");
var intensidad = document.createElement("span");
var manejando = document.createElement("span");
var cadencia = document.createElement("span");
var MagnitudCadencia = document.createElement("span");
var en = document.createElement("span")
var terreno = document.createElement("span");
var y = document.createElement("span")
var posicion = document.createElement("span");
var espacio2 = document.createElement("br");
var descansando = document.createElement("span");
var tiempoDescansoReps = document.createElement("span");
var MagnitudTiempoDescansoReps = document.createElement("span");
var al = document.createElement("span")
var descansoIntensidad = document.createElement("span");
var MagnitudDescansoIntensidad = document.createElement("span");
var entreReps = document.createElement("span")
var descansoSeries = document.createElement("span");
var MagnitudDescansoSeries = document.createElement("span");
var entreSeries = document.createElement("span")









// CONTENIDO DE LOS CONTENEDORES
var contenidoNombreEjercicio = document.createTextNode("");
var RealizaContenido = document.createTextNode ("");

var contenidoSeries = document.createTextNode (" 1");

var SerieContenido = document.createTextNode (" serie(s)");
var deContenido = document.createTextNode (" X");

var contenidoRepeticiones = document.createTextNode (" 5");

var contenidoRepeticion = document.createTextNode (" Reps");
var de2Contenido = document.createTextNode (" X");
var tiempoRepeticionContenido = document.createTextNode (" 20");
var MagnitudTiempoRepeticionContenido = document.createTextNode (" min");
var cadaUnaContenido = document.createTextNode (" X");
var PorcentajeIntensidadContenido = document.createTextNode (" 80% ");
var intensidadContenido = document.createTextNode (" Int ");
var manejandoContenido = document.createTextNode (" X ");
var cadenciaContenido = document.createTextNode (" 75 - 80 ");
var MagnitudCadenciaContenido = document.createTextNode (" RPM ");
var enContenido = document.createTextNode (" X ");
var terrenoContenido = document.createTextNode (" terreno plano ");
var yContenido = document.createTextNode (" X ");
var posicionContenido = document.createTextNode (" parandote en pedales");
var descansandoContenido = document.createTextNode ("Descansa ");
var tiempoDescansoRepsContenido = document.createTextNode (" 10");
var MagnitudTiempoDescansoRepsContenido = document.createTextNode (" min");
var alContenido = document.createTextNode (" X "); 
var descansoIntensidadContenido = document.createTextNode (" 50% ");
var MagnitudDescansoIntensidadContenido = document.createTextNode (" Intensidad ");
var entreRepsContenido = document.createTextNode (" entre repeticiones y ");
var descansoSeriesContenido = document.createTextNode (" 5 ");
var MagnitudDescansoSeriesContenido = document.createTextNode (" minutos ");
var entreSeriesContenido = document.createTextNode (" entre series.");





// ESTILOS
flecha.className = "bx bxs-right-arrow text-success";
flecha.style = "font-size: 12px;";

nombreEjercicio.style = "color: #cbcbe2; font-weight: 400";

realiza.style = "color: #cbcbe2; font-weight: 400";

series.className = "text-success";
series.style = "font-size: 15px; font-weight: 600"; 

Serie.className ="text-success";
Serie.style = "font-size: 15px; font-weight: 600";

de.style = "color: #cbcbe2; font-weight: 400";

repeticiones.className = "text-success";
repeticiones.style = "font-size: 15px; font-weight: 600"; 

repeticion.className ="text-success";
repeticion.style = "font-size: 15px; font-weight: 600";

de2.style = "color: #cbcbe2; font-weight: 400";

tiempoRepeticion.className = "text-success";
tiempoRepeticion.style = "font-size: 15px; font-weight: 600"; 

MagnitudTiempoRepeticion.className ="text-success";
MagnitudTiempoRepeticion.style = "font-size: 15px; font-weight: 600";

cadaUna.style = "color: #cbcbe2; font-weight: 400";

PorcentajeIntensidad.className ="text-success";
PorcentajeIntensidad.style = "font-size: 15px; font-weight: 600";

intensidad.className ="text-success";
intensidad.style = "font-size: 15px; font-weight: 600"

manejando.style = "color: #cbcbe2; font-weight: 400";

cadencia.className = "text-success";
cadencia.style = "font-size: 15px; font-weight: 600"; 

MagnitudCadencia.className ="text-success";
MagnitudCadencia.style = "font-size: 15px; font-weight: 600";

en.style = "color: #cbcbe2; font-weight: 400";

terreno.className = "text-success";
terreno.style = "font-size: 15px; font-weight: 600"; 

y.style = "color: #cbcbe2; font-weight: 400";

posicion.className = "text-success";
posicion.style = "font-size: 15px; font-weight: 600"; 

descansando.style = "color: #cbcbe2; font-weight: 400";

tiempoDescansoReps.className = "text-success";
tiempoDescansoReps.style = "font-size: 15px; font-weight: 600"; 

MagnitudTiempoDescansoReps.className ="text-success";
MagnitudTiempoDescansoReps.style = "font-size: 15px; font-weight: 600";

al.style = "color: #cbcbe2; font-weight: 400";

descansoIntensidad.className = "text-success";
descansoIntensidad.style = "font-size: 15px; font-weight: 600"; 

MagnitudDescansoIntensidad.className ="text-success";
MagnitudDescansoIntensidad.style = "font-size: 15px; font-weight: 600";

entreReps.style = "color: #cbcbe2; font-weight: 400";

descansoSeries.className = "text-success";
descansoSeries.style = "font-size: 15px; font-weight: 600"; 

MagnitudDescansoSeries.className ="text-success";
MagnitudDescansoSeries.style = "font-size: 15px; font-weight: 600";

entreSeries.style = "color: #cbcbe2; font-weight: 400";















// AGREGANDO CONTENIDO HIJO A PADRES
nombreEjercicio.appendChild(contenidoNombreEjercicio);
realiza.appendChild(RealizaContenido);
Serie.appendChild(SerieContenido);
series.appendChild(contenidoSeries);
de.appendChild(deContenido);
repeticiones.appendChild(contenidoRepeticiones);
repeticion.appendChild(contenidoRepeticion);
de2.appendChild(de2Contenido);
tiempoRepeticion.appendChild(tiempoRepeticionContenido)
MagnitudTiempoRepeticion.appendChild(MagnitudTiempoRepeticionContenido);
cadaUna.appendChild(cadaUnaContenido);
PorcentajeIntensidad.appendChild(PorcentajeIntensidadContenido);
intensidad.appendChild(intensidadContenido);
manejando.appendChild(manejandoContenido);
cadencia.appendChild(cadenciaContenido);
MagnitudCadencia.appendChild(MagnitudCadenciaContenido);
en.appendChild(enContenido);
terreno.appendChild(terrenoContenido);
y.appendChild(yContenido);
posicion.appendChild(posicionContenido);

descansando.appendChild(descansandoContenido);
tiempoDescansoReps.appendChild(tiempoDescansoRepsContenido);
MagnitudTiempoDescansoReps.appendChild(MagnitudTiempoDescansoRepsContenido);
al.appendChild(alContenido);
descansoIntensidad.appendChild(descansoIntensidadContenido);
MagnitudDescansoIntensidad.appendChild(MagnitudDescansoIntensidadContenido);
entreReps.appendChild(entreRepsContenido);
descansoSeries.appendChild(descansoSeriesContenido);
MagnitudDescansoSeries.appendChild(MagnitudDescansoSeriesContenido);
entreSeries.appendChild(entreSeriesContenido);













parrafo.appendChild(flecha);
parrafo.appendChild(nombreEjercicio);

parrafo.appendChild(realiza);
parrafo.appendChild(series);
parrafo.appendChild(Serie);
parrafo.appendChild(de);
parrafo.appendChild(repeticiones);
parrafo.appendChild(repeticion);
parrafo.appendChild(de2);
parrafo.appendChild(tiempoRepeticion);
parrafo.appendChild(MagnitudTiempoRepeticion);
parrafo.appendChild(cadaUna);
parrafo.appendChild(PorcentajeIntensidad);
parrafo.appendChild(intensidad);
parrafo.appendChild(manejando);
parrafo.appendChild(cadencia);
parrafo.appendChild(MagnitudCadencia);
parrafo.appendChild(en);
parrafo.appendChild(terreno);
parrafo.appendChild(y);
parrafo.appendChild(posicion);
parrafo.appendChild(espacio2);

parrafo.appendChild(descansando);
parrafo.appendChild(tiempoDescansoReps);
parrafo.appendChild(MagnitudTiempoDescansoReps);
parrafo.appendChild(al);
parrafo.appendChild(descansoIntensidad);
parrafo.appendChild(MagnitudDescansoIntensidad);
parrafo.appendChild(entreReps);
parrafo.appendChild(descansoSeries);
parrafo.appendChild(MagnitudDescansoSeries);
parrafo.appendChild(entreSeries);




// INSERTANDO EN EL HTML
var contenedor = document.getElementById("containerParrafo");
contenedor.appendChild(parrafo);