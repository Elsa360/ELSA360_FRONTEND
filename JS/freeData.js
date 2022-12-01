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
        return [IMC, mensaje];
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
function diferencia(userWeightCurrent, userWeightWanted) {
    //Peso en Kilogramos
    let userWeightDifference = userWeightWanted - userWeightCurrent;
    return userWeightDifference.toFixed(2);
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
function rstrccSprvt(userWeightCurrect, userWeightWanted) {
    //R => Restricción
    //S => Superavit
    //ipm = Incremento Peso Mensual
    try {
        let dif = diferencia(userWeightCurrect, userWeightWanted);
        let ipm = 0;
        let mensaje;
        if (Math.abs(dif) <= 12) {
            ipm = Math.abs(dif) / 3;
        } else if (Math.abs(dif) <= 24) {
            ipm = Math.abs(dif) / 6;
        } else if (Math.abs(dif) <= 48) {
            ipm = Math.abs(dif) / 12;
        } else {
            ipm = 4;
        }
        if (dif > 0) {
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
        } else if (dif < 0) {
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
        let dataRS = rstrccSprvt(pesoActualPerfil, pesoDeseadoPerfil);
        let mensajeRS = dataRS[1];
        let restriccionSuperavit = dataRS[0];
        let get = tasaMetabolicaBasal + nivelActividadFisica + efectoTermicoAlim + totalGastoDeportivo + restriccionSuperavit;
        return [parseFloat(get.toFixed(0)), mensajeRS];

    } catch (e) { console.log(e) }
}

//Grafico
function ipm(pesoActual, pesoDeseado) {
    //Incremento de peso mensual
    let dif = diferencia(pesoActual, pesoDeseado);
    let ipm = 0;
    let meses = 0;
    if (Math.abs(dif) <= 12) {
        ipm = dif / 3;
        meses = 3;
    } else if (Math.abs(dif) <= 24) {
        ipm = dif / 6;
        meses = 6;
    } else if (Math.abs(dif) <= 48) {
        ipm = dif / 12;
        meses = 12;
    } else {
        ipm = 4;
        meses = 12;
    }
    return [ipm, meses]
}
function datosGraficos(dataPeso, cat) {
    // meses para lograr peso objetivo
    var opciones = {
        series: [{
            name: "Kilos",
            data: dataPeso,
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
            categories: cat,
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

    var lograrPesoObjetivo = new ApexCharts(document.querySelector("#lograrPesoObjetivo"), opciones);
    lograrPesoObjetivo.render();
    // fianl meses para lograr peso objetivo
}


async function loadFreeData() {
    let sexo = sessionStorage.getItem("sexoUser");;
    let fechaNac = sessionStorage.getItem("fechaNacimiento");
    let estatura = sessionStorage.getItem("estatura");
    let tpCuerpo = sessionStorage.getItem("cuerpo");
    tpCuerpo = parseInt(tpCuerpo);
    if (tpCuerpo === 1) {
        tpCuerpo = "Etsomorfo"
    }
    if (tpCuerpo === 2) {
        tpCuerpo = "Mesomorfo"
    }
    if (tpCuerpo === 3) {
        tpCuerpo = "Endomorfo"
    }
    let tpDieta = sessionStorage.getItem("dieta");
    tpDieta = parseInt(tpDieta);
    if (tpDieta === 1) {
        tpDieta = "Regular"
    }
    if (tpDieta === 2) {
        tpDieta = "Vegetariana"
    }
    let pesoActual = sessionStorage.getItem("pesoActual");
    let pesoDeseado = sessionStorage.getItem("pesoDeseado");
    let deficit;
    let pqMonta = sessionStorage.getItem("porqueHace");
    pqMonta = parseInt(pqMonta);
    if (pqMonta === 1) {
        pqMonta = "Rendimiento"
    }
    if (pqMonta === 2) {
        pqMonta = "Salud"
    }
    if (pqMonta === 3) {
        pqMonta = "Entretenimiento"
    }
    let nivel = sessionStorage.getItem("nivelDeportivo");
    nivel = parseInt(nivel);
    if (nivel === 1) {
        nivel = "Principiante"
    }
    if (nivel === 2) {
        nivel = "Intermedio"
    }
    if (nivel === 3) {
        nivel = "Avanzado"
    }
    let escala = sessionStorage.getItem("escalaDeportiva");
    escala = parseInt(escala);
    let subEsc = "";
    if (escala === 1 || escala === 2 || escala === 3) {
        subEsc = "I"
    }
    if (escala === 4 || escala === 5 || escala === 6) {
        subEsc = "II"
    }
    if (escala === 7 || escala === 8 || escala === 9) {
        subEsc = "III"
    }

    let differenceInWeight = diferencia(pesoActual, pesoDeseado);
    document.getElementById("diferenciaPesoFreeData").innerHTML = differenceInWeight + " Kg";

    let datos = ipm(pesoActual, pesoDeseado)
    console.log("IPM:", datos);
    let data = [];
    let categories = [];
    let incremento = parseFloat(pesoActual);
    if (datos[1] === 3) {
        for (let i = 0; i < datos[1]; i++) {
            incremento = incremento + parseFloat(datos[0].toFixed(2));
            data.push(incremento.toFixed(2));
        }
        categories = ['Ene', 'Feb', 'Mar'];
    }
    if (datos[1] === 6) {
        for (let i = 0; i < datos[1]; i++) {
            incremento = incremento + parseFloat(datos[0].toFixed(2));
            data.push(incremento.toFixed(2));
        }
        categories = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'];
    }
    if (datos[1] === 12) {
        for (let i = 0; i < datos[1]; i++) {
            incremento = incremento + parseFloat(datos[0].toFixed(2));
            data.push(incremento.toFixed(2));
        }
        categories = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    }
    datosGraficos(data, categories);

    let restriSuper = rstrccSprvt(pesoActual, pesoDeseado);
    document.getElementById("calFreeData").innerHTML = restriSuper[0] + " Cal";
    document.getElementById("superavitRestriFreeData").innerText = restriSuper[1];

    let healthyWeight = pesoSaludable(estatura);
    document.getElementById("PesoSaludFreeData").innerHTML = pesoDeseado;
    document.getElementById("limSupPesoSaludFreeData").innerHTML = healthyWeight[1] + " Kg";

    let imc = calcularIMC(pesoActual, estatura);
    let indIMC = imc[0];
    document.getElementById("imcFreeData").innerHTML = indIMC.toFixed(2);
    document.getElementById("mnsjImcFreeData").innerHTML = imc[1];
    document.getElementById("limInfPesoSaludFreeData").innerHTML = healthyWeight[0] + " Kg";

    let fluidRequirement = requerimientoLiquidos(pesoActual);
    let rl = fluidRequirement[0].toFixed(1);
    document.getElementById("reqLiqFreeData").innerHTML = rl + " Lts";
    document.getElementById("mnsjReqLiqFreeData").innerHTML = fluidRequirement[1];

    let GET = get(fechaNac, sexo, pesoActual, pesoDeseado, estatura, 0)
    document.getElementById("getFreeData").innerHTML = GET[0] + " Cal"

    //Datos basicos del perfil
    document.getElementById("sexo").innerHTML = sexo
    document.getElementById("fechaNacimiento").innerHTML = fechaNac;
    document.getElementById("estatura").innerHTML = estatura + " cms";
    document.getElementById("tipoCuerpo").innerHTML = tpCuerpo;
    document.getElementById("tipoDieta").innerHTML = tpDieta;
    document.getElementById("pesoActual").innerHTML = pesoActual;
    document.getElementById("pesoFinal").innerHTML = pesoDeseado;
    document.getElementById("deficit").innerHTML = restriSuper[0] + " Cal / Diaria";;
    document.getElementById("diferenciaPeso").innerHTML = differenceInWeight + " Kg";
    document.getElementById("pqMonta").innerHTML = pqMonta;
    document.getElementById("nivelDeportivo").innerHTML = nivel;
    document.getElementById("subNivelDeportivo").innerHTML = subEsc;


}

window.onload = async () => {
    loadFreeData();
}
var matriz = new Array(12)
matriz[0] = new Array(3)
matriz[1] = new Array(3)
matriz[2] = new Array(3)
matriz[3] = new Array(3)
matriz[4] = new Array(3)
matriz[5] = new Array(3)
matriz[6] = new Array(3)
matriz[7] = new Array(3)
matriz[8] = new Array(3)
matriz[9] = new Array(3)
matriz[10] = new Array(3)
matriz[11] = new Array(3)
for(let i=0;i<12;i++){
    for(let j=0;j<3;j++){
    matriz[i][j]=Math.random();
    }   
}
console.log(matriz)
