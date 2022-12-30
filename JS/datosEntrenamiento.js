// hhmmss(vrHoras, vrMin, vrSeg);
function hhmmss(h, m, s) {
    let mm = 0;
    try {
        mh = h * 60;
        ms = s / 60
        mm = m + mh + ms
        return mm;

    } catch (error) {
        console.log(error);
    }
}
async function guardarDatosEntrenamiento() {


    $("#spinnerGeneral").show();
    let duracion = 0;
    let distancia = 0;
    let desnivel = 0;
    let fcpromedio = 0;
    let fcmaxima = 0;
    let ppromedio = 0;
    let pmaxima = 0;
    let vpromedio = 0;
    let vmaxima = 0;
    let cpromedio = 0;
    let cmaxima = 0;
    let tss = 0;
    let factorintensidad = 0;
    let np = 0;
    let trabajo = 0;
    let fczona1 = 0;
    let fczona2 = 0;
    let fczona3 = 0;
    let fczona4 = 0;
    let fczona5 = 0;
    let fczona6 = 0;
    let pzona1 = 0;
    let pzona2 = 0;
    let pzona3 = 0;
    let pzona4 = 0;
    let pzona5 = 0;
    let pzona6 = 0;
    let vzona1 = 0;
    let vzona2 = 0;
    let vzona3 = 0;
    let vzona4 = 0;
    let vzona5 = 0;
    let vzona6 = 0;

    duracion = hhmmss(parseFloat(document.getElementById("HorasEntreno").value), parseFloat(document.getElementById("MinutosEntreno").value), parseFloat(document.getElementById("SegundosEntreno").value));
    distancia = parseFloat(document.getElementById("DistanciaEntreno").value);
    desnivel = parseFloat(document.getElementById("DesnivelEntreno").value);
    fcpromedio = parseFloat(document.getElementById("ppm-planteado").value);
    fcmaxima = parseFloat(document.getElementById("ppm-real").value);
    ppromedio = parseFloat(document.getElementById("potencia-planteado").value);
    pmaxima = parseFloat(document.getElementById("potencia-real").value);
    vpromedio = parseFloat(document.getElementById("velocidad-planteado").value);
    vmaxima = parseFloat(document.getElementById("velocidad-real").value);
    cpromedio = parseFloat(document.getElementById("cadencia-planteado").value);
    cmaxima = parseFloat(document.getElementById("cadencia-real").value);
    tss = parseFloat(document.getElementById("tss-real").value);
    factorintensidad = parseFloat(document.getElementById("if-real").value);
    np = parseFloat(document.getElementById("np-real").value);
    trabajo = parseFloat(document.getElementById("trabajo-real").value);

    //Zonas en FC
    fczona1 = hhmmss(parseFloat(document.getElementById("fchzona1").value), parseFloat(document.getElementById("fcmzona1").value), parseFloat(document.getElementById("fcszona1").value));
    fczona2 = hhmmss(parseFloat(document.getElementById("fchzona2").value), parseFloat(document.getElementById("fcmzona2").value), parseFloat(document.getElementById("fcszona2").value));
    fczona3 = hhmmss(parseFloat(document.getElementById("fchzona3").value), parseFloat(document.getElementById("fcmzona3").value), parseFloat(document.getElementById("fcszona3").value));
    fczona4 = hhmmss(parseFloat(document.getElementById("fchzona4").value), parseFloat(document.getElementById("fcmzona4").value), parseFloat(document.getElementById("fcszona4").value));
    fczona5 = hhmmss(parseFloat(document.getElementById("fchzona5").value), parseFloat(document.getElementById("fcmzona5").value), parseFloat(document.getElementById("fcszona5").value));
    fczona6 = hhmmss(parseFloat(document.getElementById("fchzona6").value), parseFloat(document.getElementById("fcmzona6").value), parseFloat(document.getElementById("fcszona6").value));

    //Zonas en Potencia
    pzona1 = hhmmss(parseFloat(document.getElementById("phzona1").value), parseFloat(document.getElementById("pmzona1").value), parseFloat(document.getElementById("pszona1").value));
    pzona2 = hhmmss(parseFloat(document.getElementById("phzona2").value), parseFloat(document.getElementById("pmzona2").value), parseFloat(document.getElementById("pszona2").value));
    pzona3 = hhmmss(parseFloat(document.getElementById("phzona3").value), parseFloat(document.getElementById("pmzona3").value), parseFloat(document.getElementById("pszona3").value));
    pzona4 = hhmmss(parseFloat(document.getElementById("phzona4").value), parseFloat(document.getElementById("pmzona4").value), parseFloat(document.getElementById("pszona4").value));
    pzona5 = hhmmss(parseFloat(document.getElementById("phzona5").value), parseFloat(document.getElementById("pmzona5").value), parseFloat(document.getElementById("pszona5").value));
    pzona6 = hhmmss(parseFloat(document.getElementById("phzona6").value), parseFloat(document.getElementById("pmzona6").value), parseFloat(document.getElementById("pszona6").value));

    //Zonas en Velocidad
    vzona1 = hhmmss(parseFloat(document.getElementById("vhzona1").value), parseFloat(document.getElementById("vmzona1").value), parseFloat(document.getElementById("vszona1").value));
    vzona2 = hhmmss(parseFloat(document.getElementById("vhzona2").value), parseFloat(document.getElementById("vmzona2").value), parseFloat(document.getElementById("vszona2").value));
    vzona3 = hhmmss(parseFloat(document.getElementById("vhzona3").value), parseFloat(document.getElementById("vmzona3").value), parseFloat(document.getElementById("vszona3").value));
    vzona4 = hhmmss(parseFloat(document.getElementById("vhzona4").value), parseFloat(document.getElementById("vmzona4").value), parseFloat(document.getElementById("vszona4").value));
    vzona5 = hhmmss(parseFloat(document.getElementById("vhzona5").value), parseFloat(document.getElementById("vmzona5").value), parseFloat(document.getElementById("vszona5").value));
    vzona6 = hhmmss(parseFloat(document.getElementById("vhzona6").value), parseFloat(document.getElementById("vmzona6").value), parseFloat(document.getElementById("vszona6").value));

    let url = apiServer + "resultados/crear";
    console.log(url);
    let bodyString = JSON.stringify({
        fkObjetivoDeportivo: parseInt(localStorage.getItem('idObjDeport')),
        // fkObjetivoDeportivo: 1,
        duracionEntrenamiento: duracion.toFixed(3),
        distanciaRecorrida: distancia.toFixed(3),
        desnivelPositivoAcumu: desnivel.toFixed(3),
        fcMax: fcmaxima.toFixed(3),
        fcPromedio: fcpromedio.toFixed(3),
        potenciaMax: pmaxima.toFixed(3),
        potenciaPromedio: ppromedio.toFixed(3),
        velocidadMax: vmaxima.toFixed(3),
        velocidadPromedio: vpromedio.toFixed(3),
        cadenciaMax: cmaxima.toFixed(3),
        cadenciaPromedio: cpromedio.toFixed(3),
        tssReal: tss.toFixed(3),
        ifReal: factorintensidad.toFixed(3),
        npReal: np.toFixed(3),
        trabajoReal: trabajo.toFixed(3),
        fcZona1: fczona1.toFixed(3),
        fcZona2: fczona2.toFixed(3),
        fcZona3: fczona3.toFixed(3),
        fcZona4: fczona4.toFixed(3),
        fcZona5: fczona5.toFixed(3),
        fcZona6: fczona6.toFixed(3),
        potenciaZona1: pzona1.toFixed(3),
        potenciaZona2: pzona2.toFixed(3),
        potenciaZona3: pzona3.toFixed(3),
        potenciaZona4: pzona4.toFixed(3),
        potenciaZona5: pzona5.toFixed(3),
        potenciaZona6: pzona6.toFixed(3),
        velocidadZona1: vzona1.toFixed(3),
        velocidadZona2: vzona2.toFixed(3),
        velocidadZona3: vzona3.toFixed(3),
        velocidadZona4: vzona4.toFixed(3),
        velocidadZona5: vzona5.toFixed(3),
        velocidadZona6: vzona6.toFixed(3),
        ipPc: server.REMOTE_ADDR
    });
    try {
        await fetch(url, {
            method: 'POST',
            body: bodyString,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin': 'https://*elsa360.com'
            },
        })
            .then(response => response.json())
            .then(respuesta => {
                console.log(respuesta);
                location.href = "dashboard.html";
            });

    } catch (e) {
        console.log("Error: ", e);
    }
}