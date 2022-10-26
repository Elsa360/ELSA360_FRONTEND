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
            let TSSPromTotal = 0;
            let TSSAccumulatedTotal = 0;

            let IFPromWeek = 0;
            let IFPromMonth = 0;
            let IFPromMacro = 0;
            let IFPromTotal = 0;

            let NPPromWeek = 0;
            let NPPromMonth = 0;
            let NPPromMacro = 0;
            let NPPromTotal = 0;

            let workPromWeek = 0;
            let workAccumulatedWeek = 0;
            let workPromMouth = 0;
            let workAccumulatedMouth = 0;
            let workPromMacro = 0;
            let workAccumulatedMacro = 0;
            let workPromTotal = 0;
            let workAccumulatedTotal = 0;

            let timeZoneOnePromWeek = 0;
            let timeZoneOneAccumulatedWeek = 0;
            let timeZoneOnePromMouth = 0;
            let timeZoneOneAccumulatedMouth = 0;
            let timeZoneOnePromMacro = 0;
            let timeZoneOneAccumulatedMacro = 0;
            let timeZoneOnePromTotal = 0;
            let timeZoneOneAccumulatedTotal = 0;

            let timeZoneTwoPromWeek = 0;
            let timeZoneTwoAccumulatedWeek = 0;
            let timeZoneTwoPromMouth = 0;
            let timeZoneTwoAccumulatedMouth = 0;
            let timeZoneTwoPromMacro = 0;
            let timeZoneTwoAccumulatedMacro = 0;
            let timeZoneTwoPromTotal = 0;
            let timeZoneTwoAccumulatedTotal = 0;

            let timeZoneThreePromWeek = 0;
            let timeZoneThreeAccumulatedWeek = 0;
            let timeZoneThreePromMouth = 0;
            let timeZoneThreeAccumulatedMouth = 0;
            let timeZoneThreePromMacro = 0;
            let timeZoneThreeAccumulatedMacro = 0;
            let timeZoneThreePromTotal = 0;
            let timeZoneThreeAccumulatedTotal = 0;

            let timeZoneFourPromWeek = 0;
            let timeZoneFourAccumulatedWeek = 0;
            let timeZoneFourPromMouth = 0;
            let timeZoneFourAccumulatedMouth = 0;
            let timeZoneFourPromMacro = 0;
            let timeZoneFourAccumulatedMacro = 0;
            let timeZoneFourPromTotal = 0;
            let timeZoneFourAccumulatedTotal = 0;

            let timeZoneFivePromWeek = 0;
            let timeZoneFiveAccumulatedWeek = 0;
            let timeZoneFivePromMouth = 0;
            let timeZoneFiveAccumulatedMouth = 0;
            let timeZoneFivePromMacro = 0;
            let timeZoneFiveAccumulatedMacro = 0;
            let timeZoneFivePromTotal = 0;
            let timeZoneFiveAccumulatedTotal = 0;

            let timeZoneSixPromWeek = 0;
            let timeZoneSixAccumulatedWeek = 0;
            let timeZoneSixPromMouth = 0;
            let timeZoneSixAccumulatedMouth = 0;
            let timeZoneSixPromMacro = 0;
            let timeZoneSixAccumulatedMacro = 0;
            let timeZoneSixPromTotal = 0;
            let timeZoneSixAccumulatedTotal = 0;
            console.log("Tamaño del Arreglo:",resultadosEntrenamiento.length);
            // for(let entrenamiento=0;entrenamiento<=(resultadosEntrenamiento.length);entrenamiento++){
            resultadosEntrenamiento.forEach(entrenamiento => {
                console.log('Competencia:', entrenamiento.nombreCompetencia)
                console.log('Evento:', entrenamiento.evento)
                console.log('Duracion:', entrenamiento.duracionEntrenamiento)

                console.log('Potencia Max:', entrenamiento.potenciaMax)
                console.log('Potencia Promedio:', entrenamiento.potenciaPromedio)
                console.log('Potencia Zona 1:', entrenamiento.potenciaZona1)
                console.log('Potencia Zona 2:', entrenamiento.potenciaZona2)
                console.log('Potencia Zona 3:', entrenamiento.potenciaZona3)
                console.log('Potencia Zona 4:', entrenamiento.potenciaZona4)
                console.log('Potencia Zona 5:', entrenamiento.potenciaZona5)
                console.log('Potencia Zona 6:', entrenamiento.potenciaZona6)

                console.log('FC Max:', entrenamiento.fcMax)
                console.log('FC Promedio:', entrenamiento.fcPromedio)
                console.log('FC Zona 1', entrenamiento.fcZona1)
                console.log('FC Zona 2', entrenamiento.fcZona2)
                console.log('FC Zona 3', entrenamiento.fcZona3)
                console.log('FC Zona 4', entrenamiento.fcZona4)
                console.log('FC Zona 5', entrenamiento.fcZona5)
                console.log('FC Zona 6', entrenamiento.fcZona6)

                console.log("Velocidad  Max:", entrenamiento.velocidadMax)
                console.log("Velocidad Promedio:", entrenamiento.velocidadPromedio)
                console.log("Velocidad Zona 1:", entrenamiento.velocidadZona1)
                console.log("Velocidad Zona 2:", entrenamiento.velocidadZona2)
                console.log("Velocidad Zona 3:", entrenamiento.velocidadZona3)
                console.log("Velocidad Zona 4:", entrenamiento.velocidadZona4)
                console.log("Velocidad Zona 5:", entrenamiento.velocidadZona5)
                console.log("Velocidad Zona 6:", entrenamiento.velocidadZona6)

                console.log("Desnivel Positivo Acumulado:", entrenamiento.desnivelPositivoAcumu)
                console.log("Distancia Recorrida:", entrenamiento.distanciaRecorrida)

                console.log("Cadencia Max:", entrenamiento.cadenciaMax)
                console.log("Cadencia Promedio:", entrenamiento.cadenciaPromedio)

                console.log("IF Max:", entrenamiento.ifMax)
                console.log("IF Promedio:", entrenamiento.ifPromedio)
                console.log("Trabajo Max:", entrenamiento.trabajoMax)
                console.log("Trabajo promedio:", entrenamiento.trabajoPromedio)
                console.log("TSS Promedio:", entrenamiento.tssPromedio)
                console.log("TSS Max:", entrenamiento.tssmAx)

                console.log("NP:", entrenamiento.np)

                timeAccumulatedTotal=timeAccumulatedTotal+parseFloat(entrenamiento.duracionEntrenamiento);
                distanceAccumulatedTotal=distanceAccumulatedTotal+parseFloat(entrenamiento.distanciaRecorrida);
                elevationAccumulatedTotal=elevationAccumulatedTotal+parseFloat(entrenamiento.desnivelPositivoAcumu);
                RPEAccumulatedTotal=RPEAccumulatedTotal+parseFloat(entrenamiento.desnivelPositivoAcumu);


            // };
            });
            console.log('Time Total:',timeAccumulatedTotal);
            console.log('Distancia Total:',distanceAccumulatedTotal);
            console.log('Elevacion Total:',elevationAccumulatedTotal);
            console.log('RPE Total:',RPEAccumulatedTotal);
        });
}
cyclingTrainingResult(1, "fondo rigoberto uran");
