
// hhmmss(vrHoras, vrMin, vrSeg);
// minutos(hhmmss(4, 45, 45));
function hhmmss(h, m, s) {
    try {
        console.log('hh:mm:ss a Minutos');
        console.log(h, 'hr', m, 'min', s, 'seg');
        mh = h * 60;
        ms = s / 60
        mm = m + mh + ms
        console.log(mm, 'minutos');
        return mm;

    } catch (error) {
        console.log(error);
    }

}

// minutos(vrMinutos)
function minutos(m) {
    try {
        console.log('Minutos a hh:mm:ss');
        console.log(m, 'min');

        horas = Math.floor(m / 60);
        resHr = (m % 60)

        min = Math.floor(resHr);
        seg = ((resHr - min) * 60);

        console.log(horas, 'hr', min, 'min', seg, 'seg');

    } catch (error) {
        console.log(error);
    }
}


function startTrainingAndEndTraining(idPerfil) {
    let url = "https://localhost:7155/objetivoDeportivo/objetivoDeportivo?idPerfil=" + idPerfil + "";
    let fi;
    let ff;
    fetch(url)
        .then(response => response.json())
        .then(respuesta => {
            respuesta.forEach(dates => {
                fi = dates.fechaInicialEntren;
                // ff = dates.fechaObjetivo;
                fims = fi.split(" ")
                nfi = fims[0];
                hoy = new Date(nfi).getTime();
                ayer = new Date('2022', 9, 31).getTime()
                diaMiliSeg = 86400000;
                mesMiliSeg = 86400000 * 28;
                dif = ayer + diaMiliSeg
                mif = ayer + mesMiliSeg
                console.log(new Date(dif).toLocaleDateString())
                console.log(new Date(mif).toLocaleDateString())
            });
        });
}
// data = startTrainingAndEndTraining(1);
// console.log(data)



function fechaIncialEntrenamiento(idPerfil) {
    let url = "https://localhost:7155/objetivoDeportivo/objetivoDeportivo?idPerfil=" + idPerfil + "";
    fetch(url)
        .then(response => response.json())
        .then(resultado => {
            resultado.forEach(f => {
                [fe] = f.fechaInicialEntren.split(" ");
                [d, m, a] = fe.split("/")
                newDate = a + "/" + m + "/" + d + " " + "12:00:00"
                // console.log(fe)
                // console.log(newDate)
                newDate = new Date(newDate);
                currentlyDate = new Date();
                if (newDate < currentlyDate) {
                    console.log(newDate, 'es menor a', currentlyDate)
                } else {
                    console.log(newDate, 'no es menor', currentlyDate)
                }
                // console.log(newDate.getDate());
                // console.log(newDate.getMonth() + 1);
                // console.log(newDate.getFullYear());
            });
        });
}
// data = fechaIncialEntrenamiento(1);
// console.log("Data:", data);


function calcularDiferenciaDias(fechaIncioEntreno, fechaObjetivoDeport) {
    try {
        let fechaInicial = new Date(fechaIncioEntreno).getTime();
        let fechaFinal = new Date(fechaObjetivoDeport).getTime();
        let diff = fechaFinal - fechaInicial;
        dias = (diff / (1000 * 60 * 60 * 24));
        let semanas = (dias / 7).toFixed(0);
        return semanas;
    } catch (e) {
        console.log(e);
    }
}

//calcularFecha(fecha, dias a sumar a la fecha)
function calcularFecha(fecha, dias) {
    let date = fecha.split("-");
    let year = parseInt(date[0]);
    let mouth = parseInt(date[1]);
    let day = parseInt(date[2]);
    let dia = (day + dias);
    while (dia > 30) {
        dia = (dia) - 30;
        mouth = mouth + 1;
        if (mouth > 12) {
            year = year + 1;
        }
    }
    if (dia < 10) {
        dia = '0' + dia.toString();
    }
    if (mouth < 10) {
        mouth = '0' + mouth.toString();
    }
    let fechaFinal = (year.toString() + '-' + mouth.toString() + '-' + (dia).toString());
    return fechaFinal;
}

function cyclingTrainingResultWeek(idPerfilUser, evento, fechaIncioEntreno, fechaObjetivoDeport) {
    //Calculamos la cantidad de semanas disponibles para entrenar
    let cantidadSemanas = calcularDiferenciaDias(fechaIncioEntreno, fechaObjetivoDeport);
    console.log('Semanas:', cantidadSemanas);
    dias = 6;
    //Obtenemos los rangos de fecha semanales
    for (let i = 1; i <= cantidadSemanas; i++) {
        let oneWeek = calcularFecha(fechaIncioEntreno, dias);
        console.log('Semana ', i, ' :', fechaIncioEntreno, '/', oneWeek)
        fechaIncioEntreno = calcularFecha(fechaIncioEntreno, dias + 1);
    }

}
function cyclingTrainingResult(idPerfilUser, evento) {
    // fetch("https://localhost:7155/resultados/perfil?idPerfil="+idPerfilUser+"&evento="+evento+"")
    fetch("https://localhost:7155/resultados/listar")
        .then((response) => response.json())
        .then((resultadosEntrenamiento) => {

            let timePromWeek = 0;
            let timeAccumulatedWeek = 0;
            let timePromMouth = 0;
            let timeAccumulatedMouth = 0;
            let timePromMacro = 0;
            let timeAccumulatedMacro = 0;
            let timePromTotal = 0;
            let timeAccumulatedTotal = 0;

            let distancePromWeek = 0;
            let distanceAccumulatedWeek = 0;
            let distancePromMouth = 0;
            let distanceAccumulatedMouth = 0;
            let distancePromMacro = 0;
            let distanceAccumulatedMacro = 0;
            let distancePromTotal = 0;
            let distanceAccumulatedTotal = 0;

            let elevationPromWeek = 0;
            let elevationAccumulatedWeek = 0;
            let elevationPromMouth = 0;
            let elevationAccumulatedMouth = 0;
            let elevationPromMacro = 0;
            let elevationAccumulatedMacro = 0;
            let elevationPromTotal = 0;
            let elevationAccumulatedTotal = 0;

            let RPEPromWeek = 0;
            let RPEAccumulatedWeek = 0;
            let RPEPromMouth = 0;
            let RPEAccumulatedMouth = 0;
            let RPEPromMacro = 0;
            let RPEAccumulatedMacro = 0;
            let RPEPromTotal = 0;
            let RPEAccumulatedTotal = 0;

            let fcMaxWeek = 0;
            let fcMaxMonth = 0;
            let fcMaxMacro = 0;
            let fcMaxTotal = 0;

            let fcPromWeek = 0;
            let fcPromMonth = 0;
            let fcPromMacro = 0;
            let fcPromTotal = 0;

            let powerMaxWeek = 0;
            let powerMaxMonth = 0;
            let powerMaxMacro = 0;
            let powerMaxTotal = 0;

            let powerPromWeek = 0;
            let powerPromMonth = 0;
            let powerPromMacro = 0;
            let powerPromTotal = 0;

            let speedMaxWeek = 0;
            let speedMaxMonth = 0;
            let speedMaxMacro = 0;
            let speedMaxTotal = 0;

            let speedPromWeek = 0;
            let speedPromMonth = 0;
            let speedPromMacro = 0;
            let speedPromTotal = 0;

            let cadenceMaxWeek = 0;
            let cadenceMaxMonth = 0;
            let cadenceMaxMacro = 0;
            let cadenceMaxTotal = 0;

            let cadencePromWeek = 0;
            let cadencePromMonth = 0;
            let cadencePromMacro = 0;
            let cadencePromTotal = 0;

            let TSSPromWeek = 0;
            let TSSAccumulatedWeek = 0;
            let TSSPromMouth = 0;
            let TSSAccumulatedMouth = 0;
            let TSSPromMacro = 0;
            let TSSAccumulatedMacro = 0;
            let tssPlanteadoTotal = 0;
            let tssRealTotal = 0;

            let IFPromWeek = 0;
            let IFPromMonth = 0;
            let IFPromMacro = 0;
            let IFPlanteadoTotal = 0;
            let IFRealTotal = 0;

            let NPPromWeek = 0;
            let NPPromMonth = 0;
            let NPPromMacro = 0;
            let NPPlanteadoTotal = 0;
            let NPRealTotal = 0;

            let workPromWeek = 0;
            let workAccumulatedWeek = 0;
            let workPromMouth = 0;
            let workAccumulatedMouth = 0;
            let workPromMacro = 0;
            let workAccumulatedMacro = 0;
            let workPlanteadoTotal = 0;
            let workRealTotal = 0;


            // Frecuencia Cardiaca - Tiempo en Zonas
            let fcTimeZoneOnePromWeek = 0;
            let fcTimeZoneOneAccumulatedWeek = 0;
            let fcTimeZoneOnePromMouth = 0;
            let fcTimeZoneOneAccumulatedMouth = 0;
            let fcTimeZoneOnePromMacro = 0;
            let fcTimeZoneOneAccumulatedMacro = 0;
            let fcTimeZoneOnePromTotal = 0;
            let fcTimeZoneOneAccumulatedTotal = 0;

            let fcTimeZoneTwoPromWeek = 0;
            let fcTimeZoneTwoAccumulatedWeek = 0;
            let fcTimeZoneTwoPromMouth = 0;
            let fcTimeZoneTwoAccumulatedMouth = 0;
            let fcTimeZoneTwoPromMacro = 0;
            let fcTimeZoneTwoAccumulatedMacro = 0;
            let fcTimeZoneTwoPromTotal = 0;
            let fcTimeZoneTwoAccumulatedTotal = 0;

            let fcTimeZoneThreePromWeek = 0;
            let fcTimeZoneThreeAccumulatedWeek = 0;
            let fcTimeZoneThreePromMouth = 0;
            let fcTimeZoneThreeAccumulatedMouth = 0;
            let fcTimeZoneThreePromMacro = 0;
            let fcTimeZoneThreeAccumulatedMacro = 0;
            let fcTimeZoneThreePromTotal = 0;
            let fcTimeZoneThreeAccumulatedTotal = 0;

            let fcTimeZoneFourPromWeek = 0;
            let fcTimeZoneFourAccumulatedWeek = 0;
            let fcTimeZoneFourPromMouth = 0;
            let fcTimeZoneFourAccumulatedMouth = 0;
            let fcTimeZoneFourPromMacro = 0;
            let fcTimeZoneFourAccumulatedMacro = 0;
            let fcTimeZoneFourPromTotal = 0;
            let fcTimeZoneFourAccumulatedTotal = 0;

            let fcTimeZoneFivePromWeek = 0;
            let fcTimeZoneFiveAccumulatedWeek = 0;
            let fcTimeZoneFivePromMouth = 0;
            let fcTimeZoneFiveAccumulatedMouth = 0;
            let fcTimeZoneFivePromMacro = 0;
            let fcTimeZoneFiveAccumulatedMacro = 0;
            let fcTimeZoneFivePromTotal = 0;
            let fcTimeZoneFiveAccumulatedTotal = 0;

            let fcTimeZoneSixPromWeek = 0;
            let fcTimeZoneSixAccumulatedWeek = 0;
            let fcTimeZoneSixPromMouth = 0;
            let fcTimeZoneSixAccumulatedMouth = 0;
            let fcTimeZoneSixPromMacro = 0;
            let fcTimeZoneSixAccumulatedMacro = 0;
            let fcTimeZoneSixPromTotal = 0;
            let fcTimeZoneSixAccumulatedTotal = 0;

            // Potencia - Tiempo en Zonas
            let pwTimeZoneOnePromWeek = 0;
            let pwTimeZoneOneAccumulatedWeek = 0;
            let pwTimeZoneOnePromMouth = 0;
            let pwTimeZoneOneAccumulatedMouth = 0;
            let pwTimeZoneOnePromMacro = 0;
            let pwTimeZoneOneAccumulatedMacro = 0;
            let pwTimeZoneOnePromTotal = 0;
            let pwTimeZoneOneAccumulatedTotal = 0;

            let pwTimeZoneTwoPromWeek = 0;
            let pwTimeZoneTwoAccumulatedWeek = 0;
            let pwTimeZoneTwoPromMouth = 0;
            let pwTimeZoneTwoAccumulatedMouth = 0;
            let pwTimeZoneTwoPromMacro = 0;
            let pwTimeZoneTwoAccumulatedMacro = 0;
            let pwTimeZoneTwoPromTotal = 0;
            let pwTimeZoneTwoAccumulatedTotal = 0;

            let pwTimeZoneThreePromWeek = 0;
            let pwTimeZoneThreeAccumulatedWeek = 0;
            let pwTimeZoneThreePromMouth = 0;
            let pwTimeZoneThreeAccumulatedMouth = 0;
            let pwTimeZoneThreePromMacro = 0;
            let pwTimeZoneThreeAccumulatedMacro = 0;
            let pwTimeZoneThreePromTotal = 0;
            let pwTimeZoneThreeAccumulatedTotal = 0;

            let pwTimeZoneFourPromWeek = 0;
            let pwTimeZoneFourAccumulatedWeek = 0;
            let pwTimeZoneFourPromMouth = 0;
            let pwTimeZoneFourAccumulatedMouth = 0;
            let pwTimeZoneFourPromMacro = 0;
            let pwTimeZoneFourAccumulatedMacro = 0;
            let pwTimeZoneFourPromTotal = 0;
            let pwTimeZoneFourAccumulatedTotal = 0;

            let pwTimeZoneFivePromWeek = 0;
            let pwTimeZoneFiveAccumulatedWeek = 0;
            let pwTimeZoneFivePromMouth = 0;
            let pwTimeZoneFiveAccumulatedMouth = 0;
            let pwTimeZoneFivePromMacro = 0;
            let pwTimeZoneFiveAccumulatedMacro = 0;
            let pwTimeZoneFivePromTotal = 0;
            let pwTimeZoneFiveAccumulatedTotal = 0;

            let pwTimeZoneSixPromWeek = 0;
            let pwTimeZoneSixAccumulatedWeek = 0;
            let pwTimeZoneSixPromMouth = 0;
            let pwTimeZoneSixAccumulatedMouth = 0;
            let pwTimeZoneSixPromMacro = 0;
            let pwTimeZoneSixAccumulatedMacro = 0;
            let pwTimeZoneSixPromTotal = 0;
            let pwTimeZoneSixAccumulatedTotal = 0;

            // Velocidad - Tiempo en Zonas
            let spTimeZoneOnePromWeek = 0;
            let spTimeZoneOneAccumulatedWeek = 0;
            let spTimeZoneOnePromMouth = 0;
            let spTimeZoneOneAccumulatedMouth = 0;
            let spTimeZoneOnePromMacro = 0;
            let spTimeZoneOneAccumulatedMacro = 0;
            let spTimeZoneOnePromTotal = 0;
            let spTimeZoneOneAccumulatedTotal = 0;

            let spTimeZoneTwoPromWeek = 0;
            let spTimeZoneTwoAccumulatedWeek = 0;
            let spTimeZoneTwoPromMouth = 0;
            let spTimeZoneTwoAccumulatedMouth = 0;
            let spTimeZoneTwoPromMacro = 0;
            let spTimeZoneTwoAccumulatedMacro = 0;
            let spTimeZoneTwoPromTotal = 0;
            let spTimeZoneTwoAccumulatedTotal = 0;

            let spTimeZoneThreePromWeek = 0;
            let spTimeZoneThreeAccumulatedWeek = 0;
            let spTimeZoneThreePromMouth = 0;
            let spTimeZoneThreeAccumulatedMouth = 0;
            let spTimeZoneThreePromMacro = 0;
            let spTimeZoneThreeAccumulatedMacro = 0;
            let spTimeZoneThreePromTotal = 0;
            let spTimeZoneThreeAccumulatedTotal = 0;

            let spTimeZoneFourPromWeek = 0;
            let spTimeZoneFourAccumulatedWeek = 0;
            let spTimeZoneFourPromMouth = 0;
            let spTimeZoneFourAccumulatedMouth = 0;
            let spTimeZoneFourPromMacro = 0;
            let spTimeZoneFourAccumulatedMacro = 0;
            let spTimeZoneFourPromTotal = 0;
            let spTimeZoneFourAccumulatedTotal = 0;

            let spTimeZoneFivePromWeek = 0;
            let spTimeZoneFiveAccumulatedWeek = 0;
            let spTimeZoneFivePromMouth = 0;
            let spTimeZoneFiveAccumulatedMouth = 0;
            let spTimeZoneFivePromMacro = 0;
            let spTimeZoneFiveAccumulatedMacro = 0;
            let spTimeZoneFivePromTotal = 0;
            let spTimeZoneFiveAccumulatedTotal = 0;

            let spTimeZoneSixPromWeek = 0;
            let spTimeZoneSixAccumulatedWeek = 0;
            let spTimeZoneSixPromMouth = 0;
            let spTimeZoneSixAccumulatedMouth = 0;
            let spTimeZoneSixPromMacro = 0;
            let spTimeZoneSixAccumulatedMacro = 0;
            let spTimeZoneSixPromTotal = 0;
            let spTimeZoneSixAccumulatedTotal = 0;

            console.log("Tamaño del Arreglo:", resultadosEntrenamiento.length);
            let data = resultadosEntrenamiento.length;
            resultadosEntrenamiento.forEach(entrenamiento => {
                fie = entrenamiento.fechaEntrenamiento;
                fe = entrenamiento.fechaEvento; 
                console.log(entrenamiento);
                console.log('F1:',entrenamiento.fechaEntrenamiento);
                console.log('F2:',entrenamiento.fechaEvento);
          
                //======================================================================================================
                //====  TOTALES ========================================================================================
                //======================================================================================================
                timeAccumulatedTotal = timeAccumulatedTotal + parseFloat(entrenamiento.duracionEntrenamiento);
                distanceAccumulatedTotal = distanceAccumulatedTotal + parseFloat(entrenamiento.distanciaRecorrida);
                elevationAccumulatedTotal = elevationAccumulatedTotal + parseFloat(entrenamiento.desnivelPositivoAcumu);
                RPEAccumulatedTotal = RPEAccumulatedTotal + parseFloat(entrenamiento.desnivelPositivoAcumu);
                fcMaxTotal = fcMaxTotal + parseFloat(entrenamiento.fcMax);
                fcPromTotal = fcPromTotal + parseFloat(entrenamiento.fcPromedio);
                powerMaxTotal = powerMaxTotal + parseFloat(entrenamiento.potenciaMax);
                powerPromTotal = powerPromTotal + parseFloat(entrenamiento.potenciaPromedio);
                speedMaxTotal = speedMaxTotal + parseFloat(entrenamiento.velocidadMax);
                speedPromTotal = speedPromTotal + parseFloat(entrenamiento.velocidadPromedio);
                cadenceMaxTotal = cadenceMaxTotal + parseFloat(entrenamiento.cadenciaMax);
                cadencePromTotal = cadencePromTotal + parseFloat(entrenamiento.cadenciaPromedio);
                tssPlanteadoTotal = tssPlanteadoTotal + parseFloat(entrenamiento.tssPlanteado);
                tssRealTotal = tssRealTotal + parseFloat(entrenamiento.tssReal);
                IFPlanteadoTotal = IFPlanteadoTotal + parseFloat(entrenamiento.ifPlanteado);
                IFRealTotal = IFRealTotal + parseFloat(entrenamiento.ifReal);
                NPRealTotal = NPRealTotal + parseFloat(entrenamiento.npReal);
                workPlanteadoTotal = workPlanteadoTotal + parseFloat(entrenamiento.trabajoPlanteado);
                workRealTotal = workRealTotal + parseFloat(entrenamiento.trabajoReal);
                //Timepo en Zonas FC
                fcTimeZoneOneAccumulatedTotal = fcTimeZoneOneAccumulatedTotal + parseFloat(entrenamiento.fcZona1);
                fcTimeZoneTwoAccumulatedTotal = fcTimeZoneTwoAccumulatedTotal + parseFloat(entrenamiento.fcZona2);
                fcTimeZoneThreeAccumulatedTotal = fcTimeZoneThreeAccumulatedTotal + parseFloat(entrenamiento.fcZona3);
                fcTimeZoneFourAccumulatedTotal = fcTimeZoneFourAccumulatedTotal + parseFloat(entrenamiento.fcZona4);
                fcTimeZoneFiveAccumulatedTotal = fcTimeZoneFiveAccumulatedTotal + parseFloat(entrenamiento.fcZona5);
                fcTimeZoneSixAccumulatedTotal = fcTimeZoneSixAccumulatedTotal + parseFloat(entrenamiento.fcZona6);
                //Timepo en Zonas Potencia
                pwTimeZoneOneAccumulatedTotal = pwTimeZoneOneAccumulatedTotal + parseFloat(entrenamiento.potenciaZona1);
                pwTimeZoneTwoAccumulatedTotal = pwTimeZoneTwoAccumulatedTotal + parseFloat(entrenamiento.potenciaZona2);
                pwTimeZoneThreeAccumulatedTotal = pwTimeZoneThreeAccumulatedTotal + parseFloat(entrenamiento.potenciaZona3);
                pwTimeZoneFourAccumulatedTotal = pwTimeZoneFourAccumulatedTotal + parseFloat(entrenamiento.potenciaZona4);
                pwTimeZoneFiveAccumulatedTotal = pwTimeZoneFiveAccumulatedTotal + parseFloat(entrenamiento.potenciaZona5);
                pwTimeZoneSixAccumulatedTotal = pwTimeZoneSixAccumulatedTotal + parseFloat(entrenamiento.potenciaZona6);
                //Timepo en Zonas Velocidad
                spTimeZoneOneAccumulatedTotal = spTimeZoneOneAccumulatedTotal + parseFloat(entrenamiento.velocidadZona1);
                spTimeZoneTwoAccumulatedTotal = spTimeZoneTwoAccumulatedTotal + parseFloat(entrenamiento.velocidadZona2);
                spTimeZoneThreeAccumulatedTotal = spTimeZoneThreeAccumulatedTotal + parseFloat(entrenamiento.velocidadZona3);
                spTimeZoneFourAccumulatedTotal = spTimeZoneFourAccumulatedTotal + parseFloat(entrenamiento.velocidadZona4);
                spTimeZoneFiveAccumulatedTotal = spTimeZoneFiveAccumulatedTotal + parseFloat(entrenamiento.velocidadZona5);
                spTimeZoneSixAccumulatedTotal = spTimeZoneSixAccumulatedTotal + parseFloat(entrenamiento.velocidadZona6);

                //======================================================================================================
                //====  FIN TOTALES ====================================================================================
                //======================================================================================================


            });
            console.log('Tiempo Total:', timeAccumulatedTotal);
            console.log('Tiempo Promedio Total:', timeAccumulatedTotal / data);
            console.log('Distancia Total:', distanceAccumulatedTotal);
            console.log('Distancia Promedio Total:', distanceAccumulatedTotal / data);
            console.log('Elevacion Total:', elevationAccumulatedTotal);
            console.log('Elevacion Promedio Total:', elevationAccumulatedTotal / data);
            console.log('RPE Total:', RPEAccumulatedTotal);
            console.log('RPE Promedio Total:', RPEAccumulatedTotal / data);
            console.log('FCMax Promedio Total:', fcMaxTotal / data);
            console.log('FCPromedio Promedio Total:', fcPromTotal / data);
            console.log('PotenciaMax Promedio Total:', powerMaxTotal / data);
            console.log('PotenciaPromed Promedio Total:', powerPromTotal / data);
            console.log('VelocidadMax Promedio Total:', speedMaxTotal / data);
            console.log('VelocidadPromed Promedio Total:', speedPromTotal / data);
            console.log('CadenciaMax Promedio Total:', cadenceMaxTotal / data);
            console.log('CadenciaPromed Promedio Total:', cadencePromTotal / data);
            console.log('TSS Planteado Total:', tssPlanteadoTotal);
            console.log('TSS Planteado Promedio Total:', tssPlanteadoTotal / data);
            console.log('TSS Real Total:', tssRealTotal);
            console.log('TSS Real Promedio Total:', tssRealTotal / data);
            console.log('IF Planteado Total:', IFPlanteadoTotal / data);
            console.log('IF Real Total:', IFRealTotal / data);
            console.log('NP Real Total:', NPRealTotal / data);
            console.log('Trabajo Planteado Total:', workPlanteadoTotal);
            console.log('Trabajo Planteado Promedio Total:', workPlanteadoTotal / data);
            console.log('Trabajo Real Total:', workRealTotal);
            console.log('Trabajo Real Promedio Total:', workRealTotal / data);
            //Tiempos en Zonas FC
            console.log('FC/ Tiempo Zona1 Total:', fcTimeZoneOneAccumulatedTotal);
            console.log('FC/ Tiempo Promedio Zona1 Total:', fcTimeZoneOneAccumulatedTotal / data);
            console.log('FC/ Tiempo Zona2 Total:', fcTimeZoneTwoAccumulatedTotal);
            console.log('FC/ Tiempo Promedio Zona2 Total:', fcTimeZoneTwoAccumulatedTotal / data);
            console.log('FC/ Tiempo Zona3 Total:', fcTimeZoneThreeAccumulatedTotal);
            console.log('FC/ Tiempo Promedio Zona3 Total:', fcTimeZoneThreeAccumulatedTotal / data);
            console.log('FC/ Tiempo Zona4 Total:', fcTimeZoneFourAccumulatedTotal);
            console.log('FC/ Tiempo Promedio Zona4 Total:', fcTimeZoneFourAccumulatedTotal / data);
            console.log('FC/ Tiempo Zona5 Total:', fcTimeZoneFiveAccumulatedTotal);
            console.log('FC/ Tiempo Promedio Zona5 Total:', fcTimeZoneFiveAccumulatedTotal / data);
            console.log('FC/ Tiempo Zona6 Total:', fcTimeZoneSixAccumulatedTotal);
            console.log('FC/ Tiempo Promedio Zona6 Total:', fcTimeZoneSixAccumulatedTotal / data);
            //Tiempos en Zonas Potencia
            console.log('PW/ Tiempo Zona1 Total:', pwTimeZoneOneAccumulatedTotal);
            console.log('PW/ Tiempo Promedio Zona1 Total:', pwTimeZoneOneAccumulatedTotal / data);
            console.log('PW/ Tiempo Zona2 Total:', pwTimeZoneTwoAccumulatedTotal);
            console.log('PW/ Tiempo Promedio Zona2 Total:', pwTimeZoneTwoAccumulatedTotal / data);
            console.log('PW/ Tiempo Zona3 Total:', pwTimeZoneThreeAccumulatedTotal);
            console.log('PW/ Tiempo Promedio Zona3 Total:', pwTimeZoneThreeAccumulatedTotal / data);
            console.log('PW/ Tiempo Zona4 Total:', pwTimeZoneFourAccumulatedTotal);
            console.log('PW/ Tiempo Promedio Zona4 Total:', pwTimeZoneFourAccumulatedTotal / data);
            console.log('PW/ Tiempo Zona5 Total:', pwTimeZoneFiveAccumulatedTotal);
            console.log('PW/ Tiempo Promedio Zona5 Total:', pwTimeZoneFiveAccumulatedTotal / data);
            console.log('PW/ Tiempo Zona6 Total:', pwTimeZoneSixAccumulatedTotal);
            console.log('PW/ Tiempo Promedio Zona6 Total:', pwTimeZoneSixAccumulatedTotal / data);
            //Tiempos en Zonas Velocidad
            console.log('Speed/ Tiempo Zona1 Total:', spTimeZoneOneAccumulatedTotal);
            console.log('Speed/ Tiempo Promedio Zona1 Total:', spTimeZoneOneAccumulatedTotal / data);
            console.log('Speed/ Tiempo Zona2 Total:', spTimeZoneTwoAccumulatedTotal);
            console.log('Speed/ Tiempo Promedio Zona2 Total:', spTimeZoneTwoAccumulatedTotal / data);
            console.log('Speed/ Tiempo Zona3 Total:', spTimeZoneThreeAccumulatedTotal);
            console.log('Speed/ Tiempo Promedio Zona3 Total:', spTimeZoneThreeAccumulatedTotal / data);
            console.log('Speed/ Tiempo Zona4 Total:', spTimeZoneFourAccumulatedTotal);
            console.log('Speed/ Tiempo Promedio Zona4 Total:', spTimeZoneFourAccumulatedTotal / data);
            console.log('Speed/ Tiempo Zona5 Total:', spTimeZoneFiveAccumulatedTotal);
            console.log('Speed/ Tiempo Promedio Zona5 Total:', spTimeZoneFiveAccumulatedTotal / data);
            console.log('Speed/ Tiempo Zona6 Total:', spTimeZoneSixAccumulatedTotal);
            console.log('Speed/ Tiempo Promedio Zona6 Total:', spTimeZoneSixAccumulatedTotal / data);
        });
}
cyclingTrainingResult(1, "Ut Limited");
// cyclingTrainingResultWeek(1, "Ut Limited", fechaIncioEntreno, fechaObjetivoDeport);
