function caloriasSeleccionadasMomento() {
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    const momento = urlParams.get('momento');
    const perfil = urlParams.get('perfil');
    const fecha = urlParams.get('fecha');
    const getM = urlParams.get('getMomento');
    const getComplete = urlParams.get('getCompleto');
    document.getElementById("caloriasRequeridas").innerHTML = getM;
    traerMinutaNutricional();
    let url = apiServer + "alimentoRegularSeleccionado/caloriasSeleccionadas?momento=" + momento + "&perfil=" + perfil + "&fecha=" + fecha + ""
    fetch(url)
        .then((response) => response.json())
        .then((calorias) => {
            let totalCalorias = 0;
            calorias.forEach(alimento => {
                let caloria = parseFloat((alimento.caloriasAlimento));
                let porciones = parseFloat(alimento.porciones);
                let totalCal = caloria * porciones;
                totalCalorias = totalCalorias + totalCal;
            });
            // console.log(totalCalorias);
            if (totalCalorias < getM) {
                traerAlimentosRegulares();


            }
        });
}
function traerAlimentosRegulares() {
    let url= apiServer + "alimentoRegular/listar"
    fetch(url)
        .then((response) => response.json())
        .then((alimentosRegulares) => {
            // Energeticos
            let tablaCereales = document.getElementById('tablaCereales');
            let cuerpoCereales = document.createElement('tbody');

            let tablaTuberculos = document.getElementById('tablaTuberculos');
            let cuerpoTuberculos = document.createElement('tbody');

            let tablaPlatanos = document.getElementById('tablaPlatanos');
            let cuerpoPlatanos = document.createElement('tbody');

            let tablaRaices = document.getElementById('tablaRaices');
            let cuerpoRaices = document.createElement('tbody');

            let tablaLeguminosas = document.getElementById('tablaLeguminosas');
            let cuerpoLeguminosas = document.createElement('tbody');

            // Proteicos
            let tablaCarnesPollo = document.getElementById('tablaCarnesPollo');
            let cuerpoCarnesPollo = document.createElement('tbody');

            // Lacteos
            let tablaLecheDerivados = document.getElementById('tablaLecheDerivados');
            let cuerpoLecheDerivados = document.createElement('tbody');

            let tablaLecheBajosGrasa = document.getElementById('tablaLecheBajosGrasa');
            let cuerpoLecheBajosGrasa = document.createElement('tbody');

            // Frutas y Verduras
            let tablaFrutas = document.getElementById('tablaFrutas');
            let cuerpoFrutas = document.createElement('tbody');

            let tablaVerduras = document.getElementById('tablaVerduras');
            let cuerpoVerduras = document.createElement('tbody');

            // Grasas Saludables
            let tablaFrutosSecos = document.getElementById('tablaFrutosSecos');
            let cuerpoFrutosSecos = document.createElement('tbody');

            let tablaGrasasPoli = document.getElementById('tablaGrasasPoli');
            let cuerpoGrasasPoli = document.createElement('tbody');

            let tablaGrasasMono = document.getElementById('tablaGrasasMono');
            let cuerpoGrasasMono = document.createElement('tbody');

            // Otros
            let tablaGrasasSatu = document.getElementById('tablaGrasasSatu');
            let cuerpoGrasasSatu = document.createElement('tbody');

            let tablaAzucaresSimples = document.getElementById('tablaAzucaresSimples');
            let cuerpoAzucaresSimples = document.createElement('tbody');

            let tablaDulces = document.getElementById('tablaDulces');
            let cuerpoDulces = document.createElement('tbody');

            let tablaMiscelaneos = document.getElementById('tablaMiscelaneos');
            let cuerpoMiscelaneos = document.createElement('tbody');

            let tablaPreparados = document.getElementById('tablaPreparados');
            let cuerpoPreparados = document.createElement('tbody');

            let tablaEspecias = document.getElementById('tablaEspecias');
            let cuerpoEspecias = document.createElement('tbody');

            let tablaBebidadasAlcoho = document.getElementById('tablaBebidadasAlcoho');
            let cuerpoBebidadasAlcoho = document.createElement('tbody');

            alimentosRegulares.forEach(alimento => {
                // console.log(alimento.fkIdSubgrupoAlimenticio);

                let fila = document.createElement('tr');

                let tdImage = document.createElement('td');
                let imgAlimento = document.createElement("img");

                let tdNombre = document.createElement('td');

                let tdPesoCocido = document.createElement('td');
                let spanPesoCocido = document.createElement("span");

                let tdPesoCrudo = document.createElement('td');
                let spanPesoCrudo = document.createElement("span");

                let tdCalorias = document.createElement('td');
                let spanPesoCalorias = document.createElement("span");

                let tdPorcion = document.createElement("td");
                let inputPorcion = document.createElement("input");


                tdImage.style = "width: 30px; text-align: center;";
                imgAlimento.style = "margin-right: 10px;";
                imgAlimento.src = "../../assets/img/alimentosReg/" + alimento.idAlimento + ".png";
                tdImage.appendChild(imgAlimento);
                fila.appendChild(tdImage);

                tdNombre.innerText = alimento.nombreAlimento;
                tdNombre.id = alimento.idAlimento;
                tdNombre.style = "font-size:18px; text-align: left;";
                fila.appendChild(tdNombre);

                spanPesoCocido.innerText = alimento.pesoCocinado;
                spanPesoCocido.className = "badge bg-label-warning";
                tdPesoCocido.style = "font-size:18px; text-align: center;";
                tdPesoCocido.appendChild(spanPesoCocido);
                fila.appendChild(tdPesoCocido);

                spanPesoCrudo.innerText = alimento.pesoCrudo;
                spanPesoCrudo.className = "badge bg-label-info";
                tdPesoCrudo.style = "font-size:18px; text-align: center;";
                tdPesoCrudo.appendChild(spanPesoCrudo);
                fila.appendChild(tdPesoCrudo);

                spanPesoCalorias.innerText = alimento.calorias;
                spanPesoCalorias.id = 'cal_' + (alimento.idAlimento);
                spanPesoCalorias.className = "badge bg-label-success";
                tdCalorias.style = "font-size:18px; text-align: center;";
                tdCalorias.appendChild(spanPesoCalorias);
                fila.appendChild(tdCalorias);


                inputPorcion.type = "number";
                inputPorcion.className = "form-control"
                inputPorcion.id = 'reg_' + (alimento.idAlimento);
                inputPorcion.min = 0;
                inputPorcion.max = 12;
                inputPorcion.step = "1";
                inputPorcion.style = "width: 100px; margin-left: auto; margin-right: auto;";
                tdPorcion.style = "font-size:18px; text-align: center;";
                tdPorcion.appendChild(inputPorcion);
                fila.appendChild(tdPorcion);

                if (alimento.fkIdSubgrupoAlimenticio === 1) {
                    cuerpoCereales.className = "table-border-bottom-0";
                    cuerpoCereales.appendChild(fila);
                }
                if (alimento.fkIdSubgrupoAlimenticio === 2) {
                    cuerpoTuberculos.className = "table-border-bottom-0";
                    cuerpoTuberculos.appendChild(fila);
                }
                if (alimento.fkIdSubgrupoAlimenticio === 3) {
                    cuerpoPlatanos.className = "table-border-bottom-0";
                    cuerpoPlatanos.appendChild(fila);
                }
                if (alimento.fkIdSubgrupoAlimenticio === 4) {
                    cuerpoRaices.className = "table-border-bottom-0";
                    cuerpoRaices.appendChild(fila);
                }
                if (alimento.fkIdSubgrupoAlimenticio === 5) {
                    cuerpoLeguminosas.className = "table-border-bottom-0";
                    cuerpoLeguminosas.appendChild(fila);
                }
                if (alimento.fkIdSubgrupoAlimenticio === 7) {
                    cuerpoCarnesPollo.className = "table-border-bottom-0";
                    cuerpoCarnesPollo.appendChild(fila);
                }
                if (alimento.fkIdSubgrupoAlimenticio === 8) {
                    cuerpoLecheDerivados.className = "table-border-bottom-0";
                    cuerpoLecheDerivados.appendChild(fila);
                }
                if (alimento.fkIdSubgrupoAlimenticio === 9) {
                    cuerpoLecheBajosGrasa.className = "table-border-bottom-0";
                    cuerpoLecheBajosGrasa.appendChild(fila);
                }
                if (alimento.fkIdSubgrupoAlimenticio === 10) {
                    cuerpoVerduras.className = "table-border-bottom-0";
                    cuerpoVerduras.appendChild(fila);
                }
                if (alimento.fkIdSubgrupoAlimenticio === 11) {
                    cuerpoFrutas.className = "table-border-bottom-0";
                    cuerpoFrutas.appendChild(fila);
                }
                if (alimento.fkIdSubgrupoAlimenticio === 12) {
                    cuerpoFrutosSecos.className = "table-border-bottom-0";
                    cuerpoFrutosSecos.appendChild(fila);
                }
                if (alimento.fkIdSubgrupoAlimenticio === 13) {
                    cuerpoGrasasPoli.className = "table-border-bottom-0";
                    cuerpoGrasasPoli.appendChild(fila);
                }
                if (alimento.fkIdSubgrupoAlimenticio === 14) {
                    cuerpoGrasasMono.className = "table-border-bottom-0";
                    cuerpoGrasasMono.appendChild(fila);
                }
                if (alimento.fkIdSubgrupoAlimenticio === 20) {
                    cuerpoGrasasSatu.className = "table-border-bottom-0";
                    cuerpoGrasasSatu.appendChild(fila);
                }
                if (alimento.fkIdSubgrupoAlimenticio === 21) {
                    cuerpoAzucaresSimples.className = "table-border-bottom-0";
                    cuerpoAzucaresSimples.appendChild(fila);
                }
                if (alimento.fkIdSubgrupoAlimenticio === 22) {
                    cuerpoDulces.className = "table-border-bottom-0";
                    cuerpoDulces.appendChild(fila);
                }
                if (alimento.fkIdSubgrupoAlimenticio === 23) {
                    cuerpoMiscelaneos.className = "table-border-bottom-0";
                    cuerpoMiscelaneos.appendChild(fila);
                }
                if (alimento.fkIdSubgrupoAlimenticio === 24) {
                    cuerpoPreparados.className = "table-border-bottom-0";
                    cuerpoPreparados.appendChild(fila);
                }
                if (alimento.fkIdSubgrupoAlimenticio === 25) {
                    cuerpoEspecias.className = "table-border-bottom-0";
                    cuerpoEspecias.appendChild(fila);
                }
                if (alimento.fkIdSubgrupoAlimenticio === 26) {
                    cuerpoBebidadasAlcoho.className = "table-border-bottom-0";
                    cuerpoBebidadasAlcoho.appendChild(fila);
                }
                // if (alimento.fkIdSubgrupoAlimenticio === 27) {
                //     cuerpoSuplementos.className = "table-border-bottom-0";
                //     cuerpoSuplementos.appendChild(fila);
                // }
            }
            );
            tablaCereales.className = "table";
            tablaCereales.appendChild(cuerpoCereales);

            tablaTuberculos.className = "table";
            tablaTuberculos.appendChild(cuerpoTuberculos);

            tablaPlatanos.className = "table";
            tablaPlatanos.appendChild(cuerpoPlatanos);

            tablaRaices.className = "table";
            tablaRaices.appendChild(cuerpoRaices);

            tablaLeguminosas.className = "table";
            tablaLeguminosas.appendChild(cuerpoLeguminosas);

            tablaCarnesPollo.className = "table";
            tablaCarnesPollo.appendChild(cuerpoCarnesPollo);

            tablaLecheDerivados.className = "table";
            tablaLecheDerivados.appendChild(cuerpoLecheDerivados);

            tablaLecheBajosGrasa.className = "table";
            tablaLecheBajosGrasa.appendChild(cuerpoLecheBajosGrasa);

            tablaFrutas.className = "table";
            tablaFrutas.appendChild(cuerpoFrutas);

            tablaVerduras.className = "table";
            tablaVerduras.appendChild(cuerpoVerduras);

            tablaFrutosSecos.className = "table";
            tablaFrutosSecos.appendChild(cuerpoFrutosSecos);

            tablaGrasasPoli.className = "table";
            tablaGrasasPoli.appendChild(cuerpoGrasasPoli);

            tablaGrasasMono.className = "table";
            tablaGrasasMono.appendChild(cuerpoGrasasMono);

            tablaGrasasSatu.className = "table";
            tablaGrasasSatu.appendChild(cuerpoGrasasSatu);

            tablaAzucaresSimples.className = "table";
            tablaAzucaresSimples.appendChild(cuerpoAzucaresSimples);

            tablaDulces.className = "table";
            tablaDulces.appendChild(cuerpoDulces);

            tablaMiscelaneos.className = "table";
            tablaMiscelaneos.appendChild(cuerpoMiscelaneos);

            tablaPreparados.className = "table";
            tablaPreparados.appendChild(cuerpoPreparados);

            tablaEspecias.className = "table";
            tablaEspecias.appendChild(cuerpoEspecias);

            tablaBebidadasAlcoho.className = "table";
            tablaBebidadasAlcoho.appendChild(cuerpoBebidadasAlcoho);

            seleccionarAlimentosRegulares();
        });
}
function traerMinutaNutricional() {
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    const momento = urlParams.get('momento');
    const getM = parseFloat(urlParams.get('getCompleto'));
    console.log(getM);
    if (getM > 0 && getM <= 1350) {
        getMinuta = 1200;
    }
    if (getM > 1350 && getM <= 1600) {
        getMinuta = 1351;
    }
    if (getM > 1601 && getM <= 2000) {
        getMinuta = 1601;
    }
    if (getM > 2000 && getM <= 2399) {
        getMinuta = 2001;
    }
    if (getM > 2399 && getM <= 2700) {
        getMinuta = 2400;
    }
    if (getM > 2700 && getM <= 3050) {
        getMinuta = 2701;
    }
    if (getM > 3050 && getM <= 3450) {
        getMinuta = 3051;
    }
    console.log(getMinuta);
    const idDieta = 1;
    let url = apiServer+"planNutricional/minutaNutricional?calorias=" + getMinuta + "&dieta=" + idDieta + "&momento=" + momento + ""
    fetch(url)
        .then((response) => response.json())
        .then((minutaNutricional) => {

            let energy = 0;
            let cantEnergy = 0;
            let protein = 0;
            let cantProtein = 0;
            let dairy = 0;
            let cantDairy = 0;
            let fruits = 0;
            let cantFruits = 0;
            let fats = 0;
            let cantFats = 0;
            let proteinVeg = 0;
            let cantProteinVeg = 0;
            let others = 0;
            let cantOthers = 0;
            let supplements = 0;
            let cantSupplements = 0;

            minutaNutricional.forEach(datos => {
                let grupo = datos.fkIdGrupoAlimenticioPlan;
                let porciones = datos.cantidad;
                if (grupo === 1) {
                    energy = grupo;
                    cantEnergy = porciones;
                }
                if (grupo === 2) {
                    protein = grupo;
                    cantProtein = porciones;
                }
                if (grupo === 3 || grupo === 4) {
                    dairy = grupo;
                    cantDairy = porciones;
                }
                if (grupo === 5) {
                    fruits = grupo;
                    cantFruits = porciones;
                }
                if (grupo === 6) {
                    fats = grupo;
                    cantFats = porciones
                }
                if (grupo === 7) {
                    proteinVeg = grupo;
                    cantProteinVeg = porciones
                }
                if (grupo === 8) {
                    others = grupo;
                    cantOthers = porciones
                }
                if (grupo === 9) {
                    supplements = grupo;
                    cantSupplements = porciones
                }
            });
            document.getElementById("porcionesRequeridasEnergeticos").innerHTML = cantEnergy;
            document.getElementById("porcionesRequeridasProteicos").innerHTML = cantProtein;
            document.getElementById("porcionesRequeridasLacteos").innerHTML = cantDairy;
            document.getElementById("porcionesRequeridasFrutasVerduras").innerHTML = cantFruits;
            document.getElementById("porcionesRequeridasGrasaSaludables").innerHTML = cantFats;
        });
}
function traerAlimRegSelecc() {
    try {
        // Energeticos
        let tablaEnergeticos = document.getElementById('tablaEnergeticos');
        let cuerpoEnergeticos = document.createElement('tbody');
        // Proteicos
        let tablaProteicos = document.getElementById('tablaProteicos');
        let cuerpoProteicos = document.createElement('tbody');
        // Lacteos
        let tablaLacteos = document.getElementById('tablaLacteos');
        let cuerpoLacteos = document.createElement('tbody');
        // Frutas y Verduras
        let tablaFrutyVeg = document.getElementById('tablaFrutyVeg');
        let cuerpoFrutyVeg = document.createElement('tbody');
        // Frutas y Verduras
        let tablaGrasasSalud = document.getElementById('tablaGrasasSalud');
        let cuerpoGrasasSalud = document.createElement('tbody');
        // Otros
        let tablaOtrosSelecc = document.getElementById('tablaOtrosSelecc');
        let cuerpoOtrosSelecc = document.createElement('tbody');
        //Endpoint
        let url = apiServer + "alimentoRegularSeleccionado/listar"
        fetch(url)
            .then((response) => response.json())
            .then((alimRegSelecc) => {
                alimRegSelecc.forEach(alimento => {
                    // console.log(alimento)
                    let fila = document.createElement('tr');
                    let tdImage = document.createElement('td');
                    let imgAlimento = document.createElement("img");
                    let tdNombre = document.createElement('td');
                    let tdGrupoAlim = document.createElement('td');
                    let tdCaloria = document.createElement('td');
                    let tdPorcion = document.createElement("td");
                    let inputPorcion = document.createElement("input");


                    tdImage.style = "width: 30px; text-align: center;";
                    imgAlimento.style = "margin-right: 10px;";
                    imgAlimento.src = "../../assets/img/alimentosReg/" + alimento.fkIdAlimentoRegularSlcnn + ".png";
                    tdImage.appendChild(imgAlimento);
                    fila.appendChild(tdImage);

                    tdNombre.innerText = alimento.nombreAlimento;
                    tdNombre.id = alimento.fkIdAlimentoRegularSlcnn;
                    tdNombre.style = "font-size:18px; text-align: left;";
                    fila.appendChild(tdNombre);

                    tdGrupoAlim.innerText = alimento.grupoAlimenticio;
                    tdGrupoAlim.id = alimento.idGrupoAlimenticio;
                    tdGrupoAlim.style = "font-size:18px; text-align: left;";
                    fila.appendChild(tdGrupoAlim);

                    tdCaloria.innerText = alimento.caloriasAlimento;
                    tdCaloria.id = 'calSel_' + alimento.fkIdAlimentoRegularSlcnn;
                    tdCaloria.style = "font-size:18px; text-align: left;";
                    fila.appendChild(tdCaloria);

                    tdPorcion.style = "font-size:18px; text-align: center;";
                    inputPorcion.type = "number";
                    inputPorcion.className = "form-control"
                    inputPorcion.id = 'regSel_' + alimento.fkIdAlimentoRegularSlcnn;
                    inputPorcion.min = 0;
                    inputPorcion.max = 12;
                    inputPorcion.step = "1";
                    inputPorcion.style = "width: 100px; margin-left: auto; margin-right: auto;";
                    tdPorcion.appendChild(inputPorcion);
                    fila.appendChild(tdPorcion);

                    if (alimento.idGrupoAlimenticio === 1) {
                        cuerpoEnergeticos.className = "table-border-bottom-0";
                        cuerpoEnergeticos.appendChild(fila);
                    }
                    else if (alimento.idGrupoAlimenticio === 2) {
                        cuerpoProteicos.className = "table-border-bottom-0";
                        cuerpoProteicos.appendChild(fila);
                    }
                    else if ((alimento.idGrupoAlimenticio === 3) || (alimento.idGrupoAlimenticio === 4)) {
                        cuerpoLacteos.className = "table-border-bottom-0";
                        cuerpoLacteos.appendChild(fila);
                    }
                    else if (alimento.idGrupoAlimenticio === 5) {
                        cuerpoFrutyVeg.className = "table-border-bottom-0";
                        cuerpoFrutyVeg.appendChild(fila);
                    }
                    else if (alimento.idGrupoAlimenticio === 6) {
                        cuerpoGrasasSalud.className = "table-border-bottom-0";
                        cuerpoGrasasSalud.appendChild(fila);
                    }
                    else {
                        cuerpoOtrosSelecc.className = "table-border-bottom-0";
                        cuerpoOtrosSelecc.appendChild(fila);
                    }
                });
                tablaEnergeticos.className = "table";
                tablaEnergeticos.appendChild(cuerpoEnergeticos);

                tablaProteicos.className = "table";
                tablaProteicos.appendChild(cuerpoProteicos);

                tablaLacteos.className = "table";
                tablaLacteos.appendChild(cuerpoLacteos);

                tablaFrutyVeg.className = "table";
                tablaFrutyVeg.appendChild(cuerpoFrutyVeg);

                tablaGrasasSalud.className = "table";
                tablaGrasasSalud.appendChild(cuerpoGrasasSalud);

                tablaOtrosSelecc.className = "table";
                tablaOtrosSelecc.appendChild(cuerpoOtrosSelecc);

            });

    } catch (e) {
        console.log(e);
    }
}
function seleccionarAlimentosRegulares() {
    porcionesRequeridasEnergeticos = parseFloat(document.getElementById("porcionesRequeridasEnergeticos").innerHTML);
    const inpust = document.querySelectorAll("input[type=number]");
    inpust.forEach(input => {
        let caloriasReq = parseInt(document.getElementById("caloriasRequeridas").innerHTML);
        input.addEventListener('change', function (e) {
            totalCalorias = 0;
            totalporcionesEnergeticos = 0;
            porcentajeEnergetico = 0;
            // --------------------------------------------------------------------------------------------------------------------------
            //Total de input energeticos
            let cereales = document.querySelectorAll("#tablaCereales input[type=number]");
            let tuberculos = document.querySelectorAll("#tablaTuberculos input[type=number]");
            let platanos = document.querySelectorAll("#tablaPlatanos input[type=number]");
            let raices = document.querySelectorAll("#tablaRaices input[type=number]");
            let leguminosas = document.querySelectorAll("#tablaLeguminosas input[type=number]");

            const energeticos = cereales.length + tuberculos.length + platanos.length + raices.length + leguminosas.length;

            //Lectura de Energeticos
            for (let i = 1; i <= energeticos; i++) {
                try {
                    let idcalorias = "cal_" + i.toString();
                    let idporciones = "reg_" + i.toString();
                    let calorias = parseFloat(document.getElementById(idcalorias).innerHTML);
                    numPorciones = parseInt(document.getElementById(idporciones).value);
                    if (isNaN(numPorciones) !== true) {
                        totalCalEnerg = parseFloat(calorias) * numPorciones;
                        totalCalorias = totalCalorias + totalCalEnerg;
                        totalporcionesEnergeticos = totalporcionesEnergeticos + numPorciones;
                        porcentajeEnergetico = totalporcionesEnergeticos / porcionesRequeridasEnergeticos;
                    }
                    if ((totalporcionesEnergeticos == porcionesRequeridasEnergeticos) || (totalCalorias > (caloriasReq * 1.05))) {
                        for (let j = 1; j <= energeticos; j++) {
                            document.getElementById("reg_" + j).disabled = true;
                        }
                    }

                } catch (error) {
                    console.log(error)
                }
            }
            //Total Porciones Energeticos
            document.getElementById("porcionesElegidasEnergeticos").innerHTML = totalporcionesEnergeticos;
            document.getElementById("barraEnergeticos").style = "width: " + ((porcentajeEnergetico * 100).toFixed(2)) + "%"
            document.getElementById("lblBarraPorcionEneregeticos").innerHTML = ((porcentajeEnergetico * 100).toFixed()) + "%"
            // --------------------------------------------------------------------------------------------------------------------------




            //Total de input Proteicos
            porcionesRequeridasProteicos = parseFloat(document.getElementById("porcionesRequeridasProteicos").innerHTML);
            const carnePollo = document.querySelectorAll("#tablaCarnesPollo input[type=number]");
            proteicos = carnePollo.length + energeticos;
            let totalporcionesProteicos = 0;
            let porcentajeProteicos = 0;

            //Lectura de Proteicos
            for (let i = energeticos + 1; i <= proteicos; i++) {
                try {
                    let idcalorias = "cal_" + i.toString();
                    let idporciones = "reg_" + i.toString();
                    let calorias = parseFloat(document.getElementById(idcalorias).innerHTML);
                    numPorciones = parseInt(document.getElementById(idporciones).value);
                    if (isNaN(numPorciones) !== true) {
                        totalCalEnerg = parseFloat(calorias) * numPorciones;
                        totalCalorias = totalCalorias + totalCalEnerg;
                        totalporcionesProteicos = totalporcionesProteicos + numPorciones;
                        porcentajeProteicos = totalporcionesProteicos / porcionesRequeridasProteicos;
                    }
                    if ((totalporcionesProteicos === porcionesRequeridasProteicos) || (totalCalorias > (caloriasReq * 1.05))) {
                        for (let j = energeticos + 1; j <= proteicos; j++) {
                            document.getElementById("reg_" + j).disabled = true;
                        }
                    }
                } catch (error) {
                    console.log(error)
                }
            }
            //Total Porciones Proteicos
            document.getElementById("porcionesElegidasProteicos").innerHTML = totalporcionesProteicos;
            document.getElementById("barraProteicos").style = "width: " + ((porcentajeProteicos * 100).toFixed(2)) + "%"
            document.getElementById("lblBarraPorcionesProteicos").innerHTML = ((porcentajeProteicos * 100).toFixed()) + "%"
            // --------------------------------------------------------------------------------------------------------------------------


            //Total de input Lacteos y Derivados
            porcionesRequeridasLacteos = parseFloat(document.getElementById("porcionesRequeridasLacteos").innerHTML);
            lecheDeriv = document.querySelectorAll("#tablaLecheDerivados input[type=number]");
            lecheDerivBajos = document.querySelectorAll("#tablaLecheBajosGrasa input[type=number]");
            lacteos = lecheDeriv.length + lecheDerivBajos.length + proteicos;

            //Contador de porciones lacteos
            let totalporcionesLacteos = 0;

            //ID para mostrar los datos en las barras y su porcentaje
            let porcentajeLacteos = 0;

            //Lectura de Lacteos
            for (let i = proteicos + 1; i <= lacteos; i++) {
                try {
                    let idcalorias = "cal_" + i.toString();
                    let idporciones = "reg_" + i.toString();
                    let calorias = parseFloat(document.getElementById(idcalorias).innerHTML);
                    numPorciones = parseInt(document.getElementById(idporciones).value);
                    if (isNaN(numPorciones) !== true) {
                        totalCalEnerg = parseFloat(calorias) * numPorciones;
                        totalCalorias = totalCalorias + totalCalEnerg;
                        totalporcionesLacteos = totalporcionesLacteos + numPorciones;
                        porcentajeLacteos = totalporcionesLacteos / porcionesRequeridasLacteos;
                    }
                    if ((totalporcionesLacteos === porcionesRequeridasLacteos) || (totalCalorias > (caloriasReq * 1.05))) {
                        for (let j = proteicos + 1; j <= lacteos; j++) {
                            document.getElementById("reg_" + j).disabled = true;
                        }
                    }
                } catch (error) {
                    console.log(error)
                }
            }
            //Total Porciones Lacteos
            document.getElementById("porcionesElegidasLacteos").innerHTML = totalporcionesLacteos;
            document.getElementById("barraLacteos").style = "width: " + ((porcentajeLacteos * 100).toFixed(2)) + "%"
            document.getElementById("lblBarraPorcionesLacteos").innerHTML = ((porcentajeLacteos * 100).toFixed()) + "%"
            // --------------------------------------------------------------------------------------------------------------------------


            //Total de input Frutas y Verduras
            porcionesRequeridasFrutasVerduras = parseFloat(document.getElementById("porcionesRequeridasFrutasVerduras").innerHTML);
            frutas = document.querySelectorAll("#tablaFrutas input[type=number]");
            verduras = document.querySelectorAll("#tablaVerduras input[type=number]");
            frutasVerduras = frutas.length + verduras.length + lacteos;

            //Contador de porciones lacteos
            let totalporcionesFrutasVerduras = 0;

            //ID para mostrar los datos en las barras y su porcentaje
            let porcentajeFrutasVerduras = 0;

            //Lectura de Frutas y Verduras
            for (let i = lacteos + 1; i <= frutasVerduras; i++) {
                // try {
                let idcalorias = "cal_" + i.toString();
                let idporciones = "reg_" + i.toString();
                let calorias = parseFloat(document.getElementById(idcalorias).innerHTML);
                numPorciones = parseInt(document.getElementById(idporciones).value);
                if (isNaN(numPorciones) !== true) {
                    totalCalEnerg = parseFloat(calorias) * numPorciones;
                    totalCalorias = totalCalorias + totalCalEnerg;
                    totalporcionesFrutasVerduras = totalporcionesFrutasVerduras + numPorciones;
                    porcentajeFrutasVerduras = totalporcionesFrutasVerduras / porcionesRequeridasFrutasVerduras;
                }
                if ((totalporcionesFrutasVerduras === porcionesRequeridasFrutasVerduras) || (totalCalorias > (caloriasReq * 1.05))) {
                    for (let j = lacteos + 1; j <= frutasVerduras; j++) {
                        document.getElementById("reg_" + j).disabled = true;
                    }
                }
                // } catch (error) {
                //     console.log(error)
                // }
            }
            //Total Porciones Frutas y Verduras
            document.getElementById("porcionesElegidasFrutasVerduras").innerHTML = totalporcionesFrutasVerduras;
            document.getElementById("barraFrutasVerduras").style = "width: " + ((porcentajeFrutasVerduras * 100).toFixed(2)) + "%"
            document.getElementById("lblBarraPorcionesFrutasVerduras").innerHTML = ((porcentajeFrutasVerduras * 100).toFixed()) + "%"
            // --------------------------------------------------------------------------------------------------------------------------


            //Total de input Grasas Saludables
            porcionesRequeridasGrasasSaludables = parseFloat(document.getElementById("porcionesRequeridasGrasaSaludables").innerHTML);

            frutoSecos = document.querySelectorAll("#tablaFrutosSecos input[type=number]");
            grasasPoliin = document.querySelectorAll("#tablaGrasasPoli input[type=number]");
            grasasMono = document.querySelectorAll("#tablaGrasasMono input[type=number]");
            grasaSaludables = frutoSecos.length + grasasPoliin.length + grasasMono.length + frutasVerduras;

            //Contador de porciones grasas saludables
            let totalporcionesGrasaSaludables = 0;

            //ID para mostrar los datos en las barras y su porcentaje
            let porcentajeGrasaSaludables = 0;

            //Lectura de Grasas Saludables
            for (let i = frutasVerduras + 1; i <= grasaSaludables; i++) {
                try {
                    let idcalorias = "cal_" + i.toString();
                    let idporciones = "reg_" + i.toString();
                    let calorias = parseFloat(document.getElementById(idcalorias).innerHTML);
                    numPorciones = parseInt(document.getElementById(idporciones).value);
                    if (isNaN(numPorciones) !== true) {
                        totalCalEnerg = parseFloat(calorias) * numPorciones;
                        totalCalorias = totalCalorias + totalCalEnerg;
                        totalporcionesGrasaSaludables = totalporcionesGrasaSaludables + numPorciones;
                        porcentajeGrasaSaludables = totalporcionesGrasaSaludables / porcionesRequeridasGrasasSaludables;
                    }
                    if ((totalporcionesGrasaSaludables === porcionesRequeridasGrasasSaludables) || (totalCalorias > (caloriasReq * 1.05))) {
                        for (let j = frutasVerduras + 1; j <= grasaSaludables; j++) {
                            document.getElementById("reg_" + j).disabled = true;
                        }
                    }
                } catch (error) {
                    console.log(error)
                }
            }
            //Total Porciones Grasas Saludables
            document.getElementById("porcionesElegidasGrasaSaludables").innerHTML = totalporcionesGrasaSaludables;
            document.getElementById("barraGrasaSaludables").style = "width: " + ((porcentajeGrasaSaludables * 100).toFixed(2)) + "%"
            document.getElementById("lblBarraPorcionesGrasaSaludables").innerHTML = ((porcentajeGrasaSaludables * 100).toFixed()) + "%"
            // --------------------------------------------------------------------------------------------------------------------------

            //Total de input Otros Alimentos
            grasaSaturadas = document.querySelectorAll("#tablaGrasasSatu input[type=number]");
            azucaresSimples = document.querySelectorAll("#tablaAzucaresSimples input[type=number]");
            dulces = document.querySelectorAll("#tablaDulces input[type=number]");
            miscelaneos = document.querySelectorAll("#tablaMiscelaneos input[type=number]");
            preparados = document.querySelectorAll("#tablaPreparados input[type=number]");
            especies = document.querySelectorAll("#tablaEspecias input[type=number]");
            bebidasAlcoh = document.querySelectorAll("#tablaBebidadasAlcoho input[type=number]");
            otros = grasaSaturadas.length + azucaresSimples.length + dulces.length + miscelaneos.length + preparados.length + especies.length + bebidasAlcoh.length + grasaSaludables;

            //Contador de porciones de otros alimentos
            // let totalporcionesOtros = 0;

            //ID para mostrar los datos en las barras y su porcentaje
            // let porcentajeOtros = 0;

            //Lectura de Otros Alimentos
            for (let i = grasaSaludables + 1; i <= otros; i++) {
                // try {
                let idcalorias = "cal_" + i.toString();
                let idporciones = "reg_" + i.toString();
                calorias = parseFloat(document.getElementById(idcalorias).innerHTML);
                numPorciones = parseInt(document.getElementById(idporciones).value);
                if (isNaN(numPorciones) !== true) {
                    totalCalotros = parseFloat(calorias) * numPorciones;
                    totalCalorias = totalCalorias + totalCalotros;
                    // totalporcionesGrasaSaludables = totalporcionesGrasaSaludables + numPorciones;
                    // porcentajeGrasaSaludables = totalporcionesGrasaSaludables / porcionesGrasaSaludReque;
                }
                // caloriasReq = parseInt(document.getElementById("caloriasRequeridas").innerHTML);
                // console.log('Req', caloriasReq);
                // console.log('Sel', totalCalorias);
                if (totalCalorias > (caloriasReq * 1.05)) {
                    for (let j = grasaSaludables + 1; j <= otros; j++) {
                        document.getElementById("reg_" + j).disabled = true;
                    }
                }
                // } catch (error) {
                //     console.log(error)
                // }
            }
            // --------------------------------------------------------------------------------------------------------------------------
            //Total Calorias CET vs GET
            document.getElementById("caloriasSeleccionadas").innerHTML = totalCalorias.toFixed(2);
            // caloriasReq = parseInt(document.getE lementById("caloriasRequeridas").innerHTML);
            let caloriasTotales = totalCalorias / caloriasReq;

            document.getElementById("barraCalorias").style = "width: " + ((caloriasTotales * 100).toFixed(2)) + "%"
            document.getElementById("lblBarraCalorias").innerHTML = ((caloriasTotales * 100).toFixed()) + "%"

        });
    });
}
function guardarAlimentosRegulares() {
    try {
    const foodSelections = document.querySelectorAll("input[type=number]");
    console.log(foodSelections);
    for (let i = 0, food; food = foodSelections[i++];) {
        if (food.value !== "") {
            let idAli = food.id;
            console.log('IdInput:', idAli);
            console.log('IdAlimentos:', idAli.slice(4))
            console.log('Porciones:', document.getElementById(idAli).value);
            let url = apiServer+"alimentoRegularSeleccionado/crear"
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    fkIdMomentoComidaSlccn: 1,
                    fkIdPerfilUsuarioSlccn: 1,
                    fkIdAlimentoRegularSlcnn: parseInt(idAli.slice(4)),
                    porciones: parseInt(document.getElementById(idAli).value),
                    ipPc: "00.00.00.00",
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json));
        }
    }
    setTimeout(redirigir, 3000)
    } catch (error) {
        console.log(error);
    }
}
function redirigir() {
    location.href = window.location.origin + '/html/vertical-menu-template/tables-pdf-selected-foods.html'
}
window.onload = async () => {
    caloriasSeleccionadasMomento();
}