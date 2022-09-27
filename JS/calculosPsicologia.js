function registro() {
    try {
        var nombreCompleto = document.getElementById("singUpNombreCompleto").value;
        var email = document.getElementById("singUpEmail").value;
        var password = document.getElementById("singUpContra").value;
        var confirmPassword = document.getElementById("singUpConfirmContra").value;
        if (password === confirmPassword) {
            console.log("Nombre: ", nombreCompleto);
            console.log("Email: ", email);
            console.log("Password: ", password);
            console.log("REGISTRO EXITOSO...");
            enviarEmailVerificacion();
        } else {
            console.log("Contraseñas no coincide");
        }
    } catch (e) {
        console.log(e);
    }
}
function registrarPefilUsuario() {
    try {
        var genero = document.getElementById("generoUsuario").value;
        var edad = document.getElementById("edadUsuario").value;
        var estatura = document.getElementById("estaturaUsuario").value;
        var pesoActual = document.getElementById("pesoUsuario").value;
        var pesoDeseado = document.getElementById("pesoDeseadoUsuario").value;
        var nivelDeportivo = document.getElementById("nivelDeportivoUsuario").value;
        var objetico = document.getElementById("porqueLoHaceUsuario").value;
        var tipoDieta = document.getElementById("tipoDietaUsuario").value;
        var tipoCuerpo = document.getElementById("tipoCuerpoUsuario").value;

        console.log(genero);
        console.log(edad);
        console.log(estatura);
        console.log(pesoActual);
        console.log(pesoDeseado);
        console.log(nivelDeportivo);
        console.log(objetico);
        console.log(tipoDieta);
        console.log(tipoCuerpo);
        // window.location.href = "datosTrial.html";
    }
    catch (e) {
        console.log(e, "Error registro de perfil")
    }

}
function enviarEmailVerificacion() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "lebab1990@gmail.com.com",
        Password: "Martin.Elias90101075302",
        To: 'lebab_10@hotmail.com',
        From: "lebab1990@gmail.com.com",
        Subject: "Envio de email usando javascript",
        Body: "Cuerpo del correo",
    })
        .then(function () {
            alert("Email enviado exitosamente")
        });
}
function loginUser() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    console.log(email);
    console.log(pass);
    window.location.href = "panel.html";
}

function entrevistaInicialDia1() {
    //BORGH
    var borgh = parseInt(document.getElementById("borghDia1").value);
    // Pregunta 1
    var p1 = parseInt(document.getElementById("pregunta1Psico").value);
    // Pregunta 2
    var p2 = parseInt(document.getElementById("pregunta2Psico").value);
    // Pregunta 3
    var p3 = parseInt(document.getElementById("pregunta3Psico").value);
    // Pregunta 4
    var p4 = parseInt(document.getElementById("pregunta4Psico").value);
    // Preguntas 5
    var p5a = parseInt(document.getElementById("pregunta5aPsico").value);
    var p5b = parseInt(document.getElementById("pregunta5bPsico").value);
    var p5c = parseInt(document.getElementById("pregunta5cPsico").value);
    //Preguntas 6
    var p6a = parseInt(document.getElementById("pregunta6aPsico").value);
    var p6b = parseInt(document.getElementById("pregunta6bPsico").value);
    var p6c = parseInt(document.getElementById("pregunta6cPsico").value);
    // Preguntas 7
    var p7a = parseInt(document.getElementById("pregunta7aPsico").value);
    var p7b = parseInt(document.getElementById("pregunta7bPsico").value);
    var p7c = parseInt(document.getElementById("pregunta7cPsico").value);
    var sumatoria = p1 + p2 + p3 + p4 + (p5a + p5b + p5c) + (p6a + p6b + p6c) + (p7a + p7b + p7c);
    console.log(borgh);
    console.log(sumatoria);
}
function entrevistaInicialDia2() {
    //BORGH
    var borgh = parseInt(document.getElementById("borghDia2").value);
    // Pregunta 8
    var p8 = document.getElementById("pregunta8Psico").value;
    // Pregunta 9
    var p9 = document.getElementById("pregunta9Psico").value;
    // Pregunta 10
    var p10 = parseInt(document.getElementById("pregunta10Psico").value);
    // Pregunta 11
    var p11 = parseInt(document.getElementById("pregunta11Psico").value);
    // Preguntas 12
    var p12a = parseInt(document.getElementById("pregunta12aPsico").value);
    var p12b = parseInt(document.getElementById("pregunta12bPsico").value);
    var p12c = parseInt(document.getElementById("pregunta12cPsico").value);
    //Preguntas 13
    var p13a = document.getElementById("pregunta13aPsico").value;
    var p13b = document.getElementById("pregunta13bPsico").value;
    // Preguntas 14
    var p14aD = document.getElementById("pregunta14adPsico").value;
    var p14bD = document.getElementById("pregunta14bdPsico").value;
    var p14cD = document.getElementById("pregunta14cdPsico").value;

    var p14aF = document.getElementById("pregunta14afPsico").value;
    var p14bF = document.getElementById("pregunta14bfPsico").value;
    var p14cF = document.getElementById("pregunta14cfPsico").value;

    console.log(borgh);
    var sumatoria = p10 + p11 + (p12a + p12b + p12c);
    console.log(sumatoria);
    console.log(p8);
    console.log(p9);
    console.log(p13a);
    console.log(p13b);
    console.log(p14aD);
    console.log(p14bD);
    console.log(p14cD);
    console.log(p14aF);
    console.log(p14bF);
    console.log(p14cF);
}
function listaEstresores() {
    //BORGH
    var borgh = parseInt(document.getElementById("borghDia3").value);
    var estresor1 = document.getElementById("primerEstresor").value;
    var estresor2 = document.getElementById("segundoEstresor").value;
    var estresor3 = document.getElementById("tercerEstresor").value;
    var estresor4 = document.getElementById("cuartoEstresor").value;
    var estresor5 = document.getElementById("quintoEstresor").value;

    console.log(borgh);
    console.log(estresor1);
    console.log(estresor2);
    console.log(estresor3);
    console.log(estresor4);
    console.log(estresor5);
}
function objetivosRealizacion() {
    // Borgh
    var borgh = parseInt(document.getElementById("borghDia4").value);
    var obj1 = document.getElementById("objetivo1").value;
    var obj2 = document.getElementById("objetivo2").value;
    var obj3 = document.getElementById("objetivo3").value;
    console.log(borgh);
    console.log(obj1);
    console.log(obj2);
    console.log(obj3);
}
function necesidadAceptacion() {
    // Borgh
    var borgh = parseInt(document.getElementById("borghDia5").value);
    // Pregunta 1
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var p7 = parseInt(document.getElementById("pregunta7").value);
    var resultadoTest = p1 + p2 + p3 + p4 + p5 + p6 + p7
    document.getElementById("resultadoTest").innerHTML = resultadoTest;
    console.log(borgh);
    console.log(resultadoTest);
}
function altasAutoexpectativas() {
    // Borgh
    var borgh = parseInt(document.getElementById("borghDia6").value);
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var resultado = p1 + p2 + p3 + p4 + p5;
    document.getElementById("resultadoTest").innerHTML = resultado;
    console.log(borgh);
}
function culpabilizacion() {
    // Borgh
    var borgh = parseInt(document.getElementById("borghDia7").value);
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6;
    document.getElementById("resultadoTest").innerHTML = resultado;
    console.log(borgh);
}
function intoleranciaFrustracion() {
    // Borgh
    var borgh = parseInt(document.getElementById("borghDia8").value);
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6;
    document.getElementById("resultadoTest").innerHTML = resultado;
    console.log(borgh);
}
function preocupacionAnsiedad() {
    // Borgh
    var borgh = parseInt(document.getElementById("borghDia9").value);
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var resultado = p1 + p2 + p3 + p4 + p5;
    document.getElementById("resultadoTest").innerHTML = resultado;
    console.log(borgh);
}
function irresponsabilidadEmocional() {
    // Borgh
    var borgh = parseInt(document.getElementById("borghDia10").value);
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var p7 = parseInt(document.getElementById("pregunta7").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6 + p7;
    document.getElementById("resultadoTest").innerHTML = resultado;
    console.log(borgh);
}
function evitacionProblemas() {
    // Borgh
    var borgh = parseInt(document.getElementById("borghDia11").value);
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var resultado = p1 + p2 + p3;
    document.getElementById("resultadoTest").innerHTML = resultado;
    console.log(borgh);
}
function dependencia() {
    // Borgh
    var borgh = parseInt(document.getElementById("borghDia12").value);
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6;
    document.getElementById("resultadoTest").innerHTML = resultado;
    console.log(borgh);
}
function indefension() {
    // Borgh
    var borgh = parseInt(document.getElementById("borghDia13").value);
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var p7 = parseInt(document.getElementById("pregunta7").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6 + p7;
    document.getElementById("resultadoTest").innerHTML = resultado;
    console.log(borgh);
}
function perfeccionismo() {
    // Borgh
    var borgh = parseInt(document.getElementById("borghDia14").value);
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var resultado = p1 + p2 + p3 + p4 + p5;
    document.getElementById("resultadoTest").innerHTML = resultado;
    console.log(borgh);
}
function cualidadesDebilidadesTecFis() {
    // Borgh
    var borgh = parseInt(document.getElementById("borghDia15").value);
    //Cualidades Tecnicas
    var ct1 = document.getElementById("cualidadTec1").value;
    var rct1 = parseInt(document.getElementById("respuestaCualidadTec1").value);
    var ct2 = document.getElementById("cualidadTec2").value;
    var rct2 = parseInt(document.getElementById("respuestaCualidadTec2").value);
    //Debilidades Tecnicas
    var dt1 = document.getElementById("debilidadTec1").value;
    var rd1 = parseInt(document.getElementById("respuestaDebilidadTec1").value);
    var dt2 = document.getElementById("debilidadTec2").value;
    var rd2 = parseInt(document.getElementById("respuestaDebilidadTec2").value);
    //Cualidades Fisicas
    var cf1 = document.getElementById("cualidadFis1").value;
    var rcf1 = parseInt(document.getElementById("respuestaCualidadFis1").value);
    var cf2 = document.getElementById("cualidadFis2").value;
    var rcf2 = parseInt(document.getElementById("respuestaCualidadFis2").value);
    //Debilidades Fisicas
    var df1 = document.getElementById("debilidadFis1").value;
    var rdf1 = parseInt(document.getElementById("respuestaDebilidadFis1").value);
    var df2 = document.getElementById("debilidadFis2").value;
    var rdf2 = parseInt(document.getElementById("respuestaDebilidadFis2").value);
    console.log(borgh);
    console.log(ct1 + ":" + rct1);
    console.log(ct2 + ":" + rct2);
    console.log(dt1 + ":" + rd1);
    console.log(dt2 + ":" + rd2);
    console.log(cf1 + ":" + rcf1);
    console.log(cf2 + ":" + rcf2);
    console.log(df1 + ":" + rdf1);
    console.log(df2 + ":" + rdf2);

}
function cualidadesDebilidadesPsicoPerso() {
    // Borgh
    var borgh = parseInt(document.getElementById("borghDia16").value);
    //Cualidades Psicologicas
    var ct1 = document.getElementById("cualidadPsico1").value;
    var rct1 = parseInt(document.getElementById("respuestaCualidadPsico1").value);
    var ct2 = document.getElementById("cualidadPsico2").value;
    var rct2 = parseInt(document.getElementById("respuestaCualidadPsico2").value);
    //Debilidades Psicologicas
    var dt1 = document.getElementById("debilidadPsico1").value;
    var rd1 = parseInt(document.getElementById("respuestaDebilidadPsico1").value);
    var dt2 = document.getElementById("debilidadPsico2").value;
    var rd2 = parseInt(document.getElementById("respuestaDebilidadPsico2").value);
    //Cualidades Personales
    var cf1 = document.getElementById("cualidadPer1").value;
    var rcf1 = parseInt(document.getElementById("respuestaCualidadPer1").value);
    var cf2 = document.getElementById("cualidadPer2").value;
    var rcf2 = parseInt(document.getElementById("respuestaCualidadPer2").value);
    //Debilidades Personales
    var df1 = document.getElementById("debilidadPer1").value;
    var rdf1 = parseInt(document.getElementById("respuestaDebilidadPer1").value);
    var df2 = document.getElementById("debilidadPer2").value;
    var rdf2 = parseInt(document.getElementById("respuestaDebilidadPer2").value);
    console.log(borgh);
    console.log(ct1 + ":" + rct1);
    console.log(ct2 + ":" + rct2);
    console.log(dt1 + ":" + rd1);
    console.log(dt2 + ":" + rd2);
    console.log(cf1 + ":" + rcf1);
    console.log(cf2 + ":" + rcf2);
    console.log(df1 + ":" + rdf1);
    console.log(df2 + ":" + rdf2);

}
function autoconfianza() {
    // Borgh
    var borgh = parseInt(document.getElementById("borghDia17").value);
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6;
    document.getElementById("resultadoTest").innerHTML = resultado;
    console.log(borgh);
}
function afrontamientoNeg() {
    // Borgh
    var borgh = parseInt(document.getElementById("borghDia18").value);
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6;
    document.getElementById("resultadoTest").innerHTML = resultado;
    console.log(borgh);
}
function controlAtencional() {
    // Borgh
    var borgh = parseInt(document.getElementById("borghDia19").value);
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6;
    document.getElementById("resultadoTest").innerHTML = resultado;
    console.log(borgh);
}
function controlVisuoImaginativo() {
    // Borgh
    var borgh = parseInt(document.getElementById("borghDia20").value);
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6;
    document.getElementById("resultadoTest").innerHTML = resultado;
    console.log(borgh);
}
function nivelMotivacional() {
    // Borgh
    var borgh = parseInt(document.getElementById("borghDia21").value);
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6;
    document.getElementById("resultadoTest").innerHTML = resultado;
    console.log(borgh);
}
function afrontamientoPos() {
    // Borgh
    var borgh = parseInt(document.getElementById("borghDia22").value);
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6;
    document.getElementById("resultadoTest").innerHTML = resultado;
    console.log(borgh);
}
function controlActitudinal() {
    // Borgh
    var borgh = parseInt(document.getElementById("borghDia23").value);
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6;
    document.getElementById("resultadoTest").innerHTML = resultado;
    console.log(borgh);
}
function hamilton() {
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var p7 = parseInt(document.getElementById("pregunta7").value);
    var p8 = parseInt(document.getElementById("pregunta8").value);
    var p9 = parseInt(document.getElementById("pregunta9").value);
    var p10 = parseInt(document.getElementById("pregunta10").value);
    var p11 = parseInt(document.getElementById("pregunta11").value);
    var p12 = parseInt(document.getElementById("pregunta12").value);
    var p13 = parseInt(document.getElementById("pregunta13").value);
    var p14 = parseInt(document.getElementById("pregunta14").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + p10 + p11 + p12 + p13 + p14;
    document.getElementById("resultadoTest").innerHTML = resultado;
}
(function caloriasPorciones() {
    var datos = [];
    var todosInput = document.querySelectorAll('.NumeroPorciones');
    todosInput.forEach(element => {
        element.addEventListener('change', function (e) {
            datos = document.getElementsByTagName("td");
            var totalCalorias = 0;
            var totalporciones = 0;
            for (var i = 1; i <= datos.length; i++) {
                try {
                    var idcalorias = "cal" + i.toString();
                    var idporciones = "porcion" + i.toString();
                    calorias = document.getElementById(idcalorias).innerHTML;
                    numPorcion = document.getElementById(idporciones).value;
                    numPorcion = numPorcion.replace(',', '.');
                    numPorcion = parseFloat(numPorcion);
                    // console.log(typeof (numPorcion));
                    if (isNaN(numPorcion) !== true) {
                        total = parseFloat(calorias) * parseFloat(numPorcion);
                        totalporciones = totalporciones + parseFloat(numPorcion);
                        totalCalorias = totalCalorias + total;
                        // console.log(totalCalorias);
                    }

                } catch {
                    // console.log("");
                }
            }
            document.getElementById("totalCaloriasElegidas").innerHTML = totalCalorias.toFixed(2);
            document.getElementById("totalPorciones").innerHTML = totalporciones.toFixed(2);

        });
    });
})();
(function buscar() {
    document.addEventListener("keyup", e => {
        if (e.target.matches("#buscador")) {
            if (e.key === "Escape") e.target.value = ""
            document.querySelectorAll("tr,.semana").forEach(alimento => {
                alimento.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                    ? (alimento.classList.remove("filtro"), deschequiar())
                    : (alimento.classList.add("filtro"), chequiar())
            })
        }
    })
    function chequiar() {
        document.querySelectorAll('input[type=checkbox]').forEach(function (checkElement) {
            checkElement.checked = true;
        });
    }
    function deschequiar() {
        document.querySelectorAll('input[type=checkbox]').forEach(function (checkElement) {
            checkElement.checked = false;
        });
    }
})();
function seleccionAlimentos(idMomento, grupo) {
    if (grupo === 1) {
        location.href = "completeFoodListEnergetic.html?momentoComida=" + idMomento.toString() + "&grupo=" + grupo.toString();
    }
    if (grupo === 2) {
        location.href = "completeFoodListProtein.html?momentoComida=" + idMomento.toString() + "&grupo=" + grupo.toString();
    }
    if (grupo === 3) {
        location.href = "completeFoodListDairy.html?momentoComida=" + idMomento.toString() + "&grupo=" + grupo.toString();
    }
    if (grupo === 4) {
        location.href = "completeFoodListFruitsAndVegetables.html?momentoComida=" + idMomento.toString() + "&grupo=" + grupo.toString();
    }
    if (grupo === 5) {
        location.href = "completeFoodListFats.html?momentoComida=" + idMomento.toString() + "&grupo=" + grupo.toString();
    }

}
function eliminarGrupos(grupo) {
    var grupoAlimenticio = grupo;
    document.querySelectorAll(".semana").forEach(alimento => {
        alimento.textContent.toLowerCase().includes(grupoAlimenticio.toLowerCase())
            ? (alimento.classList.remove("filtro"))
            : (alimento.classList.add("filtro"))
    })
}
(function desayuno() {
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    var idMomento = parseInt(urlParams.get('momentoComida'));
    var grupoAlim = parseInt(urlParams.get('grupo'));
    if (idMomento === 1) {
        document.getElementById("momentoComida").innerHTML = "Desayuno";
    }
    if (idMomento === 2) {
        document.getElementById("momentoComida").innerHTML = "Snack 1";
    }
    if (idMomento === 3) {
        document.getElementById("momentoComida").innerHTML = "Almuerzo";
    }
    if (idMomento === 4) {
        document.getElementById("momentoComida").innerHTML = "Snack 2";
    }
    if (idMomento === 5) {
        document.getElementById("momentoComida").innerHTML = "Cena";
    }
    if (idMomento === 6) {
        document.getElementById("momentoComida").innerHTML = "Refrigerio Nocturno";
    }
})()
function chequiar() {
    document.querySelectorAll('input[type=checkbox]').forEach(function (checkElement) {
        checkElement.checked = true;
    });
}
function deschequiar() {
    document.querySelectorAll('input[type=checkbox]').forEach(function (checkElement) {
        checkElement.checked = false;
    });
}
function foodEnergetic() {
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    var idMomento = parseInt(urlParams.get('momentoComida'));
    var grupo = parseInt(urlParams.get('grupo'));
    location.href = "completeFoodListEnergetic.html?momentoComida=" + idMomento.toString() + "&grupo=" + grupo.toString();
}
function foodProtein() {
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    var idMomento = parseInt(urlParams.get('momentoComida'));
    var grupo = parseInt(urlParams.get('grupo'));
    location.href = "completeFoodListProtein.html?momentoComida=" + idMomento.toString() + "&grupo=" + grupo.toString();
}
function foodDairy() {
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    var idMomento = parseInt(urlParams.get('momentoComida'));
    var grupo = parseInt(urlParams.get('grupo'));
    location.href = "completeFoodListDairy.html?momentoComida=" + idMomento.toString() + "&grupo=" + grupo.toString();
}
function foodFruitsVegetables() {
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    var idMomento = parseInt(urlParams.get('momentoComida'));
    var grupo = parseInt(urlParams.get('grupo'));
    location.href = "completeFoodListFruitsAndVegetables.html?momentoComida=" + idMomento.toString() + "&grupo=" + grupo.toString();
}
function foodFats() {
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    var idMomento = parseInt(urlParams.get('momentoComida'));
    var grupo = parseInt(urlParams.get('grupo'));
    location.href = "completeFoodListFats.html?momentoComida=" + idMomento.toString() + "&grupo=" + grupo.toString();
}
function guardarAlimentosSeleccionados(grupo) {
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    var idMomento = parseInt(urlParams.get('momentoComida'));
    var elements = document.querySelectorAll("#FormFavoritos input[type=number]")
    for (var i = 0, element; element = elements[i++];) {
        if (element.value !== "") {
            var idAli = element.id;
            var idAlimento = parseInt(idAli.slice(7));
            var momento = parseInt(idMomento);
            var grupoAlime = parseInt(grupo);
            if (idAlimento >= 162) {
                grupoAlime = 8;
            }
            var numPorciones = element.value;
            var idUsuario = 1;
            console.log("Momento: ", momento);
            console.log("Alimento: ", idAlimento);
            console.log("Grupo: ", grupoAlime);
            console.log("Porciones: ", numPorciones);
            console.log("Usuario: ", idUsuario);
            console.log("");


        }
    }
}
function crearTabla() {
    try {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(respuesta => respuesta.json())
            .then(json => {
                let tablaEnergeticos = document.getElementById('energeticosSeleccionados');
                let cuerpoTablaEnergeticos = document.createElement('tbody');
                json.forEach(a => {
                    let fila = document.createElement('tr');

                    let celda = document.createElement('td');
                    celda.innerText = a.id;
                    fila.appendChild(celda);
                    celda = document.createElement('td');
                    celda.innerText = a.name;
                    fila.appendChild(celda);
                    celda = document.createElement('td');
                    celda.innerText = a.username;
                    fila.appendChild(celda);
                    celda = document.createElement('td');
                    celda.innerText = a.email;
                    fila.appendChild(celda);
                    celda = document.createElement('td');
                    celda.innerText = a.address.city;
                    fila.appendChild(celda);
                    celda = document.createElement('td');
                    celda.innerText = a.address.zipcode;
                    fila.appendChild(celda);
                    celda = document.createElement('td');
                    celda.innerText = a.phone;
                    fila.appendChild(celda);
                    celda = document.createElement('td');
                    celda.innerText = a.website;
                    fila.appendChild(celda);
                    celda = document.createElement('td');
                    celda.innerText = a.phone;
                    fila.appendChild(celda);
                    celda = document.createElement('td');
                    celda.innerText = a.company.name;
                    fila.appendChild(celda);
                    cuerpoTablaEnergeticos.appendChild(fila)
                });
                tablaEnergeticos.appendChild(cuerpoTablaEnergeticos);
            })
    } catch (e) {
        console.log(e, "Error CargarAlimentos")
    }
}
function buscarCuponDescuento() {
    try {
        let validacion = true;
        if (validacion === true) {
            const valores = window.location.search;
            const urlParams = new URLSearchParams(valores);
            let precioBase = parseFloat(urlParams.get('valor'));
            let codigoDescuento = document.getElementById("codigoDescuento").value;
            let descuento = 0.05;
            let valorDescuento = precioBase * descuento
            let subtotal = precioBase - valorDescuento;
            let iva = subtotal * 0.19;
            let totalPagar = subtotal + iva;
            document.getElementById("valorBaseMembresia").innerText = "$ " + (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'COP' }).format(precioBase));;
            document.getElementById("subTotalPagar").innerText = "$ " + (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'COP' }).format(subtotal));
            document.getElementById("iva").innerText = "$ " + (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'COP' }).format(iva));
            document.getElementById("totalPagar").innerText = "$ " + (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'COP' }).format(totalPagar));

            document.getElementById("codigoDescn").innerText = codigoDescuento;
            document.getElementById("valorDesc").innerText = "- $ " + (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'COP' }).format(valorDescuento));

            document.getElementById("baseCheckout").value = subtotal;
            document.getElementById("ivaCheckout").value = iva;
            document.getElementById("totalPagarCheckout").value = totalPagar;
            document.getElementById("firmaCheckout").value = "nuevaFirma";
            document.getElementById("numeroFactura").value = "numeroFactura";
            document.getElementById("codigoDescuento").value = "";
        }
    }
    catch (e) {
        console.log(e, "Error Busqueda Cupon Descuento")
    }
}

function enviarDatosCheckoutTrimestral() {
    try {
        location.href = "checkout.html?valor=128000&membresia=Trimestral";
    } catch (e) {
        console.log(e, "Error");
    }
}

function enviarDatosCheckoutSemestral() {
    try {
        location.href = "checkout.html?valor=212000&membresia=Semestral";

    } catch (e) {
        console.log(e, "Error");
    }
}

function enviarDatosCheckoutAnual() {
    try {
        location.href = "checkout.html?valor=296000&membresia=Anual";

    } catch (e) {
        console.log(e, "Error");
    }
}

function llenadoWebCheckout() {
    try {
        const valores = window.location.search;
        const urlParams = new URLSearchParams(valores);
        let precioBase = parseFloat(urlParams.get('valor'));
        let membresiaURL = urlParams.get('membresia');
        let iva = precioBase * 0.19;
        let totalPagar = precioBase + iva;
        let nombreCompleto = "Leonardo Barona";
        let email = "lebab1990@gmail.com";

        // Datos del Front
        document.getElementById("tiempoMembresia").innerText = membresiaURL
        document.getElementById("valorBaseMembresia").innerText = "$ " + (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'COP' }).format(precioBase));;
        document.getElementById("subTotalPagar").innerText = "$ " + (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'COP' }).format(precioBase));
        document.getElementById("iva").innerText = "$ " + (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'COP' }).format(iva));
        document.getElementById("totalPagar").innerText = "$ " + (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'COP' }).format(totalPagar));
        document.getElementById("nombreUsuario").innerText = nombreCompleto
        document.getElementById("emailUsuarioCheckout").innerText = email

        // Datos del Webcheckout
        document.getElementById("baseCheckout").value = precioBase;
        document.getElementById("ivaCheckout").value = iva;
        document.getElementById("totalPagarCheckout").value = totalPagar;
        document.getElementById("buyUsuarioCheckout").value = email;
        document.getElementById("firmaCheckout").value = "firma";
        document.getElementById("numeroFactura").value = "numeroFactura";
    } catch (e) {
        console.log(e);
    }

}
function restablecerContrasena() {
    try {
        let contraNueva = document.getElementById("nuevaContra").value;
        let confirNueva = document.getElementById("confirNuevaContra").value;
        if (contraNueva === confirNueva) {
            console.log("Contraseña restablecida con exito");
        } else {
            console.log("Las contraseñas no conciden");
        }
    } catch (e) {
        console.log(e, "Error en Restablecer Contraseña")
    }
}
function cambiarContrasena() {
    try {
        const actual = "Leonardo.901010"
        let contraActual = document.getElementById("contraActual").value;
        let contraNueva = document.getElementById("nuevaContraCambio").value;
        let confirNueva = document.getElementById("confirNuevaContraCambio").value;
        console.log(contraActual);
        console.log(contraNueva);
        console.log(confirNueva);
        if (actual === contraActual) {
            if (contraNueva === confirNueva) {
                console.log("Contraseña restablecida con exito");
            } else {
                console.log("Contraseñas no coinciden");
            }
        } else {
            console.log("Contraseña actual errada");
        }
    } catch (e) { console.log(e, "Error en cambio de contraseña") }
}
function calcularEdad() {
    try {
        const fechaNacimiento = document.getElementById("fechaNacimiento").value;
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
        // console.log(edad);
        return parseInt(edad);
    } catch (e) {
        console.log(e, "Error al calcular la edad");
    }
}
function calcularIMC() {
    try {
        peso = document.getElementById("peso").value;
        estatura = document.getElementById("estatura").value;
        IMC = peso / (estatura * estatura);
        console.log(IMC);
        if (IMC >= 18.5 && IMC <= 24.9) {
            mensaje = "Normal";
        } else if (IMC >= 25 && IMC <= 29.9) {
            mensaje = "Sobrepeso";
        }
        else if (IMC >= 30 && IMC <= 34.9) {
            mensaje = "Obesidad Tipo 1";
        }
        else if (IMC >= 35 && IMC <= 39.9) {
            mensaje = "Obesidad Tipo 2";
        } else if (IMC >= 40) {
            mensaje = "Obesidad Tipo 3";
        } else {
            mensaje = "Error"
        }
        console.log(mensaje);
    } catch (e) {
        console.log(e, "Error al calcular IMC");
    }
}
function calcularLiquidos() {
    try {
        const peso = document.getElementById("peso").value;
        let rl = (35 * peso) / 1000;
        console.log(rl);
    } catch (e) { console.log(e, "Error al calcular los liquidos") }
}
function tmb() {
    try {
        genero = document.getElementById("genero").value;
        peso = document.getElementById("peso").value;
        estatura = document.getElementById("estatura").value;
        let edad = calcularEdad();
        //console.log(edad);
        //console.log(genero);
        let tmb;
        if (genero === "hombre") {
            tmb = 66.5 + (13.75 * peso) + (5 * (estatura * 100)) - (6.8 * edad);
        } else {
            tmb = 665 + (9.6 * peso) + (1.8 * (estatura * 100)) - (4.7 * edad);
        }
        console.log(tmb);
        return tmb;
    } catch (e) { console.log(e, "Error al calcular el TMB") }
}
function naf() {
    try {
        const tmb = tmb();
        const naf = 0.2 * tmb;
        // console.log(naf);
        return naf;
    } catch (e) { console.log(e, "Error al calcular NAF") }
}
function eta() {
    try {
        const tmb = tmb();
        const eta = 0.1 * tmb;
        // console.log(eta);
        return eta;
    } catch (e) { console.log(e, "Error al calcular el ETA") }
}
function gde(met, timeTotal) {
    // Gasto deportivo entrenamiento
    try {
        const peso = document.getElementById("peso").value;
        let gde = (0.0175 * peso * met) * timeTotal;
        // console.log(gde);
        return gde;
    } catch (e) { console.log(e, "Error al calcular el GDE") }
}
function rs() {
    //R= Restriccion;  S=Superavit
    try {
        const peso = document.getElementById("peso").value;
        const pesoDeseado = 60;
        let diferencia = pesoDeseado - peso;
        // console.log(diferencia);
        let ipm = 0;
        //ipm = Incremento Peso Mensual
        if (Math.abs(diferencia) <= 12) {
            ipm = Math.abs(diferencia) / 3;
        } else if (Math.abs(diferencia) <= 24) {
            ipm = Math.abs(diferencia) / 6;
        } else if (Math.abs(diferencia) <= 48) {
            ipm = Math.abs(diferencia) / 12;
        } else {
            ipm = 4;
        }
        // console.log(ipm);
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
        } else {
            rs = 0;
        }
        // console.log(peso);
        // console.log(pesoDeseado);
        // console.log(rs);
        return rs;
    } catch (e) { console.log(e, "Error al calcular el RS"); }
}
function get() {
    try {
        let tmb = tmb();
        let naf = naf();
        let eta = eta();
        let tgd = gde(6, 4);
        let rs = rs();
        let get = tmb + naf + eta + tgd + rs;
        // console.log(tmb);
        // console.log(naf);
        // console.log(eta);
        // console.log(tgd);
        // console.log(rs);
        console.log(get);
        return parseFloat(get);
    } catch (e) { console.log(e, "Error al calcular el GET"); }
}
function rangoGET() {
    try {
        let rangeGet = get();
        let max = rangeGet * 1.05;
        let min = rangeGet * 0.95;
        console.log(max);
        console.log(rangeGet);
        console.log(min);
    } catch (e) { console.log(e, "Error al calcular el RANGO_GET") }
}
function calcularDiferenciaDias() {
    try {
        const fechaIncioEntreno = "2022-09-15";
        //Datos Fecha Actual    
        const fechaActual = new Date();
        const anoActual = parseInt(fechaActual.getFullYear());
        const mesActual = parseInt(fechaActual.getMonth()) + 1;
        const diaActual = parseInt(fechaActual.getDate());
        const fechaSistema = (anoActual + '-' + mesActual + '-' + diaActual)
        //console.log(fechaSistema);
        //Datos Fecha Nacimiento
        // const anoEntreno = parseInt(String(fechaIncioEntreno).substring(0, 4));
        // const mesEntreno = parseInt(String(fechaIncioEntreno).substring(5, 7));
        // const diaEntreno = parseInt(String(fechaIncioEntreno).substring(8, 10));
        // const fechaEntreno=(anoActual+'-'+mesActual+'-'+diaActual)
        //console.log(fechaIncioEntreno);
        let fechaInicial = new Date(fechaIncioEntreno).getTime();
        let fechaFinal = new Date(fechaSistema).getTime();
        let diff = fechaFinal - fechaInicial;
        dias = (diff / (1000 * 60 * 60 * 24));
        console.log(dias);
        if (dias == 1) {
            console.log("Enviar URL Tienda");
        }
        if (dias == 3) {
            console.log("Enviar FeedBack Final");
        }
        if (dias == 5) {
            console.log("Enviar Remarketing");
        }
        if (dias > 7) {
            console.log("Bloquear actulizacion de datos - Nivel, Escala y Porque");
            document.getElementById("btnActualizar").style.display = "none";
        }
        if (dias == 15) {
            console.log("Enviar Remarketing");
        }
        if (dias >= 30) {
            console.log("Enviar FeedBack 30 sino lo ha diligenciado");
        }

    } catch (e) {
        console.log(e, "Error al calcular la actualizacion de Nivel , Escala y ¿Porque?");
    }
}
function dividirEnteroDecimal() {
    let numCompleto = 3.02321
    let numEntero = Math.trunc(numCompleto)
    let parteDecimal = parseFloat(numCompleto - numEntero).toFixed(5)

    console.log(numCompleto);
    console.log(parteDecimal);
}
(function () {
    try {
        var totalHoras = 0;
        var datos = [];
        var regLunes = false;
        datos = document.querySelectorAll(".form-control.dias");
        datos.forEach(element => {
            element.addEventListener('change', function (e) {
                var hrLunes = parseInt(document.getElementById("dia1").value);
                var hrMartes = parseInt(document.getElementById("dia2").value);
                var hrMiercoles = parseInt(document.getElementById("dia3").value);
                var hrJueves = parseInt(document.getElementById("dia4").value);
                var hrViernes = parseInt(document.getElementById("dia5").value);
                var hrSabado = parseInt(document.getElementById("dia6").value);
                var hrDomingo = parseInt(document.getElementById("dia7").value);
                if (isNaN(hrLunes) === true) {
                    hrLunes = 0
                }
                if (isNaN(hrMartes) === true) {
                    hrMartes = 0
                }
                if (isNaN(hrMiercoles) === true) {
                    hrMiercoles = 0
                }
                if (isNaN(hrJueves) === true) {
                    hrJueves = 0
                }
                if (isNaN(hrViernes) === true) {
                    hrViernes = 0
                }
                if (isNaN(hrSabado) === true) {
                    hrSabado = 0
                }
                if (isNaN(hrDomingo) === true) {
                    hrDomingo = 0
                }
                totalHoras = hrLunes + hrMartes + hrMiercoles + hrJueves + hrViernes + hrSabado + hrDomingo;
               
                document.getElementById("horasEntrenamiento").innerHTML = totalHoras;
                enviarDisponibilidad()
            });
        });
    } catch (e) {
        console.log(e, "Error al calcular las horas disponibles semanales")
    }
})();


function enviarDisponibilidad() {
    try {
        var totalDias = 0;
        var hrLunes = parseInt(document.getElementById("dia1").value);
        var hrMartes = parseInt(document.getElementById("dia2").value);
        var hrMiercoles = parseInt(document.getElementById("dia3").value);
        var hrJueves = parseInt(document.getElementById("dia4").value);
        var hrViernes = parseInt(document.getElementById("dia5").value);
        var hrSabado = parseInt(document.getElementById("dia6").value);
        var hrDomingo = parseInt(document.getElementById("dia7").value);
        if (hrLunes > 0) {
            totalDias++;
        }
        if (hrMartes > 0) {
            totalDias++;
        }
        if (hrMiercoles > 0) {
            totalDias++;
        }
        if (hrJueves > 0) {
            totalDias++;
        }
        if (hrViernes > 0) {
            totalDias++;
        }
        if (hrSabado > 0) {
            totalDias++;
        }
        if (hrDomingo > 0) {
            totalDias++;
        }
        document.getElementById("DisponibilidadDias").innerHTML = totalDias;
    } catch (e) {
        console.log(e, "Error enviar dias disponibles")
    }
};


// (function() {
//     try{
//     var handleNivel = document.getElementById("nivel");
//     handleNivel.onchange = function () {
//         var handleEscala = document.getElementById("escala");
//         var vectorNivel = {
//             'Principiante': ['I', 'II', 'III'],
//             'Intermedio': ['I', 'II', 'III'],
//             'Avanzado': ['I', 'II', 'III']
//         };
//         var vectorNivel_2 = {
//             'Principiante': ['1', '2', '3'],
//             'Intermedio': ['4', '5', '6'],
//             'Avanzado': ['7', '8', '9']
//         };
//         var url = {
//             'Principiante': ["https://www.youtube.com/user/Google"],
//             'Intermedio': ["https://www.espn.com.co/"],
//             'Avanzado': ["https://disneylatino.com/"]
//         };
//         var strEscala = handleNivel.options[handleNivel.selectedIndex].text;
//         var strEscalas = vectorNivel[strEscala]
//         var strValorEscalas = vectorNivel_2[strEscala]
//         handleEscala.innerHTML = "";
//         document.getElementById("urlImagen").href = url[strEscala];
//         for (var i = 0; i < strEscalas.length; i++) {
//             var el = document.createElement("option");
//             el.textContent = strEscalas[i];
//             el.value = strValorEscalas[i];
//             handleEscala.appendChild(el);
//         }
//     }}catch(e){
//         console.log(e, "Error al cambiar URL y Escalas de Nivel Deportivo");
//     }
// })();
