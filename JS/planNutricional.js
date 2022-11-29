var getTotal = 0
function datesUser() {
    let pesoActual = 90;
    let estatura = 178;
    let pesoDesedo = 80;
    let fechaNacimiento = '1990-10-10';
    let genero = 'hombre'
    let idperfilUsuario;
    let nivelDeportivo;
    let escalaDeportiva;
    try {
        //Requerimientos de calorias sin actividad fisica
        dataGET = get(fechaNacimiento, genero, pesoActual, pesoDesedo, estatura, 0);
        document.getElementById("calSinActFisc").innerHTML = dataGET[0] + ' Calorias';
        getTotal = dataGET[0];

        document.getElementById("getTotaldelDia").innerHTML = dataGET[0] + ' Calorias';
        document.getElementById("mensajeRS").innerHTML = dataGET[1];

        //IMC
        IMCDatos = calcularIMC(pesoActual, estatura);
        document.getElementById("mensajeIMC").innerHTML = IMCDatos[0];
        document.getElementById("indiceIMC").innerHTML = IMCDatos[1].toFixed(1);

        //Peso saludable y peso deseado
        healthyWeight = pesoSaludable(estatura);
        document.getElementById("pesoSaludLimInf").innerHTML = healthyWeight[0] + 'Kg';
        document.getElementById("pesoSaludLimSup").innerHTML = healthyWeight[1] + 'Kg';
        document.getElementById("pesoDeseado").innerHTML = pesoDesedo + 'Kg';

        //Requerimiento de liquidos
        liquidRequirement = requerimientoLiquidos(pesoActual);
        document.getElementById("requerimientoLiquidos").innerHTML = liquidRequirement[0] + " Lts";
        document.getElementById("promedioVasosAgua").innerHTML = liquidRequirement[1];

        //Diferencia de peso
        weightDifference = diferenciaPeso(pesoActual, pesoDesedo);
        if (weightDifference > 0) {
            document.getElementById("diferenciaPeso").innerHTML = "+" + Math.abs(weightDifference) + " Kg";
        } else if (weightDifference < 0) {
            document.getElementById("diferenciaPeso").innerHTML = "-" + Math.abs(weightDifference) + " Kg";
        }
        else {
            document.getElementById("diferenciaPeso").innerHTML = "0 Kg";
        }

        //GET x Momento de comida
        dataGetMomento = getMomento(weightDifference, dataGET[0]);
        document.getElementById("DashBoardGETMomentOne").innerHTML = dataGetMomento[0].toFixed(0);
        document.getElementById("DashBoardGETMomentTwo").innerHTML = dataGetMomento[1].toFixed(0);
        document.getElementById("DashBoardGETMomentThree").innerHTML = dataGetMomento[2].toFixed(0);
        document.getElementById("DashBoardGETMomentFour").innerHTML = dataGetMomento[3].toFixed(0);
        document.getElementById("DashBoardGETMomentFive").innerHTML = dataGetMomento[4].toFixed(0);
        document.getElementById("DashBoardGETMomentSix").innerHTML = dataGetMomento[5].toFixed(0);







    } catch (error) {

    }

}

// ==========================================================================================================================
// Calculos basico del usuario
// ==========================================================================================================================


function calcularIMC(userWeight, userHeight) {
    //Peso en Kilogramos y Estatura en Metros.
    try {
        userHeight = userHeight / 100;
        let IMC = userWeight / (userHeight * userHeight);
        if (IMC >= 0 && IMC < 18.5) {
            mensaje = "Bajo de peso";
        } else if (IMC >= 18.5 && IMC <= 24.9) {
            mensaje = "Saludable";
        } else if (IMC >= 25 && IMC <= 29.9) {
            mensaje = "Sobrepeso";
        }
        else if (IMC >= 30 && IMC <= 34.9) {
            mensaje = "Obesidad Tipo 1";
        }
        else if (IMC >= 35 && IMC <= 39.9) {
            mensaje = "Obesidad Tipo 2";
        } else if (IMC >= 40) {
            mensaje = "Obesidad Morbida";
        } else {
            mensaje = "Error"
        }
        return [mensaje, IMC];
    } catch (e) {
        console.log(e, "Error al calcular IMC");
    }
}
function pesoSaludable(userHeight) {
    //Estatura en Metros
    try {
        userHeight = userHeight / 100;
        let limInf = (userHeight * userHeight) * 19.5;
        let limSup = (userHeight * userHeight) * 23.9;
        return [limInf.toFixed(1), limSup.toFixed(1)];
    } catch (error) {

    }

}
function requerimientoLiquidos(userWeight) {
    //userWeight en Kilogramos
    try {
        let rl = (35 * userWeight) / 1000;
        let vasos = parseFloat(((35 * userWeight) / 250).toFixed(0));
        let mensaje = "**Entre " + vasos + " y " + (vasos + 1) + " vasos"
        return [rl, mensaje];
    } catch (e) {
    }
}
function diferenciaPeso(userWeightCurrent, userWeightWanted) {
    //Peso en Kilogramos
    let userWeightDifference = userWeightWanted - userWeightCurrent;
    return userWeightDifference;
}

//Calculo del GET
function calcularEdad(birthDate) {
    try {
        const fechaNacimiento = birthDate;
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
        return parseInt(edad);
    } catch (e) {
        console.log(e);
    }
}
function tmb(birthDate, gender, userWeightCurrent, userHeight) {
    //Tasa Metabolica Basal
    try {
        let tmb;
        let userAge = calcularEdad(birthDate);
        if (gender === "hombre") {
            tmb = 66.5 + (13.75 * userWeightCurrent) + (5 * (userHeight)) - (6.8 * userAge);
        } else {
            tmb = 665 + (9.6 * userWeightCurrent) + (1.8 * (userHeight)) - (4.7 * userAge);
        }
        return tmb;
    } catch (e) {
        console.log(e)
    }
}
function naf(tmb) {
    //Nivel de Actividad Fisica
    try {
        const naf = 0.2 * tmb;
        return naf;
    } catch (e) { console.log(e) }
}
function eta(tmb) {
    //Efecto Termico de los Alimentos
    try {
        const eta = 0.1 * tmb;
        return eta;
    } catch (e) { console.log(e) }
}
function gde(SumatoriaMETEjer, userWeightCurrect) {
    //Gasto Deportivo del Entrenamiento
    //SumatoriaMET = Suma de todos los MET de los ejercicios
    try {
        let gde = SumatoriaMETEjer * userWeightCurrect;
        return gde;
    } catch (e) { console.log(e) }
}
function rs(userWeightCurrect, userWeightWanted) {
    //R => Restricción
    //S => Superavit
    //ipm = Incremento Peso Mensual
    try {
        let diferencia = diferenciaPeso(userWeightCurrect, userWeightWanted);
        let ipm = 0;
        let mensaje;
        if (Math.abs(diferencia) <= 12) {
            ipm = Math.abs(diferencia) / 3;
        } else if (Math.abs(diferencia) <= 24) {
            ipm = Math.abs(diferencia) / 6;
        } else if (Math.abs(diferencia) <= 48) {
            ipm = Math.abs(diferencia) / 12;
        } else {
            ipm = 4;
        }
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
            mensaje = "Superavit";
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
            mensaje = "Restricción";
        } else {
            rs = 0;
            mensaje = "Mantener peso";
        }
        return [rs, mensaje];
    } catch (e) { console.log(e); }
}
function get(fechaNacimiento, genero, pesoActualPerfil, pesoDeseadoPerfil, estaturaUsuario, SumatoriaMET) {
    try {
        let tasaMetabolicaBasal = tmb(fechaNacimiento, genero, pesoActualPerfil, estaturaUsuario);
        let nivelActividadFisica = naf(tasaMetabolicaBasal);
        let efectoTermicoAlim = eta(tasaMetabolicaBasal);
        let totalGastoDeportivo = gde(SumatoriaMET, pesoActualPerfil);
        let dataRS = rs(pesoActualPerfil, pesoDeseadoPerfil)
        let mensajeRS = dataRS[1];
        let restriccionSuperavit = dataRS[0];
        let get = tasaMetabolicaBasal + nivelActividadFisica + efectoTermicoAlim + totalGastoDeportivo + restriccionSuperavit;
        return [parseFloat(get.toFixed(0)), mensajeRS];

    } catch (e) { console.log(e) }
}

//Calculo GET (Momento y Macro)
function getMacronutrientes(differenceWeight, get) {
    let dp = differenceWeight;
    let vrGet = get;
    if (dp < 0) {
        vrCarbo = vrGet * 0.48
        vrProte = vrGet * 0.30
        vrGrasa = vrGet * 0.22
    } else if (dp > 0) {
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

    return [vrCarbo, vrProte, vrGrasa];
}
function getMomento(differenceWeight, get) {
    try {
        let dp = differenceWeight;
        let vrGet = get;
        if (dp < 0) {
            vrdesayuno = vrGet * 0.22
            vrsnack1 = vrGet * 0.15
            vralmuerzo = vrGet * 0.28
            vrsnack2 = vrGet * 0.15
            vrcena = vrGet * 0.20
            vrsnack3 = vrGet * 0
        } else if (dp > 0) {
            vrdesayuno = vrGet * 0.20
            vrsnack1 = vrGet * 0.15
            vralmuerzo = vrGet * 0.20
            vrsnack2 = vrGet * 0.15
            vrcena = vrGet * 0.20
            vrsnack3 = vrGet * 0.10
        } else {
            vrdesayuno = vrGet * 0.25
            vrsnack1 = vrGet * 0.15
            vralmuerzo = vrGet * 0.35
            vrsnack2 = vrGet * 0
            vrcena = vrGet * 0.25
            vrsnack3 = vrGet * 0
        }
        return [vrdesayuno, vrsnack1, vralmuerzo, vrsnack2, vrcena, vrsnack3];
    } catch (error) {
        console.log(e);
    }

}


// ==========================================================================================================================
// Fin calculos basico del usuario
// ==========================================================================================================================



// ==========================================================================================================================
// Calculos de CET - Alimentos Regulares
// ==========================================================================================================================

function momento(momento) {
    try {
        let getCompleto = getTotal;
        let idMoment = momento;
        let perfil = 1;
        let fecha = '2022-10-25';
        let getMomento;

        if (idMoment == 1) {
            getMomento = document.getElementById("DashBoardGETMomentOne").innerText;
        } else if (idMoment == 2) {
            getMomento = document.getElementById("DashBoardGETMomentTwo").innerText;
        } else if (idMoment == 3) {
            getMomento = document.getElementById("DashBoardGETMomentThree").innerText;
        } else if (idMoment == 4) {
            getMomento = document.getElementById("DashBoardGETMomentFour").innerText;
        } else if (idMoment == 5) {
            getMomento = document.getElementById("DashBoardGETMomentFive").innerText;
        } else if (idMoment == 6) {
            getMomento = document.getElementById("DashBoardGETMomentSix").innerText;
        } else {
            console.log("");
        }

        location.href = "tables-general-foods.html?momento=" + idMoment + "&perfil=" + perfil + "&fecha=" + fecha + "&getMomento=" + getMomento + "&getCompleto=" + getCompleto + "";
    } catch (error) {
        console.log(error)
    }

}
// function caloriasSeleccionadasMomento() {
//     const valores = window.location.search;
//     const urlParams = new URLSearchParams(valores);
//     const momento = urlParams.get('momento');
//     const perfil = urlParams.get('perfil');
//     const fecha = urlParams.get('fecha');
//     const getM = urlParams.get('getMomento');
//     document.getElementById("caloriasRequeridas").innerHTML = getM;
//     fetch("https://localhost:7155/alimentoRegularSeleccionado/caloriasSeleccionadas?momento=" + momento + "&perfil=" + perfil + "&fecha=" + fecha + "")
//         .then((response) => response.json())
//         .then((calorias) => {
//             let totalCalorias = 0;
//             calorias.forEach(alimento => {
//                 let caloria = parseFloat((alimento.caloriasAlimento));
//                 let porciones = parseFloat(alimento.porciones);
//                 let totalCal = caloria * porciones;
//                 totalCalorias = totalCalorias + totalCal;
//             });
//             console.log(totalCalorias);
//             if (totalCalorias < getM) {
//                 traerAlimentosRegulares()
//             }
//         });
// }
// function traerAlimentosRegulares() {
//     fetch('https://localhost:7155/alimentoRegular/listar')
//         .then((response) => response.json())
//         .then((alimentosRegulares) => {
//             // Energeticos
//             let tablaCereales = document.getElementById('tablaCereales');
//             let cuerpoCereales = document.createElement('tbody');

//             let tablaTuberculos = document.getElementById('tablaTuberculos');
//             let cuerpoTuberculos = document.createElement('tbody');

//             let tablaPlatanos = document.getElementById('tablaPlatanos');
//             let cuerpoPlatanos = document.createElement('tbody');

//             let tablaRaices = document.getElementById('tablaRaices');
//             let cuerpoRaices = document.createElement('tbody');

//             let tablaLeguminosas = document.getElementById('tablaLeguminosas');
//             let cuerpoLeguminosas = document.createElement('tbody');

//             // Proteicos
//             let tablaCarnesPollo = document.getElementById('tablaCarnesPollo');
//             let cuerpoCarnesPollo = document.createElement('tbody');

//             // Lacteos
//             let tablaLecheDerivados = document.getElementById('tablaLecheDerivados');
//             let cuerpoLecheDerivados = document.createElement('tbody');

//             let tablaLecheBajosGrasa = document.getElementById('tablaLecheBajosGrasa');
//             let cuerpoLecheBajosGrasa = document.createElement('tbody');

//             // Frutas y Verduras
//             let tablaFrutas = document.getElementById('tablaFrutas');
//             let cuerpoFrutas = document.createElement('tbody');

//             let tablaVerduras = document.getElementById('tablaVerduras');
//             let cuerpoVerduras = document.createElement('tbody');

//             // Grasas Saludables
//             let tablaFrutosSecos = document.getElementById('tablaFrutosSecos');
//             let cuerpoFrutosSecos = document.createElement('tbody');

//             let tablaGrasasPoli = document.getElementById('tablaGrasasPoli');
//             let cuerpoGrasasPoli = document.createElement('tbody');

//             let tablaGrasasMono = document.getElementById('tablaGrasasMono');
//             let cuerpoGrasasMono = document.createElement('tbody');

//             // Otros
//             let tablaGrasasSatu = document.getElementById('tablaGrasasSatu');
//             let cuerpoGrasasSatu = document.createElement('tbody');

//             let tablaAzucaresSimples = document.getElementById('tablaAzucaresSimples');
//             let cuerpoAzucaresSimples = document.createElement('tbody');

//             let tablaDulces = document.getElementById('tablaDulces');
//             let cuerpoDulces = document.createElement('tbody');

//             let tablaMiscelaneos = document.getElementById('tablaMiscelaneos');
//             let cuerpoMiscelaneos = document.createElement('tbody');

//             let tablaPreparados = document.getElementById('tablaPreparados');
//             let cuerpoPreparados = document.createElement('tbody');

//             let tablaEspecias = document.getElementById('tablaEspecias');
//             let cuerpoEspecias = document.createElement('tbody');

//             let tablaBebidadasAlcoho = document.getElementById('tablaBebidadasAlcoho');
//             let cuerpoBebidadasAlcoho = document.createElement('tbody');

//             alimentosRegulares.forEach(alimento => {
//                 // console.log(alimento.fkIdSubgrupoAlimenticio);

//                 let fila = document.createElement('tr');

//                 let tdImage = document.createElement('td');
//                 let imgAlimento = document.createElement("img");

//                 let tdNombre = document.createElement('td');

//                 let tdPesoCocido = document.createElement('td');
//                 let spanPesoCocido = document.createElement("span");

//                 let tdPesoCrudo = document.createElement('td');
//                 let spanPesoCrudo = document.createElement("span");

//                 let tdCalorias = document.createElement('td');
//                 let spanPesoCalorias = document.createElement("span");

//                 let tdPorcion = document.createElement("td");
//                 let inputPorcion = document.createElement("input");


//                 tdImage.style = "width: 30px; text-align: center;";
//                 imgAlimento.style = "margin-right: 10px;";
//                 imgAlimento.src = "../../assets/img/alimentosReg/" + alimento.idAlimento + ".png";
//                 tdImage.appendChild(imgAlimento);
//                 fila.appendChild(tdImage);

//                 tdNombre.innerText = alimento.nombreAlimento;
//                 tdNombre.id = alimento.idAlimento;
//                 tdNombre.style = "font-size:18px; text-align: left;";
//                 fila.appendChild(tdNombre);

//                 spanPesoCocido.innerText = alimento.pesoCocinado;
//                 spanPesoCocido.className = "badge bg-label-warning";
//                 tdPesoCocido.style = "font-size:18px; text-align: center;";
//                 tdPesoCocido.appendChild(spanPesoCocido);
//                 fila.appendChild(tdPesoCocido);

//                 spanPesoCrudo.innerText = alimento.pesoCrudo;
//                 spanPesoCrudo.className = "badge bg-label-info";
//                 tdPesoCrudo.style = "font-size:18px; text-align: center;";
//                 tdPesoCrudo.appendChild(spanPesoCrudo);
//                 fila.appendChild(tdPesoCrudo);

//                 spanPesoCalorias.innerText = alimento.calorias;
//                 spanPesoCalorias.id = 'cal_' + (alimento.idAlimento);
//                 spanPesoCalorias.className = "badge bg-label-success";
//                 tdCalorias.style = "font-size:18px; text-align: center;";
//                 tdCalorias.appendChild(spanPesoCalorias);
//                 fila.appendChild(tdCalorias);


//                 inputPorcion.type = "number";
//                 inputPorcion.className = "form-control"
//                 inputPorcion.id = 'reg_' + (alimento.idAlimento);
//                 inputPorcion.min = 0;
//                 inputPorcion.max = 12;
//                 inputPorcion.step = "1";
//                 inputPorcion.style = "width: 100px; margin-left: auto; margin-right: auto;";
//                 tdPorcion.style = "font-size:18px; text-align: center;";
//                 tdPorcion.appendChild(inputPorcion);
//                 fila.appendChild(tdPorcion);

//                 if (alimento.fkIdSubgrupoAlimenticio === 1) {
//                     cuerpoCereales.className = "table-border-bottom-0";
//                     cuerpoCereales.appendChild(fila);
//                 }
//                 if (alimento.fkIdSubgrupoAlimenticio === 2) {
//                     cuerpoTuberculos.className = "table-border-bottom-0";
//                     cuerpoTuberculos.appendChild(fila);
//                 }
//                 if (alimento.fkIdSubgrupoAlimenticio === 3) {
//                     cuerpoPlatanos.className = "table-border-bottom-0";
//                     cuerpoPlatanos.appendChild(fila);
//                 }
//                 if (alimento.fkIdSubgrupoAlimenticio === 4) {
//                     cuerpoRaices.className = "table-border-bottom-0";
//                     cuerpoRaices.appendChild(fila);
//                 }
//                 if (alimento.fkIdSubgrupoAlimenticio === 5) {
//                     cuerpoLeguminosas.className = "table-border-bottom-0";
//                     cuerpoLeguminosas.appendChild(fila);
//                 }
//                 if (alimento.fkIdSubgrupoAlimenticio === 7) {
//                     cuerpoCarnesPollo.className = "table-border-bottom-0";
//                     cuerpoCarnesPollo.appendChild(fila);
//                 }
//                 if (alimento.fkIdSubgrupoAlimenticio === 8) {
//                     cuerpoLecheDerivados.className = "table-border-bottom-0";
//                     cuerpoLecheDerivados.appendChild(fila);
//                 }
//                 if (alimento.fkIdSubgrupoAlimenticio === 9) {
//                     cuerpoLecheBajosGrasa.className = "table-border-bottom-0";
//                     cuerpoLecheBajosGrasa.appendChild(fila);
//                 }
//                 if (alimento.fkIdSubgrupoAlimenticio === 10) {
//                     cuerpoVerduras.className = "table-border-bottom-0";
//                     cuerpoVerduras.appendChild(fila);
//                 }
//                 if (alimento.fkIdSubgrupoAlimenticio === 11) {
//                     cuerpoFrutas.className = "table-border-bottom-0";
//                     cuerpoFrutas.appendChild(fila);
//                 }
//                 if (alimento.fkIdSubgrupoAlimenticio === 12) {
//                     cuerpoFrutosSecos.className = "table-border-bottom-0";
//                     cuerpoFrutosSecos.appendChild(fila);
//                 }
//                 if (alimento.fkIdSubgrupoAlimenticio === 13) {
//                     cuerpoGrasasPoli.className = "table-border-bottom-0";
//                     cuerpoGrasasPoli.appendChild(fila);
//                 }
//                 if (alimento.fkIdSubgrupoAlimenticio === 14) {
//                     cuerpoGrasasMono.className = "table-border-bottom-0";
//                     cuerpoGrasasMono.appendChild(fila);
//                 }
//                 if (alimento.fkIdSubgrupoAlimenticio === 20) {
//                     cuerpoGrasasSatu.className = "table-border-bottom-0";
//                     cuerpoGrasasSatu.appendChild(fila);
//                 }
//                 if (alimento.fkIdSubgrupoAlimenticio === 21) {
//                     cuerpoAzucaresSimples.className = "table-border-bottom-0";
//                     cuerpoAzucaresSimples.appendChild(fila);
//                 }
//                 if (alimento.fkIdSubgrupoAlimenticio === 22) {
//                     cuerpoDulces.className = "table-border-bottom-0";
//                     cuerpoDulces.appendChild(fila);
//                 }
//                 if (alimento.fkIdSubgrupoAlimenticio === 23) {
//                     cuerpoMiscelaneos.className = "table-border-bottom-0";
//                     cuerpoMiscelaneos.appendChild(fila);
//                 }
//                 if (alimento.fkIdSubgrupoAlimenticio === 24) {
//                     cuerpoPreparados.className = "table-border-bottom-0";
//                     cuerpoPreparados.appendChild(fila);
//                 }
//                 if (alimento.fkIdSubgrupoAlimenticio === 25) {
//                     cuerpoEspecias.className = "table-border-bottom-0";
//                     cuerpoEspecias.appendChild(fila);
//                 }
//                 if (alimento.fkIdSubgrupoAlimenticio === 26) {
//                     cuerpoBebidadasAlcoho.className = "table-border-bottom-0";
//                     cuerpoBebidadasAlcoho.appendChild(fila);
//                 }
//                 // if (alimento.fkIdSubgrupoAlimenticio === 27) {
//                 //     cuerpoSuplementos.className = "table-border-bottom-0";
//                 //     cuerpoSuplementos.appendChild(fila);
//                 // }
//             }
//             );
//             tablaCereales.className = "table";
//             tablaCereales.appendChild(cuerpoCereales);

//             tablaTuberculos.className = "table";
//             tablaTuberculos.appendChild(cuerpoTuberculos);

//             tablaPlatanos.className = "table";
//             tablaPlatanos.appendChild(cuerpoPlatanos);

//             tablaRaices.className = "table";
//             tablaRaices.appendChild(cuerpoRaices);

//             tablaLeguminosas.className = "table";
//             tablaLeguminosas.appendChild(cuerpoLeguminosas);

//             tablaCarnesPollo.className = "table";
//             tablaCarnesPollo.appendChild(cuerpoCarnesPollo);

//             tablaLecheDerivados.className = "table";
//             tablaLecheDerivados.appendChild(cuerpoLecheDerivados);

//             tablaLecheBajosGrasa.className = "table";
//             tablaLecheBajosGrasa.appendChild(cuerpoLecheBajosGrasa);

//             tablaFrutas.className = "table";
//             tablaFrutas.appendChild(cuerpoFrutas);

//             tablaVerduras.className = "table";
//             tablaVerduras.appendChild(cuerpoVerduras);

//             tablaFrutosSecos.className = "table";
//             tablaFrutosSecos.appendChild(cuerpoFrutosSecos);

//             tablaGrasasPoli.className = "table";
//             tablaGrasasPoli.appendChild(cuerpoGrasasPoli);

//             tablaGrasasMono.className = "table";
//             tablaGrasasMono.appendChild(cuerpoGrasasMono);

//             tablaGrasasSatu.className = "table";
//             tablaGrasasSatu.appendChild(cuerpoGrasasSatu);

//             tablaAzucaresSimples.className = "table";
//             tablaAzucaresSimples.appendChild(cuerpoAzucaresSimples);

//             tablaDulces.className = "table";
//             tablaDulces.appendChild(cuerpoDulces);

//             tablaMiscelaneos.className = "table";
//             tablaMiscelaneos.appendChild(cuerpoMiscelaneos);

//             tablaPreparados.className = "table";
//             tablaPreparados.appendChild(cuerpoPreparados);

//             tablaEspecias.className = "table";
//             tablaEspecias.appendChild(cuerpoEspecias);

//             tablaBebidadasAlcoho.className = "table";
//             tablaBebidadasAlcoho.appendChild(cuerpoBebidadasAlcoho);

//             seleccionarAlimentosRegulares();
//             // FoodsEnergyRegularSelection();
//             // FoodsProteinRegularSelection()
//         });
// }
// function traerAlimRegSelecc() {
//     try {
//         // Energeticos
//         let tablaEnergeticos = document.getElementById('tablaEnergeticos');
//         let cuerpoEnergeticos = document.createElement('tbody');
//         // Proteicos
//         let tablaProteicos = document.getElementById('tablaProteicos');
//         let cuerpoProteicos = document.createElement('tbody');
//         // Lacteos
//         let tablaLacteos = document.getElementById('tablaLacteos');
//         let cuerpoLacteos = document.createElement('tbody');
//         // Frutas y Verduras
//         let tablaFrutyVeg = document.getElementById('tablaFrutyVeg');
//         let cuerpoFrutyVeg = document.createElement('tbody');
//         // Frutas y Verduras
//         let tablaGrasasSalud = document.getElementById('tablaGrasasSalud');
//         let cuerpoGrasasSalud = document.createElement('tbody');
//         // Otros
//         let tablaOtrosSelecc = document.getElementById('tablaOtrosSelecc');
//         let cuerpoOtrosSelecc = document.createElement('tbody');
//         //Endpoint
//         fetch('https://localhost:7155/alimentoRegularSeleccionado/listar')
//             .then((response) => response.json())
//             .then((alimRegSelecc) => {
//                 alimRegSelecc.forEach(alimento => {
//                     // console.log(alimento)
//                     let fila = document.createElement('tr');
//                     let tdImage = document.createElement('td');
//                     let imgAlimento = document.createElement("img");
//                     let tdNombre = document.createElement('td');
//                     let tdGrupoAlim = document.createElement('td');
//                     let tdCaloria = document.createElement('td');
//                     let tdPorcion = document.createElement("td");
//                     let inputPorcion = document.createElement("input");


//                     tdImage.style = "width: 30px; text-align: center;";
//                     imgAlimento.style = "margin-right: 10px;";
//                     imgAlimento.src = "../../assets/img/alimentosReg/" + alimento.fkIdAlimentoRegularSlcnn + ".png";
//                     tdImage.appendChild(imgAlimento);
//                     fila.appendChild(tdImage);

//                     tdNombre.innerText = alimento.nombreAlimento;
//                     tdNombre.id = alimento.fkIdAlimentoRegularSlcnn;
//                     tdNombre.style = "font-size:18px; text-align: left;";
//                     fila.appendChild(tdNombre);

//                     tdGrupoAlim.innerText = alimento.grupoAlimenticio;
//                     tdGrupoAlim.id = alimento.idGrupoAlimenticio;
//                     tdGrupoAlim.style = "font-size:18px; text-align: left;";
//                     fila.appendChild(tdGrupoAlim);

//                     tdCaloria.innerText = alimento.caloriasAlimento;
//                     tdCaloria.id = 'calSel_' + alimento.fkIdAlimentoRegularSlcnn;
//                     tdCaloria.style = "font-size:18px; text-align: left;";
//                     fila.appendChild(tdCaloria);

//                     tdPorcion.style = "font-size:18px; text-align: center;";
//                     inputPorcion.type = "number";
//                     inputPorcion.className = "form-control"
//                     inputPorcion.id = 'regSel_' + alimento.fkIdAlimentoRegularSlcnn;
//                     inputPorcion.min = 0;
//                     inputPorcion.max = 12;
//                     inputPorcion.step = "1";
//                     inputPorcion.style = "width: 100px; margin-left: auto; margin-right: auto;";
//                     tdPorcion.appendChild(inputPorcion);
//                     fila.appendChild(tdPorcion);

//                     if (alimento.idGrupoAlimenticio === 1) {
//                         cuerpoEnergeticos.className = "table-border-bottom-0";
//                         cuerpoEnergeticos.appendChild(fila);
//                     }
//                     else if (alimento.idGrupoAlimenticio === 2) {
//                         cuerpoProteicos.className = "table-border-bottom-0";
//                         cuerpoProteicos.appendChild(fila);
//                     }
//                     else if ((alimento.idGrupoAlimenticio === 3) || (alimento.idGrupoAlimenticio === 4)) {
//                         cuerpoLacteos.className = "table-border-bottom-0";
//                         cuerpoLacteos.appendChild(fila);
//                     }
//                     else if (alimento.idGrupoAlimenticio === 5) {
//                         cuerpoFrutyVeg.className = "table-border-bottom-0";
//                         cuerpoFrutyVeg.appendChild(fila);
//                     }
//                     else if (alimento.idGrupoAlimenticio === 6) {
//                         cuerpoGrasasSalud.className = "table-border-bottom-0";
//                         cuerpoGrasasSalud.appendChild(fila);
//                     }
//                     else {
//                         cuerpoOtrosSelecc.className = "table-border-bottom-0";
//                         cuerpoOtrosSelecc.appendChild(fila);
//                     }
//                 });
//                 tablaEnergeticos.className = "table";
//                 tablaEnergeticos.appendChild(cuerpoEnergeticos);

//                 tablaProteicos.className = "table";
//                 tablaProteicos.appendChild(cuerpoProteicos);

//                 tablaLacteos.className = "table";
//                 tablaLacteos.appendChild(cuerpoLacteos);

//                 tablaFrutyVeg.className = "table";
//                 tablaFrutyVeg.appendChild(cuerpoFrutyVeg);

//                 tablaGrasasSalud.className = "table";
//                 tablaGrasasSalud.appendChild(cuerpoGrasasSalud);

//                 tablaOtrosSelecc.className = "table";
//                 tablaOtrosSelecc.appendChild(cuerpoOtrosSelecc);

//             });

//     } catch (e) {
//         console.log(e);
//     }
// }
// function seleccionarAlimentosRegulares() {
//     document.getElementById("porcionesRequeridasEnergeticos").innerHTML = porcionesRequeridasEnergeticos;
//     const inpust = document.querySelectorAll("input[type=number]");
//     inpust.forEach(input => {
//         input.addEventListener('change', function (e) {
//             totalCalorias = 0;
//             totalporcionesEnergeticos = 0;
//             porcentajeEnergetico = 0;
//             // --------------------------------------------------------------------------------------------------------------------------
//             //Total de input energeticos
//             let cereales = document.querySelectorAll("#tablaCereales input[type=number]");
//             let tuberculos = document.querySelectorAll("#tablaTuberculos input[type=number]");
//             let platanos = document.querySelectorAll("#tablaPlatanos input[type=number]");
//             let raices = document.querySelectorAll("#tablaRaices input[type=number]");
//             let leguminosas = document.querySelectorAll("#tablaLeguminosas input[type=number]");

//             const energeticos = cereales.length + tuberculos.length + platanos.length + raices.length + leguminosas.length;

//             //Lectura de Energeticos
//             for (let i = 1; i <= energeticos; i++) {
//                 try {
//                     let idcalorias = "cal_" + i.toString();
//                     let idporciones = "reg_" + i.toString();
//                     let calorias = parseFloat(document.getElementById(idcalorias).innerHTML);
//                     numPorciones = parseInt(document.getElementById(idporciones).value);
//                     if (isNaN(numPorciones) !== true) {
//                         totalCalEnerg = parseFloat(calorias) * numPorciones;
//                         totalCalorias = totalCalorias + totalCalEnerg;
//                         totalporcionesEnergeticos = totalporcionesEnergeticos + numPorciones;
//                         porcentajeEnergetico = totalporcionesEnergeticos / porcionesRequeridasEnergeticos;
//                     }
//                     if ((totalporcionesEnergeticos == porcionesRequeridasEnergeticos)) {
//                         for (let j = 1; j <= energeticos; j++) {
//                             document.getElementById("reg_" + j).disabled = true;
//                         }
//                     }

//                 } catch (error) {
//                     console.log(error)
//                 }
//             }
//             //Total Porciones Energeticos
//             // document.getElementById("porcionesElegEnergSelecc").innerHTML = totalporcionesEnergeticos;
//             document.getElementById("porcionesElegidasEnergeticos").innerHTML = totalporcionesEnergeticos;

//             // document.getElementById("barraEnergeticosSeleccionados").style = "width: " + ((porcentajeEnergetico * 100).toFixed(2)) + "%"
//             document.getElementById("barraEnergeticos").style = "width: " + ((porcentajeEnergetico * 100).toFixed(2)) + "%"

//             // document.getElementById("lblEnergeticsSeleccionados").innerHTML = ((porcentajeEnergetico * 100).toFixed()) + "%"
//             document.getElementById("lblBarraPorcionEneregeticos").innerHTML = ((porcentajeEnergetico * 100).toFixed()) + "%"
//             // --------------------------------------------------------------------------------------------------------------------------




//             //Total de input Proteicos
//             const carnePollo = document.querySelectorAll("#tablaCarnesPollo input[type=number]");
//             proteicos = carnePollo.length + energeticos;
//             let totalporcionesProteicos = 0;
//             let porcentajeProteicos = 0;

//             //Lectura de Proteicos
//             for (let i = energeticos + 1; i <= proteicos; i++) {
//                 try {
//                     let idcalorias = "cal_" + i.toString();
//                     let idporciones = "reg_" + i.toString();
//                     let calorias = parseFloat(document.getElementById(idcalorias).innerHTML);
//                     numPorciones = parseInt(document.getElementById(idporciones).value);
//                     if (isNaN(numPorciones) !== true) {
//                         totalCalEnerg = parseFloat(calorias) * numPorciones;
//                         totalCalorias = totalCalorias + totalCalEnerg;
//                         totalporcionesProteicos = totalporcionesProteicos + numPorciones;
//                         porcentajeProteicos = totalporcionesProteicos / porcionesRequeridasProteicos;
//                     }
//                     if (totalporcionesProteicos === porcionesRequeridasProteicos) {
//                         for (let j = energeticos + 1; j <= proteicos; j++) {
//                             document.getElementById("reg_" + j).disabled = true;
//                         }
//                     }
//                 } catch (error) {
//                     console.log(error)
//                 }
//             }
//             //Total Porciones Proteicos
//             document.getElementById("porcionesElegidasProteicos").innerHTML = totalporcionesProteicos;
//             document.getElementById("barraProteicos").style = "width: " + ((porcentajeProteicos * 100).toFixed(2)) + "%"
//             document.getElementById("lblBarraPorcionesProteicos").innerHTML = ((porcentajeProteicos * 100).toFixed()) + "%"
//             // --------------------------------------------------------------------------------------------------------------------------


//             //Total de input Lacteos y Derivados
//             lecheDeriv = document.querySelectorAll("#tablaLecheDerivados input[type=number]");
//             lecheDerivBajos = document.querySelectorAll("#tablaLecheBajosGrasa input[type=number]");
//             lacteos = lecheDeriv.length + lecheDerivBajos.length + proteicos;

//             //Contador de porciones lacteos
//             let totalporcionesLacteos = 0;

//             //ID para mostrar los datos en las barras y su porcentaje
//             let porcionesLacteosReque = parseInt(document.getElementById("porcionesRequeridasLacteos").innerHTML);
//             let porcentajeLacteos = 0;

//             //Lectura de Lacteos
//             for (let i = proteicos + 1; i <= lacteos; i++) {
//                 try {
//                     let idcalorias = "cal_" + i.toString();
//                     let idporciones = "reg_" + i.toString();
//                     let calorias = parseFloat(document.getElementById(idcalorias).innerHTML);
//                     numPorciones = parseInt(document.getElementById(idporciones).value);
//                     if (isNaN(numPorciones) !== true) {
//                         totalCalEnerg = parseFloat(calorias) * numPorciones;
//                         totalCalorias = totalCalorias + totalCalEnerg;
//                         totalporcionesLacteos = totalporcionesLacteos + numPorciones;
//                         porcentajeLacteos = totalporcionesLacteos / porcionesLacteosReque;
//                     }
//                     if (totalporcionesLacteos === porcionesLacteosReque) {
//                         for (let j = proteicos + 1; j <= lacteos; j++) {
//                             document.getElementById("reg_" + j).disabled = true;
//                         }
//                     }
//                 } catch (error) {
//                     console.log(error)
//                 }
//             }
//             //Total Porciones Lacteos
//             document.getElementById("porcionesElegidasLacteos").innerHTML = totalporcionesLacteos;
//             document.getElementById("barraLacteos").style = "width: " + ((porcentajeLacteos * 100).toFixed(2)) + "%"
//             document.getElementById("lblBarraPorcionesLacteos").innerHTML = ((porcentajeLacteos * 100).toFixed()) + "%"
//             // --------------------------------------------------------------------------------------------------------------------------


//             //Total de input Frutas y Verduras
//             frutas = document.querySelectorAll("#tablaFrutas input[type=number]");
//             verduras = document.querySelectorAll("#tablaVerduras input[type=number]");
//             frutasVerduras = frutas.length + verduras.length + lacteos;

//             //Contador de porciones lacteos
//             let totalporcionesFrutasVerduras = 0;

//             //ID para mostrar los datos en las barras y su porcentaje
//             let porcionesFrutVerdReque = parseInt(document.getElementById("porcionesRequeridasFrutasVerduras").innerHTML);
//             let porcentajeFrutasVerduras = 0;

//             //Lectura de Frutas y Verduras
//             for (let i = lacteos + 1; i <= frutasVerduras; i++) {
//                 // try {
//                 let idcalorias = "cal_" + i.toString();
//                 let idporciones = "reg_" + i.toString();
//                 let calorias = parseFloat(document.getElementById(idcalorias).innerHTML);
//                 numPorciones = parseInt(document.getElementById(idporciones).value);
//                 if (isNaN(numPorciones) !== true) {
//                     totalCalEnerg = parseFloat(calorias) * numPorciones;
//                     totalCalorias = totalCalorias + totalCalEnerg;
//                     totalporcionesFrutasVerduras = totalporcionesFrutasVerduras + numPorciones;
//                     porcentajeFrutasVerduras = totalporcionesFrutasVerduras / porcionesFrutVerdReque;
//                 }
//                 if (totalporcionesFrutasVerduras === porcionesFrutVerdReque) {
//                     for (let j = lacteos + 1; j <= frutasVerduras; j++) {
//                         document.getElementById("reg_" + j).disabled = true;
//                     }
//                 }
//                 // } catch (error) {
//                 //     console.log(error)
//                 // }
//             }
//             //Total Porciones Frutas y Verduras
//             document.getElementById("porcionesElegidasFrutasVerduras").innerHTML = totalporcionesFrutasVerduras;
//             document.getElementById("barraFrutasVerduras").style = "width: " + ((porcentajeFrutasVerduras * 100).toFixed(2)) + "%"
//             document.getElementById("lblBarraPorcionesFrutasVerduras").innerHTML = ((porcentajeFrutasVerduras * 100).toFixed()) + "%"
//             // --------------------------------------------------------------------------------------------------------------------------


//             //Total de input Grasas Saludables
//             frutoSecos = document.querySelectorAll("#tablaFrutosSecos input[type=number]");
//             grasasPoliin = document.querySelectorAll("#tablaGrasasPoli input[type=number]");
//             grasasMono = document.querySelectorAll("#tablaGrasasMono input[type=number]");
//             grasaSaludables = frutoSecos.length + grasasPoliin.length + grasasMono.length + frutasVerduras;

//             //Contador de porciones grasas saludables
//             let totalporcionesGrasaSaludables = 0;

//             //ID para mostrar los datos en las barras y su porcentaje
//             let porcionesGrasaSaludReque = parseInt(document.getElementById("porcionesRequeridasGrasaSaludables").innerHTML);
//             let porcentajeGrasaSaludables = 0;

//             //Lectura de Grasas Saludables
//             for (let i = frutasVerduras + 1; i <= grasaSaludables; i++) {
//                 try {
//                     let idcalorias = "cal_" + i.toString();
//                     let idporciones = "reg_" + i.toString();
//                     let calorias = parseFloat(document.getElementById(idcalorias).innerHTML);
//                     numPorciones = parseInt(document.getElementById(idporciones).value);
//                     if (isNaN(numPorciones) !== true) {
//                         totalCalEnerg = parseFloat(calorias) * numPorciones;
//                         totalCalorias = totalCalorias + totalCalEnerg;
//                         totalporcionesGrasaSaludables = totalporcionesGrasaSaludables + numPorciones;
//                         porcentajeGrasaSaludables = totalporcionesGrasaSaludables / porcionesGrasaSaludReque;
//                     }
//                     if (totalporcionesGrasaSaludables === porcionesGrasaSaludReque) {
//                         for (let j = frutasVerduras + 1; j <= grasaSaludables; j++) {
//                             document.getElementById("reg_" + j).disabled = true;
//                         }
//                     }
//                 } catch (error) {
//                     console.log(error)
//                 }
//             }
//             //Total Porciones Grasas Saludables
//             document.getElementById("porcionesElegidasGrasaSaludables").innerHTML = totalporcionesGrasaSaludables;
//             document.getElementById("barraGrasaSaludables").style = "width: " + ((porcentajeGrasaSaludables * 100).toFixed(2)) + "%"
//             document.getElementById("lblBarraPorcionesGrasaSaludables").innerHTML = ((porcentajeGrasaSaludables * 100).toFixed()) + "%"
//             // --------------------------------------------------------------------------------------------------------------------------

//             //Total de input Otros Alimentos
//             grasaSaturadas = document.querySelectorAll("#tablaGrasasSatu input[type=number]");
//             azucaresSimples = document.querySelectorAll("#tablaAzucaresSimples input[type=number]");
//             dulces = document.querySelectorAll("#tablaDulces input[type=number]");
//             miscelaneos = document.querySelectorAll("#tablaMiscelaneos input[type=number]");
//             preparados = document.querySelectorAll("#tablaPreparados input[type=number]");
//             especies = document.querySelectorAll("#tablaEspecias input[type=number]");
//             bebidasAlcoh = document.querySelectorAll("#tablaBebidadasAlcoho input[type=number]");
//             otros = grasaSaturadas.length + azucaresSimples.length + dulces.length + miscelaneos.length + preparados.length + especies.length + bebidasAlcoh.length + grasaSaludables;

//             //Contador de porciones de otros alimentos
//             // let totalporcionesOtros = 0;

//             //ID para mostrar los datos en las barras y su porcentaje
//             // let porcentajeOtros = 0;

//             //Lectura de Otros Alimentos
//             for (let i = grasaSaludables + 1; i <= otros; i++) {
//                 // try {
//                 let idcalorias = "cal_" + i.toString();
//                 let idporciones = "reg_" + i.toString();
//                 calorias = parseFloat(document.getElementById(idcalorias).innerHTML);
//                 numPorciones = parseInt(document.getElementById(idporciones).value);
//                 if (isNaN(numPorciones) !== true) {
//                     totalCalotros = parseFloat(calorias) * numPorciones;
//                     totalCalorias = totalCalorias + totalCalotros;
//                     // totalporcionesGrasaSaludables = totalporcionesGrasaSaludables + numPorciones;
//                     // porcentajeGrasaSaludables = totalporcionesGrasaSaludables / porcionesGrasaSaludReque;
//                 }
//                 caloriasReq = parseInt(document.getElementById("caloriasRequeridas").innerHTML);
//                 // console.log('Req', caloriasReq);
//                 // console.log('Sel', totalCalorias);
//                 if (totalCalorias > caloriasReq) {
//                     for (let j = grasaSaludables + 1; j <= otros; j++) {
//                         document.getElementById("reg_" + j).disabled = true;
//                     }
//                 }
//                 // } catch (error) {
//                 //     console.log(error)
//                 // }
//             }
//             // --------------------------------------------------------------------------------------------------------------------------
//             //Total Calorias CET vs GET
//             document.getElementById("caloriasSeleccionadas").innerHTML = totalCalorias.toFixed(2);
//             caloriasReq = parseInt(document.getElementById("caloriasRequeridas").innerHTML);
//             let caloriasTotales = totalCalorias / caloriasReq;

//             document.getElementById("barraCalorias").style = "width: " + ((caloriasTotales * 100).toFixed(2)) + "%"
//             document.getElementById("lblBarraCalorias").innerHTML = ((caloriasTotales * 100).toFixed()) + "%"

//         });
//     });
// }
// function guardarAlimentosRegulares() {
//     try {
//         const foodSelections = document.querySelectorAll("input[type=number]");
//         console.log(foodSelections);
//         for (let i = 0, food; food = foodSelections[i++];) {
//             if (food.value !== "") {
//                 let idAli = food.id;
//                 console.log('IdInput:', idAli);
//                 console.log('IdAlimentos:', idAli.slice(4))
//                 console.log('Porciones:', document.getElementById(idAli).value);
//                 fetch('https://localhost:7155/alimentoRegularSeleccionado/crear', {
//                     method: 'POST',
//                     body: JSON.stringify({
//                         fkIdMomentoComidaSlccn: 1,
//                         fkIdPerfilUsuarioSlccn: 1,
//                         fkIdAlimentoRegularSlcnn: parseInt(idAli.slice(4)),
//                         porciones: parseInt(document.getElementById(idAli).value),
//                         ipPc: "00.00.00.00",
//                     }),
//                     headers: {
//                         'Content-type': 'application/json; charset=UTF-8',
//                     },
//                 })
//                     .then((response) => response.json())
//                     .then((json) => console.log(json));
//             }
//         }
//         location.href = window.location.origin + '/html/vertical-menu-template/tables-pdf-selected-foods.html'
//     } catch (error) {
//         console.log(error);
//     }
// }
// function alimentos_pdf() {
//     try {
//         //Obtener fecha del sistema
//         const fechaActual = new Date()
//         ano = fechaActual.getFullYear();
//         mes = fechaActual.getMonth() + 1;
//         dia = fechaActual.getDate();
//         console.log(ano);
//         console.log(mes);
//         console.log(dia);
//         fecha = ano + '-' + mes + '-' + dia;
//         console.log(fecha)

//         // Alimentos elegidos
//         let tablaElegidos = document.getElementById('alimentosElegidos');
//         let cuerpoTabla = document.createElement('tbody');
//         fetch('https://localhost:7155/alimentoRegularSeleccionado/pdf?fecha=' + fecha + '')
//             .then((response) => response.json())
//             .then((alimRegSelecc) => {
//                 alimRegSelecc.forEach(alimento => {
//                     console.log(alimento);
//                     //Imagen
//                     let tdImage = document.createElement('td');
//                     let imgAlimento = document.createElement("img");
//                     imgAlimento.style = "width: 40px;"
//                     imgAlimento.src = "../../assets/img/alimentosReg/" + alimento.idAlimentoSeleccionado + ".png";
//                     tdImage.appendChild(imgAlimento);

//                     //Nombre
//                     let tdNombre = document.createElement('td');
//                     let strongNombre = document.createElement('strong');
//                     strongNombre.innerText = alimento.nombreAlimento;
//                     tdNombre.appendChild(strongNombre);

//                     //Peso Crudo
//                     let tdPesoCrudo = document.createElement('td');
//                     let spanPesoCrudo = document.createElement('span');
//                     spanPesoCrudo.innerText = alimento.pesoCrudo;
//                     spanPesoCrudo.className = "badge bg-label-danger me-1";
//                     spanPesoCrudo.style = "font-size: 14px;";
//                     tdPesoCrudo.appendChild(spanPesoCrudo)
//                     tdPesoCrudo.className = "text-center";

//                     //Peso Cocido
//                     let tdPesoCocido = document.createElement('td');
//                     let spanPesoCocido = document.createElement('span');
//                     spanPesoCocido.innerText = alimento.pesoCocido;
//                     spanPesoCocido.className = "badge bg-label-warning me-1";
//                     spanPesoCocido.style = "font-size: 14px;";
//                     tdPesoCocido.appendChild(spanPesoCocido)
//                     tdPesoCocido.className = "text-center"


//                     //Medida y Referencia Casera
//                     let tdMedidaCasera = document.createElement("td");
//                     let spanMedidaCasera = document.createElement('span');
//                     let totalMedida = parseFloat(alimento.medida) * parseFloat(alimento.porciones);
//                     spanMedidaCasera.innerText = totalMedida + "  " + alimento.referencia;
//                     spanMedidaCasera.className = "badge bg-label-success me-1";
//                     spanMedidaCasera.style = "font-size: 14px;";
//                     tdMedidaCasera.appendChild(spanMedidaCasera);
//                     tdMedidaCasera.className = "text-center";

//                     //Agregar Elementos a la Fila
//                     let fila = document.createElement('tr');
//                     fila.appendChild(tdImage);
//                     fila.appendChild(tdNombre);
//                     fila.appendChild(tdPesoCrudo);
//                     fila.appendChild(tdPesoCocido);
//                     fila.appendChild(tdMedidaCasera);

//                     //Agregar Fila al cuerpo de la tabla
//                     cuerpoTabla.appendChild(fila);

//                 });
//                 tablaElegidos.appendChild(cuerpoTabla);
//             });
//     } catch (error) {
//         console.log(error);
//     }
// }


// ==========================================================================================================================
// Calculos de CET - Alimentos Vegetarianos
// ==========================================================================================================================


function traerAlimentosVegetarianos() {
    try {
        // fetch('http://www.apielsa.somee.com/alimentoVegular/listar')
        fetch('https://localhost:7155/alimentoVegetariano/listar')
            .then((response) => response.json())
            .then((listaAlimentosVegetarianos) => {
                // console.log("Promesas");
                // Energeticos
                let tablaCerealesVeg = document.getElementById('tablaCerealesVeg');
                let cuerpoCerealesVeg = document.createElement('tbody');

                let tablaTuberculosVeg = document.getElementById('tablaTuberculosVeg');
                let cuerpoTuberculosVeg = document.createElement('tbody');

                let tablaPlatanosVeg = document.getElementById('tablaPlatanosVeg');
                let cuerpoPlatanosVeg = document.createElement('tbody');

                let tablaRaicesVeg = document.getElementById('tablaRaicesVeg');
                let cuerpoRaicesVeg = document.createElement('tbody');

                let tablaAlimentosVege = document.getElementById('tablaAlimentosVege');
                let cuerpoAlimentosVege = document.createElement('tbody');

                // Proteicos
                let tablaVeganos = document.getElementById('tablaVeganos');
                let cuerpoVeganos = document.createElement('tbody');

                // Legumonisas
                let tablaVegLeguminosas = document.getElementById('tablaVegLeguminosas');
                let cuerpoVegLeguminosas = document.createElement('tbody');

                // Lacteos
                let tablaLecheDerivadosVeg = document.getElementById('tablaLecheDerivadosVeg');
                let cuerpoLecheDerivadosVeg = document.createElement('tbody');

                let tablaLecheBajosGrasaVeg = document.getElementById('tablaLecheBajosGrasaVeg');
                let cuerpoLecheBajosGrasaVeg = document.createElement('tbody');

                // Huevos
                let tablaHuevos = document.getElementById('tablaHuevos');
                let cuerpoHuevos = document.createElement('tbody');

                // Frutas y Verduras
                let tablaFrutasVeg = document.getElementById('tablaFrutasVeg');
                let cuerpoFrutasVeg = document.createElement('tbody');

                let tablaVerdurasVeg = document.getElementById('tablaVerdurasVeg');
                let cuerpoVerdurasVeg = document.createElement('tbody');

                // Grasas Saludables
                let tablaFrutosSecosVeg = document.getElementById('tablaFrutosSecosVeg');
                let cuerpoFrutosSecosVeg = document.createElement('tbody');

                let tablaGrasasPoliVeg = document.getElementById('tablaGrasasPoliVeg');
                let cuerpoGrasasPoliVeg = document.createElement('tbody');

                let tablaGrasasMonoVeg = document.getElementById('tablaGrasasMonoVeg');
                let cuerpoGrasasMonoVeg = document.createElement('tbody');

                // Otros
                let tablaGrasasSatuVeg = document.getElementById('tablaGrasasSatuVeg');
                let cuerpoGrasasSatuVeg = document.createElement('tbody');

                let tablaAzucaresSimplesVeg = document.getElementById('tablaAzucaresSimplesVeg');
                let cuerpoAzucaresSimplesVeg = document.createElement('tbody');

                let tablaDulcesVeg = document.getElementById('tablaDulcesVeg');
                let cuerpoDulcesVeg = document.createElement('tbody');

                let tablaMiscelaneosVeg = document.getElementById('tablaMiscelaneosVeg');
                let cuerpoMiscelaneosVeg = document.createElement('tbody');

                let tablaPreparadosVeg = document.getElementById('tablaPreparadosVeg');
                let cuerpoPreparadosVeg = document.createElement('tbody');

                let tablaEspeciasVeg = document.getElementById('tablaEspeciasVeg');
                let cuerpoEspeciasVeg = document.createElement('tbody');

                let tablaBebidadasAlcohoVeg = document.getElementById('tablaBebidadasAlcohoVeg');
                let cuerpoBebidadasAlcohoVeg = document.createElement('tbody');

                listaAlimentosVegetarianos.forEach(alimento => {
                    // console.log(alimento);
                    let fila = document.createElement('tr');
                    let tdImage = document.createElement('td');
                    let tdNombre = document.createElement('td');
                    let tdPesoCocido = document.createElement('td');
                    let tdPesoCrudo = document.createElement('td');
                    let tdCalorias = document.createElement('td');
                    let spanPesoCocido = document.createElement("span");;
                    let spanPesoCrudo = document.createElement("span");;
                    let spanPesoCalorias = document.createElement("span");;
                    let tdPorcion = document.createElement("td");
                    let inputPorcion = document.createElement("input");
                    let imgAlimento = document.createElement("img");

                    tdImage.style = "width: 30px; text-align: center;";
                    imgAlimento.style = "margin-right: 10px;";
                    imgAlimento.src = "../../assets/img/alimentosVeg/" + alimento.idAlimento + ".png";
                    tdImage.appendChild(imgAlimento);
                    fila.appendChild(tdImage);

                    tdNombre.innerText = alimento.nombreAlimento;
                    tdNombre.id = alimento.idAlimento;
                    tdNombre.style = "font-size:18px; text-align: left;";
                    fila.appendChild(tdNombre);

                    spanPesoCocido.innerText = alimento.pesoCocinado;
                    tdPesoCocido.style = "font-size:18px; text-align: center;";
                    spanPesoCocido.className = "badge bg-label-warning";
                    tdPesoCocido.appendChild(spanPesoCocido);
                    fila.appendChild(tdPesoCocido);

                    spanPesoCrudo.innerText = alimento.pesoCrudo;
                    tdPesoCrudo.style = "font-size:18px; text-align: center;";
                    spanPesoCrudo.className = "badge bg-label-info";
                    tdPesoCrudo.appendChild(spanPesoCrudo);
                    fila.appendChild(tdPesoCrudo);

                    spanPesoCalorias.innerText = alimento.calorias;
                    tdCalorias.style = "font-size:18px; text-align: center;";
                    spanPesoCalorias.className = "badge bg-label-success";
                    tdCalorias.appendChild(spanPesoCalorias);
                    fila.appendChild(tdCalorias);

                    tdPorcion.style = "font-size:18px; text-align: center;";
                    inputPorcion.type = "number";
                    inputPorcion.className = "form-control"
                    inputPorcion.id = 'veg_' + alimento.idAlimento;
                    inputPorcion.min = 0;
                    inputPorcion.max = 12;
                    inputPorcion.step = "1";
                    inputPorcion.style = "width: 100px; margin-left: auto; margin-right: auto;";
                    tdPorcion.appendChild(inputPorcion);
                    fila.appendChild(tdPorcion);
                    if (alimento.fkIdSubgrupoAlimenticio === 1) {
                        cuerpoCerealesVeg.className = "table-border-bottom-0";
                        cuerpoCerealesVeg.appendChild(fila);
                    }
                    if (alimento.fkIdSubgrupoAlimenticio === 2) {
                        cuerpoTuberculosVeg.className = "table-border-bottom-0";
                        cuerpoTuberculosVeg.appendChild(fila);
                    }
                    if (alimento.fkIdSubgrupoAlimenticio === 3) {
                        cuerpoPlatanosVeg.className = "table-border-bottom-0";
                        cuerpoPlatanosVeg.appendChild(fila);
                    }
                    if (alimento.fkIdSubgrupoAlimenticio === 4) {
                        cuerpoRaicesVeg.className = "table-border-bottom-0";
                        cuerpoRaicesVeg.appendChild(fila);
                    }
                    if (alimento.fkIdSubgrupoAlimenticio === 6) {
                        cuerpoAlimentosVege.className = "table-border-bottom-0";
                        cuerpoAlimentosVege.appendChild(fila);
                    }
                    if (alimento.fkIdSubgrupoAlimenticio === 15) {
                        cuerpoVeganos.className = "table-border-bottom-0";
                        cuerpoVeganos.appendChild(fila);
                    }
                    if (alimento.fkIdSubgrupoAlimenticio === 16) {
                        cuerpoVegLeguminosas.className = "table-border-bottom-0";
                        cuerpoVegLeguminosas.appendChild(fila);
                    }
                    if (alimento.fkIdSubgrupoAlimenticio === 17) {
                        cuerpoLecheDerivadosVeg.className = "table-border-bottom-0";
                        cuerpoLecheDerivadosVeg.appendChild(fila);
                    }
                    if (alimento.fkIdSubgrupoAlimenticio === 18) {
                        cuerpoLecheBajosGrasaVeg.className = "table-border-bottom-0";
                        cuerpoLecheBajosGrasaVeg.appendChild(fila);
                    }
                    if (alimento.fkIdSubgrupoAlimenticio === 19) {
                        cuerpoHuevos.className = "table-border-bottom-0";
                        cuerpoHuevos.appendChild(fila);
                    }
                    if (alimento.fkIdSubgrupoAlimenticio === 10) {
                        cuerpoVerdurasVeg.className = "table-border-bottom-0";
                        cuerpoVerdurasVeg.appendChild(fila);
                    }
                    if (alimento.fkIdSubgrupoAlimenticio === 11) {
                        cuerpoFrutasVeg.className = "table-border-bottom-0";
                        cuerpoFrutasVeg.appendChild(fila);
                    }
                    if (alimento.fkIdSubgrupoAlimenticio === 12) {
                        cuerpoFrutosSecosVeg.className = "table-border-bottom-0";
                        cuerpoFrutosSecosVeg.appendChild(fila);
                    }
                    if (alimento.fkIdSubgrupoAlimenticio === 13) {
                        cuerpoGrasasPoliVeg.className = "table-border-bottom-0";
                        cuerpoGrasasPoliVeg.appendChild(fila);
                    }
                    if (alimento.fkIdSubgrupoAlimenticio === 14) {
                        cuerpoGrasasMonoVeg.className = "table-border-bottom-0";
                        cuerpoGrasasMonoVeg.appendChild(fila);
                    }
                    if (alimento.fkIdSubgrupoAlimenticio === 20) {
                        cuerpoGrasasSatuVeg.className = "table-border-bottom-0";
                        cuerpoGrasasSatuVeg.appendChild(fila);
                    }
                    if (alimento.fkIdSubgrupoAlimenticio === 21) {
                        cuerpoAzucaresSimplesVeg.className = "table-border-bottom-0";
                        cuerpoAzucaresSimplesVeg.appendChild(fila);
                    }
                    if (alimento.fkIdSubgrupoAlimenticio === 22) {
                        cuerpoDulcesVeg.className = "table-border-bottom-0";
                        cuerpoDulcesVeg.appendChild(fila);
                    }
                    if (alimento.fkIdSubgrupoAlimenticio === 23) {
                        cuerpoMiscelaneosVeg.className = "table-border-bottom-0";
                        cuerpoMiscelaneosVeg.appendChild(fila);
                    }
                    if (alimento.fkIdSubgrupoAlimenticio === 24) {
                        cuerpoPreparadosVeg.className = "table-border-bottom-0";
                        cuerpoPreparadosVeg.appendChild(fila);
                    }
                    if (alimento.fkIdSubgrupoAlimenticio === 25) {
                        cuerpoEspeciasVeg.className = "table-border-bottom-0";
                        cuerpoEspeciasVeg.appendChild(fila);
                    }
                    if (alimento.fkIdSubgrupoAlimenticio === 26) {
                        cuerpoBebidadasAlcohoVeg.className = "table-border-bottom-0";
                        cuerpoBebidadasAlcohoVeg.appendChild(fila);
                    }
                    // if (alimento.fkIdSubgrupoAlimenticio === 27) {
                    //     cuerpoSuplementos.className = "table-border-bottom-0";
                    //     cuerpoSuplementos.appendChild(fila);
                    // }
                });
                console.log("Llenado de Tablas");
                tablaCerealesVeg.className = "table";
                tablaCerealesVeg.appendChild(cuerpoCerealesVeg);

                tablaTuberculosVeg.className = "table";
                tablaTuberculosVeg.appendChild(cuerpoTuberculosVeg);

                tablaPlatanosVeg.className = "table";
                tablaPlatanosVeg.appendChild(cuerpoPlatanosVeg);

                tablaRaicesVeg.className = "table";
                tablaRaicesVeg.appendChild(cuerpoRaicesVeg);

                tablaAlimentosVege.className = "table";
                tablaAlimentosVege.appendChild(cuerpoAlimentosVege);

                tablaVeganos.className = "table";
                tablaVeganos.appendChild(cuerpoVeganos);

                tablaVegLeguminosas.className = "table";
                tablaVegLeguminosas.appendChild(cuerpoVegLeguminosas);

                tablaLecheDerivadosVeg.className = "table";
                tablaLecheDerivadosVeg.appendChild(cuerpoLecheDerivadosVeg);

                tablaLecheBajosGrasaVeg.className = "table";
                tablaLecheBajosGrasaVeg.appendChild(cuerpoLecheBajosGrasaVeg);

                tablaHuevos.className = "table";
                tablaHuevos.appendChild(cuerpoHuevos);

                tablaFrutasVeg.className = "table";
                tablaFrutasVeg.appendChild(cuerpoFrutasVeg);

                tablaVerdurasVeg.className = "table";
                tablaVerdurasVeg.appendChild(cuerpoVerdurasVeg);

                tablaFrutosSecosVeg.className = "table";
                tablaFrutosSecosVeg.appendChild(cuerpoFrutosSecosVeg);

                tablaGrasasPoliVeg.className = "table";
                tablaGrasasPoliVeg.appendChild(cuerpoGrasasPoliVeg);

                tablaGrasasMonoVeg.className = "table";
                tablaGrasasMonoVeg.appendChild(cuerpoGrasasMonoVeg);

                tablaGrasasSatuVeg.className = "table";
                tablaGrasasSatuVeg.appendChild(cuerpoGrasasSatuVeg);

                tablaAzucaresSimplesVeg.className = "table";
                tablaAzucaresSimplesVeg.appendChild(cuerpoAzucaresSimplesVeg);

                tablaDulcesVeg.className = "table";
                tablaDulcesVeg.appendChild(cuerpoDulcesVeg);

                tablaMiscelaneosVeg.className = "table";
                tablaMiscelaneosVeg.appendChild(cuerpoMiscelaneosVeg);

                tablaPreparadosVeg.className = "table";
                tablaPreparadosVeg.appendChild(cuerpoPreparadosVeg);

                tablaEspeciasVeg.className = "table";
                tablaEspeciasVeg.appendChild(cuerpoEspeciasVeg);

                tablaBebidadasAlcohoVeg.className = "table";
                tablaBebidadasAlcohoVeg.appendChild(cuerpoBebidadasAlcohoVeg);

            });
    } catch (error) {
        console.log(error);
    }
}
function traerAlimVegSelecc() {
    try {
        // Energeticos
        let tablaEnergeticos = document.getElementById('tablaEnergeticosVeg');
        let cuerpoEnergeticos = document.createElement('tbody');
        // Proteicos vegetarianos
        let tablaProteicos = document.getElementById('tablaProteicosVeg');
        let cuerpoProteicos = document.createElement('tbody');
        // Frutas y Verduras
        let tablaFrutyVeg = document.getElementById('tablaFrutyVerdVeg');
        let cuerpoFrutyVeg = document.createElement('tbody');
        // Frutas y Verduras
        let tablaGrasasSalud = document.getElementById('tablaGrasasSaludVeg');
        let cuerpoGrasasSalud = document.createElement('tbody');
        // Otros
        let tablaOtrosSelecc = document.getElementById('tablaOtrosSeleccVeg');
        let cuerpoOtrosSelecc = document.createElement('tbody');
        //Endpoint
        fetch('https://localhost:7155/alimentoVegetarianoSeleccionado/listar')
            .then((response) => response.json())
            .then((alimRegSelecc) => {
                alimRegSelecc.forEach(alimento => {
                    console.log(alimento);
                    let fila = document.createElement('tr');
                    let tdImage = document.createElement('td');
                    let imgAlimento = document.createElement("img");
                    let tdNombre = document.createElement('td');
                    let tdGrupoAlim = document.createElement('td');
                    let tdMomentoComida = document.createElement('td');
                    let tdPorcion = document.createElement("td");
                    let inputPorcion = document.createElement("input");


                    tdImage.style = "width: 30px; text-align: center;";
                    imgAlimento.style = "margin-right: 10px;";
                    imgAlimento.src = "../../assets/img/alimentosVeg/" + alimento.fkIdAlimentoVegetSlcnn + ".png";
                    tdImage.appendChild(imgAlimento);
                    fila.appendChild(tdImage);

                    tdNombre.innerText = alimento.nombreAlimento;
                    tdNombre.id = alimento.idAlimento;
                    tdNombre.style = "font-size:18px; text-align: left;";
                    fila.appendChild(tdNombre);

                    tdGrupoAlim.innerText = alimento.grupoAlimenticio;
                    tdGrupoAlim.id = alimento.idGrupoAlimenticio;
                    tdGrupoAlim.style = "font-size:18px; text-align: left;";
                    fila.appendChild(tdGrupoAlim);

                    tdMomentoComida.innerText = alimento.momentoComida;
                    tdMomentoComida.id = alimento.fkIdMomentoComidaSlccn;
                    tdMomentoComida.style = "font-size:18px; text-align: left;";
                    fila.appendChild(tdMomentoComida);

                    tdPorcion.style = "font-size:18px; text-align: center;";
                    inputPorcion.type = "number";
                    inputPorcion.className = "form-control"
                    inputPorcion.id = alimento.fkIdAlimentoRegularSlcnn;
                    inputPorcion.min = 0;
                    inputPorcion.max = 6;
                    inputPorcion.step = "0.5";
                    inputPorcion.style = "width: 100px; margin-left: auto; margin-right: auto;";
                    tdPorcion.appendChild(inputPorcion);
                    fila.appendChild(tdPorcion);

                    if (alimento.idGrupoAlimenticio === 1) {
                        cuerpoEnergeticos.className = "table-border-bottom-0";
                        cuerpoEnergeticos.appendChild(fila);
                    }
                    else if (alimento.idGrupoAlimenticio === 2 || alimento.idGrupoAlimenticio === 7) {
                        cuerpoProteicos.className = "table-border-bottom-0";
                        cuerpoProteicos.appendChild(fila);
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
function guardarAlimentosVegetarianos() {
    try {
        const foodSelections = document.querySelectorAll("input[type=number]");
        console.log(foodSelections);
        for (let i = 0, food; food = foodSelections[i++];) {
            if (food.value !== "") {
                let idAli = food.id;
                console.log('IdInput:', idAli);
                console.log('IdAlimentos:', idAli.slice(4))
                console.log('Porciones:', document.getElementById(idAli).value);
                fetch('https://localhost:7155/alimentoVegetarianoSeleccionado/crear', {
                    method: 'POST',
                    body: JSON.stringify({
                        fkIdMomentoComidaSlccn: 1,
                        fkIdPerfilUsuarioSlccn: 1,
                        fkIdAlimentoVegetSlcnn: parseInt(idAli.slice(4)),
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
        location.href = window.location.origin + '/html/vertical-menu-template/tables-vegetarian-selected-foods.html'
    } catch (error) {
        console.log(error);
    }


}

// ==========================================================================================================================
// Fin calculos de Alimentos Regulares y Vegetarianos
// ==========================================================================================================================






// localStorage.clear;
const porcionesRequeridasEnergeticos = 15;
// document.getElementById("porcionesReqEnergSelecc").innerText = porcionesRequeridasEnergeticos;
const porcionesRequeridasProteicos = 15;
// document.getElementById("porcionesRequeProteSelecc").innerText = porcionesRequeridasProteicos;
const porcionesRequeridasLacteos = 15;
// document.getElementById("porcionesRequeLactSelecc").innerText = porcionesRequeridasLacteos;
const porcionesRequeridasFrutasVerduras = 15;
// document.getElementById("porcionesFrutasVerdRequeSelecc").innerText = porcionesRequeridasFrutasVerduras;
const porcionesRequeridasGrasasSaludables = 15;
// document.getElementById("porcionesRequeGrasaSelecc").innerText = porcionesRequeridasGrasasSaludables;

var totalCalorias = 0;

var totalporcionesEnergeticos;
var porcentajeEnergetico;

var totalporcionesProteicos;
var porcentajeProteicos;

var totalporcionesLacteos;
var porcentajeLacteos;


window.onload = async () => {
    datesUser();
    // caloriasSeleccionadasMomento();
};















// grafico de peso deseado Vs Peso actual


// meses para lograr peso objetivo
function graficoPesoDeseado(Kilos,Meses){
    var opcioneslograrPesoObjetivo = {
        series: [{
            name: "Kilos",
            data: [70.2, 71, 71.9, 73, 73.6, 74],
        }],
        chart: {
            height: 150,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        colors: ['#9BCB3B'],
        dataLabels: {
            enabled: true,
        },
        stroke: {
            curve: 'straight',
            colors: ['#9BCB3B']
        },
        title: {
        },
        grid: {
            show: false
        },
        xaxis: {
            categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
            labels: {
                style: {
                    colors: ['#9BCB3B', '#9BCB3B', '#9BCB3B', '#9BCB3B', '#9BCB3B', '#9BCB3B']
                }
            }
    
        },
        yaxis: {
            show: false,
            labels: {
                style: {
                    colors: ['#9BCB3B', '#9BCB3B', '#9BCB3B', '#9BCB3B', '#9BCB3B', '#9BCB3B']
                }
            }
    
        },
    
    };
    
    var lograrPesoObjetivo = new ApexCharts(document.querySelector("#lograrPesoObjetivo"), opcioneslograrPesoObjetivo);
    lograrPesoObjetivo.render();
    // fianl meses para lograr peso objetivo
}








