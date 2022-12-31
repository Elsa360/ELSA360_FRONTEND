window.onload = async () => {

    traerDatosdelUsuario();
    //Variables de Session
    //============================================================================
    let fechaActual = new Date().toLocaleDateString();
    let idperfil = parseInt(localStorage.getItem('perfilamiento'));
    let pesoActual = parseFloat(localStorage.getItem('pesoactual'));
    let pesoDeseado = parseFloat(localStorage.getItem('pesodeseado'));
    let estatura = parseFloat(localStorage.getItem("estatura"));
    let fechaNacimiento = localStorage.getItem('fechanacimiento');
    let genero = localStorage.getItem('sexo');
    let met = parseFloat(localStorage.getItem('met'));
    //============================================================================
    datesUser(pesoActual, estatura, pesoDeseado, fechaNacimiento, genero, met);
    cet(idperfil, fechaActual);
    ipm(pesoActual, pesoDeseado)
};
async function traerDatosdelUsuario(){
    let idusuario = localStorage.getItem('login'); 
    let url = apiServer + "perfil/usuario?idusuario="+idusuario+""
    try {
        await fetch(url)
        .then(response => response.json())
        .then(respuesta =>{
            respuesta.forEach(elementos=>{
                console.log(elementos);
                localStorage.setItem('perfilamiento',elementos.idPerfilUsuario);
                localStorage.setItem('pesoactual',elementos.peso);
                localStorage.setItem('pesodeseado',elementos.pesoObjetivo);
                localStorage.setItem('estatura',elementos.estatura);
                localStorage.setItem('fechanacimiento',elementos.fechaNacimiento);
                localStorage.setItem('sexo',elementos.sexo);
                localStorage.setItem('tipodieta',elementos.fkTipoDieta);
                localStorage.setItem('met',0);
            });
        });
    } catch (e) {
        console.log(e);
    }
}


// ====================================================================================
// ====================================================================================
function datesUser(pesoActual, estatura, pesoDeseado, fechaNacimiento, genero, met) {
    try {
        //Requerimientos de calorias sin actividad fisica
        dataGET = get(fechaNacimiento, genero, pesoActual, pesoDeseado, estatura, met);
        document.getElementById("calSinActFisc").innerHTML = dataGET[0] + " ";
        getTotal = dataGET[0];
        localStorage.setItem('get',dataGET[0]);

        document.getElementById("getTotaldelDia").innerHTML = dataGET[0] + " ";
        document.getElementById("mensajeRS").innerHTML = dataGET[1];

        //IMC
        IMCDatos = calcularIMC(pesoActual, estatura);
        document.getElementById("mensajeIMC").innerHTML = IMCDatos[0];
        document.getElementById("indiceIMC").innerHTML = IMCDatos[1].toFixed(1);

        //Peso saludable y peso deseado
        healthyWeight = pesoSaludable(estatura);
        document.getElementById("pesoActualDashboarNutricional").innerHTML = localStorage.getItem('pesoactual');
        document.getElementById("pesoSaludLimInf").innerHTML = healthyWeight[0] + ' Kg';
        document.getElementById("pesoSaludLimSup").innerHTML = healthyWeight[1] + ' Kg';
        document.getElementById("pesoDeseado").innerHTML = pesoDeseado + ' Kg';

        //Requerimiento de liquidos
        liquidRequirement = requerimientoLiquidos(pesoActual);
        document.getElementById("requerimientoLiquidos").innerHTML = liquidRequirement[0] + " Lts";
        document.getElementById("promedioVasosAgua").innerHTML = liquidRequirement[1];

        //Diferencia de peso
        weightDifference = diferenciaPeso(pesoActual, pesoDeseado);
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

    } catch (e) {
        console.log("Plan Nutricional: ", e)
    }

}
// ====================================================================================
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
        var get = tasaMetabolicaBasal + nivelActividadFisica + efectoTermicoAlim + totalGastoDeportivo + restriccionSuperavit;
        return [parseFloat(get.toFixed(0)), mensajeRS];

    } catch (e) { console.log(e) }
}

async function cet(idperfil, fecha) {
    try {
        let url = apiServer + "alimentoRegularSeleccionado/cet?idPerfil=" + idperfil + "&fecha=" + fecha + "";
        var totalCET = 0;
        var cet1 = 0;
        var cet2 = 0;
        var cet3 = 0;
        var cet4 = 0;
        var cet5 = 0;
        var cet6 = 0;
        await fetch(url)
            .then(response => response.json())
            .then(respuesta => {
                respuesta.forEach(elemento => {
                    totalCET = totalCET + elemento.caloriasAlimento
                    if (elemento.fkIdMomentoComidaSlccn == 1) {
                        cet1 = cet1 + elemento.caloriasAlimento
                    }
                    if (elemento.fkIdMomentoComidaSlccn == 2) {
                        cet2 = cet2 + elemento.caloriasAlimento
                    }
                    if (elemento.fkIdMomentoComidaSlccn == 3) {
                        cet3 = cet3 + elemento.caloriasAlimento
                    }
                    if (elemento.fkIdMomentoComidaSlccn == 4) {
                        cet4 = cet4 + elemento.caloriasAlimento
                    }
                    if (elemento.fkIdMomentoComidaSlccn == 5) {
                        cet5 = cet5 + elemento.caloriasAlimento
                    }
                    if (elemento.fkIdMomentoComidaSlccn == 6) {
                        cet6 = cet6 + elemento.caloriasAlimento
                    }

                });
                document.getElementById("CET").innerText = totalCET + " ";
                document.getElementById("cetmomento1").innerText = cet1
                document.getElementById("cetmomento2").innerText = cet2
                document.getElementById("cetmomento3").innerText = cet3
                document.getElementById("cetmomento4").innerText = cet4
                document.getElementById("cetmomento5").innerText = cet5
                document.getElementById("cetmomento6").innerText = cet6
            });
    } catch (e) {
        console.log("CET: ", e)
    }
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
    let fechaActual = new Date().toLocaleDateString("en-US")
    try {
        let getCompleto = localStorage.getItem('get');
        let idMoment = momento;
        let perfil = localStorage.getItem('perfilamiento');
        let fecha = fechaActual;
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

        if(parseInt(localStorage.getItem('tipodieta'))==1){
            location.href = "tables-general-foods.html?momento=" + idMoment + "&perfil=" + perfil + "&fecha=" + fecha + "&getMomento=" + getMomento + "&getCompleto=" + getCompleto + "";
        }else if(parseInt(localStorage.getItem('tipodieta'))==2){
            location.href = "tables-vegetarian-general-foods.html?momento=" + idMoment + "&perfil=" + perfil + "&fecha=" + fecha + "&getMomento=" + getMomento + "&getCompleto=" + getCompleto + "";
        }else{
            location.href = "app-planNutricional.html";
        }
       
    } catch (error) {
        console.log(error)
    }

}

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
                fetch(apiServer + 'alimentoVegetarianoSeleccionado/crear', {
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



function ipm(pesoActual, pesoDeseado) {
    //Incremento de peso mensual
    let dif = (pesoDeseado - pesoActual).toFixed(2)
    let ipm = 0;
    let dataKilosReales = [70.2, 70.5, 72.3, 72.8, 73.4, 74]
    let dataKilosIdeales = [];
    dataLabelsPeso = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun']
    if (Math.abs(dif) <= 12) {
        ipm = dif / 3;
    } else if (Math.abs(dif) <= 24) {
        ipm = dif / 6;
    } else if (Math.abs(dif) <= 48) {
        ipm = dif / 12;
    } else {
        ipm = 4;
    }
    for (let i = 0; i < 6; i++) {
        pesoActual = pesoActual + parseFloat(ipm.toFixed(2));
        dataKilosIdeales.push(pesoActual.toFixed(2));
    }
    graficoPesoDeseado(dataKilosIdeales, dataKilosReales, dataLabelsPeso);
}
function graficoPesoDeseado(dataKilosIdeales, dataKilosReales, dataLabelsPeso) {
    var opcioneslograrPesoObjetivo = {
        series: [{
            name: "Kilos Ideales",
            type: 'line',
            data: dataKilosIdeales,
        },
        {
            name: "Kilos Reales",
            type: 'line',
            data: dataKilosReales,
        }],
        chart: {
            height: 190,
            background: '#2b2c40',
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                autoSelected: 'pan',
                show: true,
                offsetX: -20,
                offsetY: 20,
                tools: {
                    download: true,
                    selection: false,
                    zoom: false,
                    zoomin: false,
                    zoomout: false,
                    pan: false,
                    reset: false | '<img src="/static/icons/reset.png" width="20">',
                    customIcons: []
                },
                export: {
                    csv: {
                        filename: 'Evolución de tu peso'
                    },
                    svg: {
                        filename: 'Evolución de tu peso'
                    },
                    png: {
                        filename: 'Evolución de tu peso'
                    }
                }
            }
        },
        colors: ["#ffab00", "#9bcb3b"],
        dataLabels: {
            enabled: false,
        },
        markers: {
            size: 2,
            colors: ["#ffab00", "#9bcb3b"],
            strokeColors: ["#ffab00", "#9bcb3b"],
        },
        labels: dataLabelsPeso,
        legend: {
            show: true,
            offsetY: 0,
            position: 'bottom',
            horizontalAlign: 'center',
            fontSize: '12px',
            itemMargin: {
                horizontal: 5,
                vertical: 0
            },
            labels: {
                colors: '#fff',
                useSeriesColors: false
            }
        },
        stroke: {
            curve: 'straight',
            colors: ["#ffab00", "#9bcb3b"],
            width: [4, 2],
            dashArray: [8, 0]
        },
        title: {
            text: 'Evolución de tu peso',
            offsetX: 40,
            style: {
                color: '#cbcbe2',
                fontFamily: 'montserrat',
                fontSize: '16px',
                fontWeight: '500'
            }
        },
        grid: {
            show: true,
            borderColor: '#191924',
            strokeDashArray: 0,
            position: 'back',
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: true
                }
            },
            row: {
                colors: undefined,
                opacity: 0.1
            },
            column: {
                colors: undefined,
                opacity: 0.5
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        xaxis: {
            type: 'categories',
            labels: {
                style: {
                    colors: ['#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2']
                }
            },
        },
        yaxis: {
            show: true,
            tickAmount: 3,
            labels: {
                style: {
                    colors: ['#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2']
                },
                offsetX: -16,
            },
            axisBorder: {
                show: true
            },
            axisTicks: {
                show: true
            }
        },
        tooltip: {
            y: [
                {
                    formatter: function (val) {
                        return val + " Kg"
                    }
                },
                {
                    formatter: function (val) {
                        return val + " Kg"
                    }
                },
            ]
        },
    };

    var lograrPesoObjetivo = new ApexCharts(document.querySelector("#lograrPesoObjetivo"), opcioneslograrPesoObjetivo);
    lograrPesoObjetivo.render();
    // fianl meses para lograr peso objetivo
}









































dataGET = [1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055, 1241, 1067, 1222, 1343, 1021, 1241, 1056, 1027, 1243, 1044, 1255, 1141, 1167, 1022, 1243, 1021, 1141, 1256, 1027, 1143, 1037, 1221, 1244, 1422, 1344, 1555, 1041, 1067, 1222, 1543, 1321, 1241, 1056, 1027, 1243, 1144, 1255, 1441, 1067, 1222, 1043, 1021, 1241, 1556, 1027, 1043, 1244, 1355, 1441, 1067, 1222, 1443, 1021, 1241, 1456, 1027, 1243, 1344, 1055, 1241, 1467, 1322, 1043, 1421, 1641, 1756, 1027, 1243, 1237, 1021, 1044, 1222, 1044, 1155, 1041, 1267, 1022, 1443, 1021, 1241, 1256, 1327, 1243, 1044, 1455, 1041, 1267, 1322, 1343, 1021, 1241, 1056, 1027, 1243, 1144, 1555, 1041, 1267, 1022, 1343, 1021, 1241, 1256, 1127, 1043, 1344, 1055, 1241, 1067, 1122, 1043, 1221, 1641, 1356, 1027, 1243, 1037, 1221, 1644, 1022]
dataCET = [1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055, 1241, 1067, 1222, 1343, 1021, 1241, 1056, 1027, 1243, 1044, 1255, 1141, 1167, 1022, 1243, 1021, 1141, 1256, 1027, 1143, 1037, 1221, 1244, 1422, 1344, 1555, 1041, 1067, 1222, 1543, 1321, 1241, 1056, 1027, 1243, 1144, 1255, 1441, 1067, 1222, 1043, 1021, 1241, 1556, 1027, 1043, 1244, 1355, 1441, 1067, 1222, 1443, 1021, 1241, 1456, 1027, 1243, 1344, 1055, 1241, 1467, 1322, 1043, 1421, 1641, 1756, 1027, 1243, 1237, 1021, 1044, 1222, 1044, 1155, 1041, 1267, 1022, 1443, 1021, 1241, 1256, 1327, 1243, 1044, 1455, 1041, 1267, 1322, 1343, 1021, 1241, 1056, 1027, 1243, 1144, 1555, 1041, 1267, 1022, 1343, 1021, 1241, 1256, 1127, 1043, 1344, 1055, 1241, 1067, 1122, 1043, 1221, 1641, 1356, 1027, 1243, 1037, 1221, 1644, 1022]
dataLabelsDias = ['01/01/2022', '01/02/2022', '01/03/2022', '01/04/2022', '01/05/2022', '01/06/2022', '01/07/2022', '01/08/2022', '01/09/2022', '01/10/2022', '01/11/2022', '01/12/2022',
    '01/13/2022', '01/14/2022', '01/15/2022', '01/16/2022', '01/17/2022', '01/18/2022', '01/19/2022', '01/20/2022', '01/21/2022', '01/22/2022', '01/23/2022', '01/24/2022',
    '02/01/2022', '02/02/2022', '02/03/2022', '02/04/2022', '02/05/2022', '02/06/2022', '02/07/2022', '02/08/2022', '02/09/2022', '02/10/2022', '02/11/2022', '02/12/2022',
    '02/13/2022', '02/14/2022', '02/15/2022', '02/16/2022', '02/17/2022', '02/18/2022', '02/19/2022', '02/20/2022', '02/21/2022', '02/22/2022', '02/23/2022', '02/24/2022',
    '03/01/2022', '03/02/2022', '03/03/2022', '03/04/2022', '03/05/2022', '03/06/2022', '03/07/2022', '03/08/2022', '03/09/2022', '03/10/2022', '03/11/2022', '03/12/2022',
    '03/13/2022', '03/14/2022', '03/15/2022', '03/16/2022', '03/17/2022', '03/18/2022', '03/19/2022', '03/20/2022', '03/21/2022', '03/22/2022', '03/23/2022', '03/24/2022',
    '04/01/2022', '04/02/2022', '04/03/2022', '04/04/2022', '04/05/2022', '04/06/2022', '04/07/2022', '04/08/2022', '04/09/2022', '04/10/2022', '04/11/2022', '04/12/2022',
    '04/13/2022', '04/14/2022', '04/15/2022', '04/16/2022', '04/17/2022', '04/18/2022', '04/19/2022', '04/20/2022', '04/21/2022', '04/22/2022', '04/23/2022', '04/24/2022',
    '05/01/2022', '05/02/2022', '05/03/2022', '05/04/2022', '05/05/2022', '05/06/2022', '05/07/2022', '05/08/2022', '05/09/2022', '05/10/2022', '05/11/2022', '05/12/2022',
    '05/13/2022', '05/14/2022', '05/15/2022', '05/16/2022', '05/17/2022', '05/18/2022', '05/19/2022', '05/20/2022', '05/21/2022', '05/22/2022', '05/23/2022', '05/24/2022',
    '06/01/2022', '06/02/2022', '06/03/2022', '06/04/2022', '06/05/2022', '06/06/2022', '06/07/2022', '06/08/2022', '06/09/2022', '06/10/2022', '06/11/2022', '06/12/2022',
    '06/13/2022', '06/14/2022', '06/15/2022', '06/16/2022', '06/17/2022', '06/18/2022', '06/19/2022', '06/20/2022', '06/21/2022', '06/22/2022', '06/23/2022', '06/24/2022'
]

durElvDistEntreno(
    dataGET, dataCET, dataLabelsDias
);

function durElvDistEntreno(
    dataGET, dataCET, dataLabelsDias
) {

    var opcionesCaloriasDiarias = {
        series: [{
            name: "GET (Lo que debes comer)",
            type: 'line',
            data: dataGET,
        },
        {
            name: "CET (Lo que comiste)",
            type: 'line',
            data: dataCET,
        }],
        chart: {
            height: 420,
            background: '#2b2c40',
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                autoSelected: 'pan',
                show: true,
                offsetX: -20,
                offsetY: 20,
                tools: {
                    download: true,
                    selection: false,
                    zoom: false,
                    zoomin: false,
                    zoomout: false,
                    pan: false,
                    reset: false | '<img src="/static/icons/reset.png" width="20">',
                    customIcons: []
                },
                export: {
                    csv: {
                        filename: 'Calorías requeridas Vs Consumidas'
                    },
                    svg: {
                        filename: 'Calorías requeridas Vs Consumidas'
                    },
                    png: {
                        filename: 'Calorías requeridas Vs Consumidas'
                    }
                }
            }
        },
        colors: ["#ff7000", "#9bcb3b"],
        dataLabels: {
            enabled: false,
        },
        markers: {
            size: 2,
            colors: ["#ff7000", "#9bcb3b"],
            strokeColors: ["#ff7000", "#9bcb3b"],
        },
        labels: dataLabelsDias,
        legend: {
            show: true,
            offsetY: 10,
            position: 'bottom',
            horizontalAlign: 'center',
            fontSize: '12px',
            itemMargin: {
                horizontal: 10,
                vertical: 10
            },
            labels: {
                colors: '#fff',
                useSeriesColors: false
            }
        },
        stroke: {
            curve: 'straight',
            colors: ["#ff7000", "#9bcb3b"],
            width: [4, 2],
            dashArray: [5, 0]
        },
        title: {
            text: 'Calorías requeridas Vs Consumidas',
            offsetX: 40,
            style: {
                color: '#cbcbe2',
                fontFamily: 'montserrat',
                fontSize: '16px',
                fontWeight: '500'
            }
        },
        grid: {
            show: true,
            borderColor: '#191924',
            strokeDashArray: 0,
            position: 'back',
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: true
                }
            },
            row: {
                colors: undefined,
                opacity: 0.1
            },
            column: {
                colors: undefined,
                opacity: 0.5
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        xaxis: {
            type: 'datetime',
            labels: {
                style: {
                    colors: ['#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2']
                }
            }
        },
        yaxis: {
            show: true,
            tickAmount: 6,
            labels: {
                style: {
                    colors: ['#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2']
                },
                offsetX: -16,
            },
            axisBorder: {
                show: true
            },
            axisTicks: {
                show: true
            }
        },
        tooltip: {
            fixed: {
                enabled: true,
                position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                offsetY: 30,
                offsetX: 60
            },
            y: [
                {
                    formatter: function (val) {
                        return val + " Cal"
                    }
                },
                {
                    formatter: function (val) {
                        return val + " Cal"
                    }
                },
            ]
        }
    };

    var CaloriasDiarias = new ApexCharts(document.querySelector("#CaloriasDiarias"), opcionesCaloriasDiarias);
    CaloriasDiarias.render();
    // fianl meses para lograr peso objetivo
}







