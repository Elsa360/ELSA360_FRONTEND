async function loadFreeData(){
    let sexo = sessionStorage.getItem("sexoUser");
    let fechaNac = sessionStorage.getItem("fechaNacimiento");
    let estatura  = sessionStorage.getItem("estatura");
    let tpCuerpo  = sessionStorage.getItem("cuerpo");
    let tpDieta = sessionStorage.getItem("dieta");
    let pesoActual  = sessionStorage.getItem("pesoActual");
    let pesoDeseado   = sessionStorage.getItem("pesoDeseado");
    let deficit;
    let diferenciaPeso;
    let pqMonta = sessionStorage.getItem("porqueHace");
    let nivel = sessionStorage.getItem("nivelDeportivo");
    let escala = sessionStorage.getItem("escalaDeportiva");

    try {
        //Calculamos la diferencia de peso
        let differenceInWeight = diferenciaPeso(pesoActual,pesoDeseado);    
        let fluidRequirement = requerimientoLiquidos(pesoActual);
        let imc = calcularIMC(pesoActual,estatura);
        let healthyWeight = pesoSaludable(pesoActual);
        document.getElementById("diferenciaPesoFreeData").innerHTML=differenceInWeight + " Kg";

        let indIMC = imc[0];
        document.getElementById("imcFreeData").innerHTML = indIMC.toFixed(2);
        document.getElementById("mnsjImcFreeData").innerHTML = imc[1];

        document.getElementById("limInfPesoSaludFreeData").innerHTML=healthyWeight[0] + " Kg";
        document.getElementById("PesoSaludFreeData").innerHTML= pesoDeseado;
        document.getElementById("limSupPesoSaludFreeData").innerHTML=healthyWeight[1]+ " Kg";

        let rl = fluidRequirement[0].toFixed(1);
        document.getElementById("reqLiqFreeData").innerHTML = rl + " Lts";
        document.getElementById("mnsjReqLiqFreeData").innerHTML = fluidRequirement[1];

        //Datos basicos del perfil
        document.getElementById("sexo").innerHTML = "" ;
        document.getElementById("fechaNacimiento").innerHTML = "" ;
        document.getElementById("estatura").innerHTML = "" + " cms" ;
        document.getElementById("tipoCuerpo").innerHTML = "" ;
        document.getElementById("tipoDieta").innerHTML = "" ;
        document.getElementById("pesoActual").innerHTML = "" ;
        document.getElementById("pesoFinal").innerHTML = "" ;
        document.getElementById("deficit").innerHTML = "" ;
        document.getElementById("diferenciaPeso").innerHTML = differenceInWeight + " Kg" ;
        document.getElementById("pqMonta").innerHTML = "" ;
        document.getElementById("nivelDeportivo").innerHTML = "" ;
        document.getElementById("subNivelDeportivo").innerHTML = "" ;
    } catch (e) {
     console.log(e)   
    }
    
}


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
        return [IMC,mensaje];
    } catch (e) {
        console.log(e, "Error al calcular IMC");
    }
}
function pesoSaludable(userHeight) {
    //Estatura en Metros
    try {
        userHeight = userHeight/100;
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






window.onload = async () => {
    loadFreeData();
}