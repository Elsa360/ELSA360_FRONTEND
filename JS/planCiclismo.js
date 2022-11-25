
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
    // SUMAR DIAS A UNA FECHA 
    let url = "https://localhost:7155/objetivoDeportivo/objetivoDeportivo?idPerfil=" + idPerfil + "";
    let fi;
    let ff;
    fetch(url)
        .then(response => response.json())
        .then(respuesta => {
            respuesta.forEach(dates => {
                fi = dates.fechaInicialEntren;
                ff = dates.fechaObjetivo;
                fims = fi.split(" ")
                nfi = fims[0];
                hoy = new Date(nfi).getTime();
                ayer = new Date().getTime()
                diaMiliSeg = 86400000;
                mesMiliSeg = 86400000 * 28;
                dif = ayer + diaMiliSeg
                mif = ayer + mesMiliSeg
                // console.log(new Date(dif).toLocaleDateString())
                // console.log(new Date(mif).toLocaleDateString())
            });
        });
}
data = startTrainingAndEndTraining(1);
// console.log(data)


//Comparar dos fechas
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
                    // console.log(newDate, 'es menor a', currentlyDate)
                } else {
                    // console.log(newDate, 'no es menor', currentlyDate)
                }
                // console.log(newDate.getDate());
                // console.log(newDate.getMonth() + 1);
                // console.log(newDate.getFullYear());
            });
        });
}
data = fechaIncialEntrenamiento(1);
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
    fetch("https://" + apiServer + ":7155/resultados/listar")
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

            let TSSRealPromWeek = 0;
            let TSSRealAccumulatedWeek = 0;
            let TSSRealPromMouth = 0;
            let TSSRealAccumulatedMouth = 0;
            let TSSRealPromMacro = 0;
            let TSSRealAccumulatedMacro = 0;
            let tssRealTotal = 0;

            let TSSRaisedPromWeek = 0;            
            let TSSRaisedAccumulatedWeek = 0;           
            let TSSRaisedPromMouth = 0;            
            let TSSRaisedAccumulatedMouth = 0;      
            let TSSRaisedPromMacro = 0;           
            let TSSRaisedAccumulatedMacro = 0;
            let tssRaisedTotal = 0;
          

            let IFRealPromWeek = 0;
            let IFRealAccumulatedWeek = 0;
            let IFRealPromMouth = 0;
            let IFRealAccumulatedMouth = 0;
            let IFRealPromMacro = 0;
            let IFRealAccumulatedMacro = 0;
            let IFRealTotal = 0;

            let IFRaisedPromWeek = 0;
            let IFRaisedAccumulatedWeek = 0;
            let IFRaisedPromMouth = 0;
            let IFRaisedAccumulatedMouth = 0;
            let IFRaisedPromMacro = 0;
            let IFRaisedAccumulatedMacro = 0;
            let IFRaisedTotal = 0;

            let NPRealPromWeek = 0;
            let NPRealAccumulatedWeek = 0;
            let NPRealPromMouth = 0;
            let NPRealAccumulatedMouth = 0;
            let NPRealPromMacro = 0;
            let NPRealAccumulatedMacro = 0;
            let NPRealTotal = 0;


            let workRealPromWeek = 0;
            let workRealAccumulatedWeek = 0;
            let workRealPromMouth = 0;
            let workRealAccumulatedMouth = 0;
            let workRealPromMacro = 0;
            let workRealAccumulatedMacro = 0;
            let workRealTotal = 0;

            let workRaisedPromWeek = 0;
            let workRaisedAccumulatedWeek = 0;
            let workRaisedPromMouth = 0;
            let workRaisedAccumulatedMouth = 0;
            let workRaisedPromMacro = 0;
            let workRaisedAccumulatedMacro = 0;
            let workRaisedTotal = 0;


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


            let data = resultadosEntrenamiento.length;
            let diaMiliSeg = 86400000;
            let semanaMiliSeg = 86400000 * 7;
            let mesMiliSeg = 86400000 * 28;
            let limInf = 1;
            let limSup = 2;
            let banderaSemanal = 1;

            //Arreglos
            let arrayTime=[];
            let arrayDistance = []
            let arrayElevation = []
            let arrayRPE = []
            let arrayFCMax = []
            let arrayFCProm = []
            let arrayWattMax = []
            let arrayWattProm = []
            let arraySpeedMax = []
            let arraySpeedProm = []
            let arrayCadenceMax = []
            let arrayCadenceProm = []
            let arrayTSSPlantedo = []
            let arrayTSSReal = []
            let arrayIFPlanteado = []
            let arrayIFReal = []
            let arrayNPReal = []
            let arrayWorkPlanteado = []
            let arrayWorkReal = []

            let arrayFCZone1 = []
            let arrayFCZone2 = []
            let arrayFCZone3 = []
            let arrayFCZone4 = []
            let arrayFCZone5= []
            let arrayFCZone6 = []

            let arrayWattZone1 = []
            let arrayWattZone2 = []
            let arrayWattZone3 = []
            let arrayWattZone4 = []
            let arrayWattZone5= []
            let arrayWattZone6 = []

            let arraySpeedZone1 = []
            let arraySpeedZone2 = []
            let arraySpeedZone3 = []
            let arraySpeedZone4 = []
            let arraySpeedZone5= []
            let arraySpeedZone6 = []

            resultadosEntrenamiento.forEach(entrenamiento => {
                try {
                    // console.log(entrenamiento);
                    // let semanas = calcularDiferenciaDias(entrenamiento.fechaEntrenamiento, entrenamiento.fechaCompetencia);
                    // console.log('Total semanas: ', semanas);
                    dateTraining = entrenamiento.fechaInicioEntrenamiento;
                    dateTraining = new Date(dateTraining).getTime();
                    dateRegisterTraining = entrenamiento.fechaRegistro
                    dateRegisterTraining = new Date(dateRegisterTraining).getTime();

                    if (dateRegisterTraining <= (dateTraining + semanaMiliSeg)) {
                        //Contadores 
                        timeAccumulatedWeek = timeAccumulatedWeek + parseFloat(entrenamiento.duracionEntrenamiento);
                        distanceAccumulatedWeek = distanceAccumulatedWeek + parseFloat(entrenamiento.distanciaRecorrida);
                        elevationAccumulatedWeek = elevationAccumulatedWeek + parseFloat(entrenamiento.desnivelPositivoAcumu);
                        RPEAccumulatedWeek = RPEAccumulatedWeek + parseFloat(entrenamiento.desnivelPositivoAcumu);
                        fcMaxWeek = fcMaxWeek + parseFloat(entrenamiento.fcMax);
                        fcPromWeek = fcPromWeek + parseFloat(entrenamiento.fcPromedio);
                        powerMaxWeek = powerMaxWeek + parseFloat(entrenamiento.potenciaMax);
                        powerPromWeek = powerPromWeek + parseFloat(entrenamiento.potenciaPromedio);
                        speedMaxWeek = speedMaxWeek + parseFloat(entrenamiento.velocidadMax);
                        speedPromWeek = speedPromWeek + parseFloat(entrenamiento.velocidadPromedio);
                        cadenceMaxWeek = cadenceMaxWeek + parseFloat(entrenamiento.cadenciaMax);
                        cadencePromWeek = cadencePromWeek + parseFloat(entrenamiento.cadenciaPromedio);
                        
                        TSSRealPromWeek = TSSRealPromWeek + parseFloat(entrenamiento.tssReal);
                        TSSRaisedPromWeek = TSSRaisedPromWeek + parseFloat(entrenamiento.tssPromedio);
                        IFRealAccumulatedWeek = IFRealAccumulatedWeek + parseFloat(entrenamiento.ifReal);
                        IFRaisedAccumulatedWeek = IFRaisedAccumulatedWeek + parseFloat(entrenamiento.ifPromedio);
                        NPRealAccumulatedWeek = NPRealAccumulatedWeek + parseFloat(entrenamiento.npReal);
                        workRealAccumulatedWeek = workRealAccumulatedWeek + parseFloat(entrenamiento.trabajoReal);
                        workRaisedAccumulatedWeek = workRaisedAccumulatedWeek + parseFloat(entrenamiento.trabajoPlanteado);


                        fcTimeZoneOneAccumulatedWeek = fcTimeZoneOneAccumulatedWeek + parseFloat(entrenamiento.fcZona1);
                        fcTimeZoneTwoAccumulatedWeek = fcTimeZoneTwoAccumulatedWeek + parseFloat(entrenamiento.fcZona2);
                        fcTimeZoneThreeAccumulatedWeek = fcTimeZoneThreeAccumulatedWeek + parseFloat(entrenamiento.fcZona3);
                        fcTimeZoneFourAccumulatedWeek = fcTimeZoneFourAccumulatedWeek + parseFloat(entrenamiento.fcZona4);
                        fcTimeZoneFiveAccumulatedWeek = fcTimeZoneFiveAccumulatedWeek + parseFloat(entrenamiento.fcZona5);
                        fcTimeZoneSixAccumulatedWeek = fcTimeZoneSixAccumulatedWeek + parseFloat(entrenamiento.fcZona6);

                        pwTimeZoneOneAccumulatedWeek = pwTimeZoneOneAccumulatedWeek + parseFloat(entrenamiento.potenciaZona1);
                        pwTimeZoneTwoAccumulatedWeek = pwTimeZoneTwoAccumulatedWeek + parseFloat(entrenamiento.potenciaZona2);
                        pwTimeZoneThreeAccumulatedWeek = pwTimeZoneThreeAccumulatedWeek + parseFloat(entrenamiento.potenciaZona3);
                        pwTimeZoneFourAccumulatedWeek = pwTimeZoneFourAccumulatedWeek + parseFloat(entrenamiento.potenciaZona4);
                        pwTimeZoneFiveAccumulatedWeek = pwTimeZoneFiveAccumulatedWeek + parseFloat(entrenamiento.potenciaZona5);
                        pwTimeZoneSixAccumulatedWeek = pwTimeZoneSixAccumulatedWeek + parseFloat(entrenamiento.potenciaZona6);

                        spTimeZoneOneAccumulatedWeek = spTimeZoneOneAccumulatedWeek + parseFloat(entrenamiento.velocidadZona1);
                        spTimeZoneTwoAccumulatedWeek = spTimeZoneTwoAccumulatedWeek + parseFloat(entrenamiento.velocidadZona2);
                        spTimeZoneThreeAccumulatedWeek = spTimeZoneThreeAccumulatedWeek + parseFloat(entrenamiento.velocidadZona3);
                        spTimeZoneFourAccumulatedWeek = spTimeZoneFourAccumulatedWeek + parseFloat(entrenamiento.velocidadZona4);
                        spTimeZoneFiveAccumulatedWeek = spTimeZoneFiveAccumulatedWeek + parseFloat(entrenamiento.velocidadZona5);
                        spTimeZoneSixAccumulatedWeek = spTimeZoneSixAccumulatedWeek + parseFloat(entrenamiento.velocidadZona6);







                        //Insercion de los datos en los arreglos
                        arrayTime[0] = timeAccumulatedTotal;
                        arrayDistance[0] = distanceAccumulatedWeek;
                        arrayElevation[0] = elevationAccumulatedWeek;
                        arrayRPE[0] = RPEAccumulatedWeek;

                        arrayFCMax[0] = fcMaxWeek;
                        arrayFCProm[0] = fcPromWeek;

                        arrayWattMax[0] = fcMaxWeek;
                        arrayWattProm[0] = fcPromWeek;

                        arraySpeedMax[0] = speedMaxWeek;
                        arraySpeedProm[0] = speedPromWeek;

                        arrayCadenceMax[0] = cadenceMaxWeek;
                        arrayCadenceProm[0] = cadencePromWeek;

                        arrayTSSReal[0] = TSSRealPromWeek;
                        arrayTSSPlantedo[0] = TSSRaisedPromWeek;
                        arrayIFReal[0] = IFRealAccumulatedWeek;
                        arrayIFPlanteado[0] = IFRaisedAccumulatedWeek;
                        arrayNPReal[0] = NPRealAccumulatedWeek  ;
                        arrayWorkReal[0] = workRealAccumulatedWeek;
                        arrayWorkPlanteado[0] = workRaisedAccumulatedWeek;

                        arrayFCZone1[0] = fcTimeZoneOneAccumulatedWeek;
                        arrayFCZone2[0] = fcTimeZoneTwoAccumulatedWeek;
                        arrayFCZone3[0] = fcTimeZoneThreeAccumulatedWeek;
                        arrayFCZone4[0] = fcTimeZoneFourAccumulatedWeek;
                        arrayFCZone5[0] = fcTimeZoneFiveAccumulatedWeek;
                        arrayFCZone6[0] = fcTimeZoneSixAccumulatedWeek;

                        arrayWattZone1[0] = pwTimeZoneOneAccumulatedWeek;
                        arrayWattZone2[0] = pwTimeZoneTwoAccumulatedWeek;
                        arrayWattZone3[0] = pwTimeZoneThreeAccumulatedWeek;
                        arrayWattZone4[0] = pwTimeZoneFourAccumulatedWeek;
                        arrayWattZone5[0] = pwTimeZoneFiveAccumulatedWeek;
                        arrayWattZone6[0] = pwTimeZoneSixAccumulatedWeek;

                        arraySpeedZone1[0] = pwTimeZoneOneAccumulatedWeek;
                        arraySpeedZone2[0] = pwTimeZoneTwoAccumulatedWeek;
                        arraySpeedZone3[0] = pwTimeZoneThreeAccumulatedWeek;
                        arraySpeedZone4[0] = pwTimeZoneFourAccumulatedWeek;
                        arraySpeedZone5[0] = pwTimeZoneFiveAccumulatedWeek;
                        arraySpeedZone6[0] = pwTimeZoneSixAccumulatedWeek;


                        // console.log('S1: ', dateRegisterTraining);
                    }
                    if ((dateRegisterTraining > (dateTraining + (semanaMiliSeg))) && (dateRegisterTraining <= (dateTraining + (limSup * semanaMiliSeg)))) {
                        if (banderaSemanal === 1) {
                            banderaSemanal = 2;
                            distanceAccumulatedWeek = 0;
                        }
                        distanceAccumulatedWeek = distanceAccumulatedWeek + parseFloat(entrenamiento.distanciaRecorrida);
                        arrayDistance[1] = distanceAccumulatedWeek;
                        // console.log('S2: ', dateRegisterTraining);
                    }
                    if ((dateRegisterTraining > (dateTraining + ((semanaMiliSeg) * (limInf + 1)))) && (dateRegisterTraining <= (dateTraining + ((limSup + 1) * semanaMiliSeg)))) {
                        if (banderaSemanal === 2) {
                            banderaSemanal = 3;
                            distanceAccumulatedWeek = 0;
                        }
                        distanceAccumulatedWeek = distanceAccumulatedWeek + parseFloat(entrenamiento.distanciaRecorrida);
                        arrayDistance[2] = distanceAccumulatedWeek;
                        // console.log('S3: ', dateRegisterTraining);
                    }
                    if ((dateRegisterTraining > (dateTraining + ((semanaMiliSeg) * (limInf + 2)))) && (dateRegisterTraining <= (dateTraining + ((limSup + 2) * semanaMiliSeg)))) {
                        if (banderaSemanal === 3) {
                            banderaSemanal = 4;
                            distanceAccumulatedWeek = 0;
                        }
                        distanceAccumulatedWeek = distanceAccumulatedWeek + parseFloat(entrenamiento.distanciaRecorrida);
                        arrayDistance[3] = distanceAccumulatedWeek;
                        // console.log('S4: ', dateRegisterTraining);
                    }
                    if ((dateRegisterTraining > (dateTraining + ((semanaMiliSeg) * (limInf + 3)))) && (dateRegisterTraining <= (dateTraining + ((limSup + 3) * semanaMiliSeg)))) {
                        if (banderaSemanal === 4) {
                            banderaSemanal = 5;
                            distanceAccumulatedWeek = 0;
                        }
                        distanceAccumulatedWeek = distanceAccumulatedWeek + parseFloat(entrenamiento.distanciaRecorrida);
                        arrayDistance[4] = distanceAccumulatedWeek;
                        // console.log('S5: ', dateRegisterTraining);
                    }
                    if ((dateRegisterTraining > (dateTraining + ((semanaMiliSeg) * (limInf + 4)))) && (dateRegisterTraining <= (dateTraining + ((limSup + 4) * semanaMiliSeg)))) {
                        if (banderaSemanal === 5) {
                            banderaSemanal = 6;
                            distanceAccumulatedWeek = 0;
                        }
                        distanceAccumulatedWeek = distanceAccumulatedWeek + parseFloat(entrenamiento.distanciaRecorrida);
                        arrayDistance[5] = distanceAccumulatedWeek;
                        // console.log('S6: ', dateRegisterTraining);
                    }
                    if ((dateRegisterTraining > (dateTraining + ((semanaMiliSeg) * (limInf + 5)))) && (dateRegisterTraining <= (dateTraining + ((limSup + 5) * semanaMiliSeg)))) {
                        if (banderaSemanal === 6) {
                            banderaSemanal = 7;
                            distanceAccumulatedWeek = 0;
                        }
                        distanceAccumulatedWeek = distanceAccumulatedWeek + parseFloat(entrenamiento.distanciaRecorrida);
                        arrayDistance[6] = distanceAccumulatedWeek;
                        // console.log('S7: ', dateRegisterTraining);
                    }
                    if ((dateRegisterTraining > (dateTraining + ((semanaMiliSeg) * (limInf + 6)))) && (dateRegisterTraining <= (dateTraining + ((limSup + 6) * semanaMiliSeg)))) {
                        if (banderaSemanal === 6) {
                            banderaSemanal = 7;
                            distanceAccumulatedWeek = 0;
                        }
                        distanceAccumulatedWeek = distanceAccumulatedWeek + parseFloat(entrenamiento.distanciaRecorrida);
                        arrayDistance[7] = distanceAccumulatedWeek;
                        // console.log('S8: ', dateRegisterTraining);
                    }
                    if ((dateRegisterTraining > (dateTraining + ((semanaMiliSeg) * (limInf + 7)))) && (dateRegisterTraining <= (dateTraining + ((limSup + 7) * semanaMiliSeg)))) {
                        if (banderaSemanal === 7) {
                            banderaSemanal = 8;
                            distanceAccumulatedWeek = 0;
                        }
                        distanceAccumulatedWeek = distanceAccumulatedWeek + parseFloat(entrenamiento.distanciaRecorrida);
                        arrayDistance[8] = distanceAccumulatedWeek;
                        // console.log('S9: ', dateRegisterTraining);
                    }
                    if ((dateRegisterTraining > (dateTraining + ((semanaMiliSeg) * (limInf + 8)))) && (dateRegisterTraining <= (dateTraining + ((limSup + 8) * semanaMiliSeg)))) {
                        if (banderaSemanal === 8) {
                            banderaSemanal = 9;
                            distanceAccumulatedWeek = 0;
                        }
                        distanceAccumulatedWeek = distanceAccumulatedWeek + parseFloat(entrenamiento.distanciaRecorrida);
                        arrayDistance[9] = distanceAccumulatedWeek;
                        // console.log('S10: ', dateRegisterTraining);
                    }
                    if ((dateRegisterTraining > (dateTraining + ((semanaMiliSeg) * (limInf + 9)))) && (dateRegisterTraining <= (dateTraining + ((limSup + 9) * semanaMiliSeg)))) {
                        if (banderaSemanal === 9) {
                            banderaSemanal = 10;
                            distanceAccumulatedWeek = 0;
                        }
                        distanceAccumulatedWeek = distanceAccumulatedWeek + parseFloat(entrenamiento.distanciaRecorrida);
                        arrayDistance[10] = distanceAccumulatedWeek;
                        // console.log('S11: ', dateRegisterTraining);
                    }
                    if ((dateRegisterTraining > (dateTraining + ((semanaMiliSeg) * (limInf + 10)))) && (dateRegisterTraining <= (dateTraining + ((limSup + 10) * semanaMiliSeg)))) {
                        if (banderaSemanal === 10) {
                            banderaSemanal = 11;
                            distanceAccumulatedWeek = 0;
                        }
                        distanceAccumulatedWeek = distanceAccumulatedWeek + parseFloat(entrenamiento.distanciaRecorrida);
                        arrayDistance[11] = distanceAccumulatedWeek;
                        // console.log('S12: ', dateRegisterTraining);
                    }
                    if ((dateRegisterTraining > (dateTraining + ((semanaMiliSeg) * (limInf + 11)))) && (dateRegisterTraining <= (dateTraining + ((limSup + 11) * semanaMiliSeg)))) {
                        if (banderaSemanal === 11) {
                            banderaSemanal = 12;
                            distanceAccumulatedWeek = 0;
                        }
                        distanceAccumulatedWeek = distanceAccumulatedWeek + parseFloat(entrenamiento.distanciaRecorrida);
                        arrayDistance[12] = distanceAccumulatedWeek;
                        // console.log('S13: ', dateRegisterTraining);
                    }
                    if ((dateRegisterTraining > (dateTraining + ((semanaMiliSeg) * (limInf + 12)))) && (dateRegisterTraining <= (dateTraining + ((limSup + 12) * semanaMiliSeg)))) {
                        if (banderaSemanal === 12) {
                            banderaSemanal = 13;
                            distanceAccumulatedWeek = 0;
                        }
                        distanceAccumulatedWeek = distanceAccumulatedWeek + parseFloat(entrenamiento.distanciaRecorrida);
                        arrayDistance[13] = distanceAccumulatedWeek;
                        // console.log('S14: ', dateRegisterTraining);
                    }
                    if ((dateRegisterTraining > (dateTraining + ((semanaMiliSeg) * (limInf + 13)))) && (dateRegisterTraining <= (dateTraining + ((limSup + 13) * semanaMiliSeg)))) {
                        if (banderaSemanal === 13) {
                            banderaSemanal = 14;
                            distanceAccumulatedWeek = 0;
                        }
                        distanceAccumulatedWeek = distanceAccumulatedWeek + parseFloat(entrenamiento.distanciaRecorrida);
                        arrayDistance[14] = distanceAccumulatedWeek;
                        // console.log('S15: ', dateRegisterTraining);
                    }
                    if ((dateRegisterTraining > (dateTraining + ((semanaMiliSeg) * (limInf + 14)))) && (dateRegisterTraining <= (dateTraining + ((limSup + 14) * semanaMiliSeg)))) {
                        if (banderaSemanal === 14) {
                            banderaSemanal = 15;
                            distanceAccumulatedWeek = 0;
                        }
                        distanceAccumulatedWeek = distanceAccumulatedWeek + parseFloat(entrenamiento.distanciaRecorrida);
                        arrayDistance[15] = distanceAccumulatedWeek;
                        // console.log('S16: ', dateRegisterTraining);
                    }
                    if ((dateRegisterTraining > (dateTraining + ((semanaMiliSeg) * (limInf + 15)))) && (dateRegisterTraining <= (dateTraining + ((limSup + 15) * semanaMiliSeg)))) {
                        if (banderaSemanal === 15) {
                            banderaSemanal = 16;
                            distanceAccumulatedWeek = 0;
                        }
                        distanceAccumulatedWeek = distanceAccumulatedWeek + parseFloat(entrenamiento.distanciaRecorrida);
                        arrayDistance[16] = distanceAccumulatedWeek;
                        // console.log('S17: ', dateRegisterTraining);
                    }
                    if ((dateRegisterTraining > (dateTraining + ((semanaMiliSeg) * (limInf + 16)))) && (dateRegisterTraining <= (dateTraining + ((limSup + 16) * semanaMiliSeg)))) {
                        if (banderaSemanal === 16) {
                            banderaSemanal = 17;
                            distanceAccumulatedWeek = 0;
                        }
                        distanceAccumulatedWeek = distanceAccumulatedWeek + parseFloat(entrenamiento.distanciaRecorrida);
                        arrayDistance[17] = distanceAccumulatedWeek;
                        // console.log('S18: ', dateRegisterTraining);
                    }
                    if ((dateRegisterTraining > (dateTraining + ((semanaMiliSeg) * (limInf + 17)))) && (dateRegisterTraining <= (dateTraining + ((limSup + 17) * semanaMiliSeg)))) {
                        if (banderaSemanal === 17) {
                            banderaSemanal = 18;
                            distanceAccumulatedWeek = 0;
                        }
                        distanceAccumulatedWeek = distanceAccumulatedWeek + parseFloat(entrenamiento.distanciaRecorrida);
                        arrayDistance[18] = distanceAccumulatedWeek;
                        // console.log('S19: ', dateRegisterTraining);
                    }
                    if ((dateRegisterTraining > (dateTraining + ((semanaMiliSeg) * (limInf + 18)))) && (dateRegisterTraining <= (dateTraining + ((limSup + 18) * semanaMiliSeg)))) {
                        if (banderaSemanal === 18) {
                            banderaSemanal = 19;
                            distanceAccumulatedWeek = 0;
                        }
                        distanceAccumulatedWeek = distanceAccumulatedWeek + parseFloat(entrenamiento.distanciaRecorrida);
                        arrayDistance[19] = distanceAccumulatedWeek;
                        // console.log('S20: ', dateRegisterTraining);
                    }
                    if ((dateRegisterTraining > (dateTraining + ((semanaMiliSeg) * (limInf + 19)))) && (dateRegisterTraining <= (dateTraining + ((limSup + 19) * semanaMiliSeg)))) {
                        if (banderaSemanal === 19) {
                            banderaSemanal = 20;
                            distanceAccumulatedWeek = 0;
                        }
                        distanceAccumulatedWeek = distanceAccumulatedWeek + parseFloat(entrenamiento.distanciaRecorrida);
                        arrayDistance[20] = distanceAccumulatedWeek;
                        // console.log('S21: ', dateRegisterTraining);
                    }
                    if ((dateRegisterTraining > (dateTraining + ((semanaMiliSeg) * (limInf + 20)))) && (dateRegisterTraining <= (dateTraining + ((limSup + 20) * semanaMiliSeg)))) {
                        if (banderaSemanal === 20) {
                            banderaSemanal = 21;
                            distanceAccumulatedWeek = 0;
                        }
                        distanceAccumulatedWeek = distanceAccumulatedWeek + parseFloat(entrenamiento.distanciaRecorrida);
                        arrayDistance[21] = distanceAccumulatedWeek;
                        // console.log('S22: ', dateRegisterTraining);
                    }
                    if ((dateRegisterTraining > (dateTraining + ((semanaMiliSeg) * (limInf + 21)))) && (dateRegisterTraining <= (dateTraining + ((limSup + 21) * semanaMiliSeg)))) {
                        if (banderaSemanal === 21) {
                            banderaSemanal = 22;
                            distanceAccumulatedWeek = 0;
                        }
                        distanceAccumulatedWeek = distanceAccumulatedWeek + parseFloat(entrenamiento.distanciaRecorrida);
                        arrayDistance[22] = distanceAccumulatedWeek;
                        // console.log('S23: ', dateRegisterTraining);
                    }
                    if ((dateRegisterTraining > (dateTraining + ((semanaMiliSeg) * (limInf + 22)))) && (dateRegisterTraining <= (dateTraining + ((limSup + 22) * semanaMiliSeg)))) {
                        if (banderaSemanal === 22) {
                            banderaSemanal = 23;
                            distanceAccumulatedWeek = 0;
                        }
                        distanceAccumulatedWeek = distanceAccumulatedWeek + parseFloat(entrenamiento.distanciaRecorrida);
                        arrayDistance[23] = distanceAccumulatedWeek;
                        // console.log('S24: ', dateRegisterTraining);
                    }
                } catch (error) {
                    console.log(e);
                }

                dateObjective = entrenamiento.fechaCompetencia;
                dateObjective = new Date(dateObjective).getTime();
                // console.log('FF-> ',dateObjective);


                if (dateTraining < dateObjective) {
                    // console.log(dateTraining, 'es menor a', dateObjective)
                } else {
                    // console.log(dateTraining, 'no es menor', dateObjective)
                }



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
                tssRaisedTotal = tssRaisedTotal + parseFloat(entrenamiento.tssPlanteado);
                tssRealTotal = tssRealTotal + parseFloat(entrenamiento.tssReal);
                IFRaisedTotal = IFRaisedTotal + parseFloat(entrenamiento.ifPlanteado);
                IFRealTotal = IFRealTotal + parseFloat(entrenamiento.ifReal);
                NPRealTotal = NPRealTotal + parseFloat(entrenamiento.npReal);
                workRaisedTotal = workRaisedTotal + parseFloat(entrenamiento.trabajoPlanteado);
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
            let totalDistancia = 0;
            for (let i = 0; i < arrayDistance.length; i++) {
                totalDistancia = totalDistancia + arrayDistance[i];
            }
            console.log("Tiempo Semanal: ", arrayTime);
            console.log('Tiempo Total:', timeAccumulatedTotal);
            console.log('Tiempo Promedio Total:', timeAccumulatedTotal / data);

            console.log("Total Array Distancia: ", totalDistancia);
            console.log("Distancia Semanal: ", arrayDistance);
            console.log('Distancia Total:', distanceAccumulatedTotal);
            console.log('Distancia Promedio Total:', distanceAccumulatedTotal / data);

            console.log("Elevacion Semanal: ", arrayElevation);
            console.log('Elevacion Total:', elevationAccumulatedTotal);
            console.log('Elevacion Promedio Total:', elevationAccumulatedTotal / data);

            console.log("RPE Semanal: ", arrayRPE);
            console.log('RPE Total:', RPEAccumulatedTotal);
            console.log('RPE Promedio Total:', RPEAccumulatedTotal / data);

            console.log("FCMax Semanal: ", arrayFCMax);
            console.log('FCMax Promedio Total:', fcMaxTotal / data);
            console.log('FCPromedio Promedio Total:', fcPromTotal / data);

            console.log("PotenciaMax Semanal: ", arrayWattMax);
            console.log('PotenciaMax Promedio Total:', powerMaxTotal / data);
            console.log('PotenciaPromed Promedio Total:', powerPromTotal / data);

            console.log("VelocidadMax Semanal: ", arraySpeedMax);
            console.log('VelocidadMax Promedio Total:', speedMaxTotal / data);
            console.log('VelocidadPromed Promedio Total:', speedPromTotal / data);

            console.log("CadenciaMax Semanal: ", arrayCadenceMax);
            console.log('CadenciaMax Promedio Total:', cadenceMaxTotal / data);
            console.log('CadenciaPromed Promedio Total:', cadencePromTotal / data);

            console.log("TSS Planteado Semanal: ", arrayTSSPlantedo);
            console.log('TSS Planteado Total:', tssRaisedTotal);
            console.log('TSS Planteado Promedio Total:', tssRaisedTotal / data);

            console.log("TSS Real Semanal: ", arrayTSSReal);
            console.log('TSS Real Total:', tssRealTotal);
            console.log('TSS Real Promedio Total:', tssRealTotal / data);

            console.log("IF Planteado Semanal: ", arrayIFPlanteado);
            console.log('IF Planteado Total:', IFRaisedTotal / data);

            console.log("IF Real Semanal: ", arrayIFReal);
            console.log('IF Real Total:', IFRealTotal / data);

            console.log("NP Real Semanal: ", arrayNPReal);
            console.log('NP Real Total:', NPRealTotal / data);

            console.log("Trabajo Planteado Semanal: ", arrayWorkPlanteado);
            console.log('Trabajo Planteado Total:', workRaisedTotal);
            console.log('Trabajo Planteado Promedio Total:', workRaisedTotal / data);

            console.log("Trabajo Real Semanal: ", arrayWorkReal);
            console.log('Trabajo Real Total:', workRealTotal);
            console.log('Trabajo Real Promedio Total:', workRealTotal / data);


            //Tiempos en Zonas FC
            console.log("FC/ Tiempo Zona1 Semanal: ", arrayFCZone1);
            console.log('FC/ Tiempo Zona1 Total:', fcTimeZoneOneAccumulatedTotal);
            console.log('FC/ Tiempo Promedio Zona1 Total:', fcTimeZoneOneAccumulatedTotal / data);

            console.log("FC/ Tiempo Zona2 Semanal: ", arrayFCZone2);
            console.log('FC/ Tiempo Zona2 Total:', fcTimeZoneTwoAccumulatedTotal);
            console.log('FC/ Tiempo Promedio Zona2 Total:', fcTimeZoneTwoAccumulatedTotal / data);

            console.log("FC/ Tiempo Zona3 Semanal: ", arrayFCZone3);
            console.log('FC/ Tiempo Zona3 Total:', fcTimeZoneThreeAccumulatedTotal);
            console.log('FC/ Tiempo Promedio Zona3 Total:', fcTimeZoneThreeAccumulatedTotal / data);

            console.log("FC/ Tiempo Zona4 Semanal: ", arrayFCZone4);
            console.log('FC/ Tiempo Zona4 Total:', fcTimeZoneFourAccumulatedTotal);
            console.log('FC/ Tiempo Promedio Zona4 Total:', fcTimeZoneFourAccumulatedTotal / data);

            console.log("FC/ Tiempo Zona5 Semanal: ", arrayFCZone5);
            console.log('FC/ Tiempo Zona5 Total:', fcTimeZoneFiveAccumulatedTotal);
            console.log('FC/ Tiempo Promedio Zona5 Total:', fcTimeZoneFiveAccumulatedTotal / data);

            console.log("FC/ Tiempo Zona6 Semanal: ", arrayFCZone6);
            console.log('FC/ Tiempo Zona6 Total:', fcTimeZoneSixAccumulatedTotal);
            console.log('FC/ Tiempo Promedio Zona6 Total:', fcTimeZoneSixAccumulatedTotal / data);

            //Tiempos en Zonas Potencia
            console.log("PW/ Tiempo Zona1 Semanal: ", arrayWattZone1);
            console.log('PW/ Tiempo Zona1 Total:', pwTimeZoneOneAccumulatedTotal);
            console.log('PW/ Tiempo Promedio Zona1 Total:', pwTimeZoneOneAccumulatedTotal / data);

            console.log("PW/ Tiempo Zona2 Semanal: ", arrayWattZone2);
            console.log('PW/ Tiempo Zona2 Total:', pwTimeZoneTwoAccumulatedTotal);
            console.log('PW/ Tiempo Promedio Zona2 Total:', pwTimeZoneTwoAccumulatedTotal / data);

            console.log("PW/ Tiempo Zona3 Semanal: ", arrayWattZone3);
            console.log('PW/ Tiempo Zona3 Total:', pwTimeZoneThreeAccumulatedTotal);
            console.log('PW/ Tiempo Promedio Zona3 Total:', pwTimeZoneThreeAccumulatedTotal / data);

            console.log("PW/ Tiempo Zona4 Semanal: ", arrayWattZone4);
            console.log('PW/ Tiempo Zona4 Total:', pwTimeZoneFourAccumulatedTotal);
            console.log('PW/ Tiempo Promedio Zona4 Total:', pwTimeZoneFourAccumulatedTotal / data);

            console.log("PW/ Tiempo Zona5 Semanal: ", arrayWattZone5);
            console.log('PW/ Tiempo Zona5 Total:', pwTimeZoneFiveAccumulatedTotal);
            console.log('PW/ Tiempo Promedio Zona5 Total:', pwTimeZoneFiveAccumulatedTotal / data);

            console.log("PW/ Tiempo Zona6 Semanal: ", arrayWattZone6);
            console.log('PW/ Tiempo Zona6 Total:', pwTimeZoneSixAccumulatedTotal);
            console.log('PW/ Tiempo Promedio Zona6 Total:', pwTimeZoneSixAccumulatedTotal / data);


            //Tiempos en Zonas Velocidad
            console.log("Speed/ Tiempo Zona1 Semanal: ", arraySpeedZone1);
            console.log('Speed/ Tiempo Zona1 Total:', spTimeZoneOneAccumulatedTotal);
            console.log('Speed/ Tiempo Promedio Zona1 Total:', spTimeZoneOneAccumulatedTotal / data);

            console.log("Speed/ Tiempo Zona2 Semanal: ", arraySpeedZone2);
            console.log('Speed/ Tiempo Zona2 Total:', spTimeZoneTwoAccumulatedTotal);
            console.log('Speed/ Tiempo Promedio Zona2 Total:', spTimeZoneTwoAccumulatedTotal / data);

            console.log("Speed/ Tiempo Zona3 Semanal: ", arraySpeedZone3);
            console.log('Speed/ Tiempo Zona3 Total:', spTimeZoneThreeAccumulatedTotal);
            console.log('Speed/ Tiempo Promedio Zona3 Total:', spTimeZoneThreeAccumulatedTotal / data);

            console.log("Speed/ Tiempo Zona4 Semanal: ", arraySpeedZone4);
            console.log('Speed/ Tiempo Zona4 Total:', spTimeZoneFourAccumulatedTotal);
            console.log('Speed/ Tiempo Promedio Zona4 Total:', spTimeZoneFourAccumulatedTotal / data);

            console.log("Speed/ Tiempo Zona5 Semanal: ", arraySpeedZone5);
            console.log('Speed/ Tiempo Zona5 Total:', spTimeZoneFiveAccumulatedTotal);
            console.log('Speed/ Tiempo Promedio Zona5 Total:', spTimeZoneFiveAccumulatedTotal / data);

            console.log("Speed/ Tiempo Zona6 Semanal: ", arraySpeedZone6);
            console.log('Speed/ Tiempo Zona6 Total:', spTimeZoneSixAccumulatedTotal);
            console.log('Speed/ Tiempo Promedio Zona6 Total:', spTimeZoneSixAccumulatedTotal / data);
        });
}
cyclingTrainingResult(1, "Ut Limited");
// cyclingTrainingResultWeek(1, "Ut Limited", fechaIncioEntreno, fechaObjetivoDeport);



function saveData() {
    const user = JSON.parse(window.sessionStorage.getItem("user"))
    Requests.get('/perfil/idPerfil', {
        email: user.email
    }).then(response => response.json())
        .then(data => {
            if (data.length == 0) {
                alert("Usuario no existe")
            } else {
                Requests.post('/planPsicologico/controlActitudinal/crear', {
                    "fkIdPerfilResultados": data[0].idPerfilUsuario,
                    "duracionEntrenamiento": hhmmss(
                        parseInt(document.getElementById("HorasEntreno").value),
                        parseInt(document.getElementById("MinutosEntreno").value),
                        parseInt(document.getElementById("SegundosEntreno").value)
                    ),
                    "distanciaRecorrida": parseInt(document.getElementById("DistanciaEntreno").value),
                    "desnivelPositivoAcumu": parseInt(document.getElementById("DesnivelEntreno").value),
                    "fcMax": parseInt(document.getElementById("ppm-real").value),
                    "fcPromedio": parseInt(document.getElementById("ppm-planteado").value),
                    "potenciaMax": parseInt(document.getElementById("potencia-real").value),
                    "potenciaPromedio": parseInt(document.getElementById("potencia-planteado").value),
                    "velocidadMax": parseInt(document.getElementById("velocidad-real").value),
                    "velocidadPromedio": parseInt(document.getElementById("velocidad-planteado").value),
                    "cadenciaMax": parseInt(document.getElementById("cadencia-real").value),
                    "cadenciaPromedio": parseInt(document.getElementById("cadencia-planteado").value),
                    "tssmAx": parseInt(document.getElementById("tss-real").value),
                    "tssPromedio": parseInt(document.getElementById("tss-planteado").value),
                    "ifMax": parseInt(document.getElementById("if-real").value),
                    "ifPromedio": parseInt(document.getElementById("if-planteado").value),
                    "np": parseInt(document.getElementById("np-real").value),
                    "trabajoMax": parseInt(document.getElementById("trabajo-real").value),
                    "trabajoPromedio": parseInt(document.getElementById("trabajo-planteado").value),
                    "fcZona1": parseInt(document.getElementById("frecuencia-zona-1").value),
                    "fcZona2": parseInt(document.getElementById("frecuencia-zona-2").value),
                    "fcZona3": parseInt(document.getElementById("frecuencia-zona-3").value),
                    "fcZona4": parseInt(document.getElementById("frecuencia-zona-4").value),
                    "fcZona5": parseInt(document.getElementById("frecuencia-zona-5").value),
                    "fcZona6": parseInt(document.getElementById("frecuencia-zona-6").value),
                    "potenciaZona1": parseInt(document.getElementById("potencia-zona-1").value),
                    "potenciaZona2": parseInt(document.getElementById("potencia-zona-2").value),
                    "potenciaZona3": parseInt(document.getElementById("potencia-zona-3").value),
                    "potenciaZona4": parseInt(document.getElementById("potencia-zona-4").value),
                    "potenciaZona5": parseInt(document.getElementById("potencia-zona-5").value),
                    "potenciaZona6": parseInt(document.getElementById("potencia-zona-6").value),
                    "velocidadZona1": parseInt(document.getElementById("velocidad-zona-1").value),
                    "velocidadZona2": parseInt(document.getElementById("velocidad-zona-2").value),
                    "velocidadZona3": parseInt(document.getElementById("velocidad-zona-3").value),
                    "velocidadZona4": parseInt(document.getElementById("velocidad-zona-4").value),
                    "velocidadZona5": parseInt(document.getElementById("velocidad-zona-5").value),
                    "velocidadZona6": parseInt(document.getElementById("velocidad-zona-6").value),
                    "fechaRegistro": new Date(),
                    "estado": true
                }, {
                    "Content-Type": "application/json"
                }).then(response => response.json())
                    .then()
            }
        })
}