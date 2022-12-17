window.onload = async () => {

    let membresia = sessionStorage.getItem('membresia')
    if (membresia == "ACTIVA") {
        let perfil = sessionStorage.getItem('perfil')
        fechaObjetivos(perfil)
        disponibilidad(perfil)
        let usuario = sessionStorage.getItem('login')
        try {
            let url = apiServer + "perfil/usuario?idusuario=" + usuario + ""
            var pesoActualPerfil
            var pesoObjetivoPerfil
            var genero
            fetch(url)
                .then(response => response.json())
                .then(respuesta => {
                    respuesta.forEach(elemento => {
                        console.log(elemento);
                        pesoActualPerfil = elemento.peso
                        pesoObjetivoPerfil = elemento.pesoObjetivo
                        genero = elemento.sexo
                        nacimiento = elemento.fechaNacimiento
                        estaturaPerfil = elemento.estatura
                    });

                    resultados(parseInt(perfil), parseInt(pesoActualPerfil));
                    requerimientoLiquidos(parseInt(pesoActualPerfil));
                    calculoSemanas(fechaInicioEntreno, fechaObjetivo)
                    tests(fechaInicioEntreno)
                    mesosciclos(nivel, escala, semanasTotales)
                    get(nacimiento, genero, parseInt(pesoActualPerfil), parseInt(pesoObjetivoPerfil), parseInt(estaturaPerfil), gastoDeportivo)
                    cet(perfil, fechaActual)

                });
        } catch (e) {
            console.log("Dashboar: ", e)
        }
    } else {
        location.href = "pages-pricing.html"
    }

}

async function fechaObjetivos(idperfil) {
    try {
        let url = apiServer + "objetivoDeportivo/perfil?idPerfil=" + idperfil + ""
        let fechaIni;
        let fechaObj;
        await fetch(url)
            .then(response => response.json())
            .then(respuesta => {
                if (respuesta != 0) {
                    respuesta.forEach(elemento => {
                        fechaObj = elemento.fechaObjetivo;
                        fechaIni = elemento.fechaInicialEntren;
                    });
                    fecha_1 = fechaObj.split(" ")
                    fecha_2 = fechaIni.split(" ")
                    document.getElementById("fechaObjetivoDashboard").innerText = fecha_1[0]
                    document.getElementById("fechaInicialDashboard").innerText = fecha_2[0]
                } else {
                    document.getElementById("btnInicioEntreno").style = "display: none;"
                    console.log("No tiene objetivo deportivo")
                }
            });

    } catch (e) {
        console.log("FechaObjetivos:", e)
    }
}
async function disponibilidad(idperfil) {
    try {
        let url = apiServer + "disponibilidad/perfil?idPerfil=" + idperfil + ""
        let thrsemanal;
        let thlunes;
        let thmartes;
        let thmiercoles;
        let thjueves;
        let thviernes;
        let thsabado;
        let thdomingo;
        await fetch(url)
            .then(response => response.json())
            .then(respuesta => {
                if (respuesta != 0) {
                    respuesta.forEach(elemento => {
                        thrsemanal = elemento.totalHorasSemana;
                        thlunes = elemento.lunes;
                        thmartes = elemento.martes;
                        thmiercoles = elemento.miercoles;
                        thjueves = elemento.jueves;
                        thviernes = elemento.viernes;
                        thsabado = elemento.sabado;
                        thdomingo = elemento.domingo;


                    });

                    dataHrsDias = [thlunes, thmartes, thmiercoles, thjueves, thviernes, thsabado, thdomingo]
                    graficosHorasDiarias(dataHrsDias)
                    document.getElementById("hrSemanalDashboard").innerText = thrsemanal
                } else {
                    document.getElementById("btndisponibilidadsemanal").style = "display: none;"
                    console.log("No tiene disponibilidad semanal")
                }
            });
    } catch (e) {
        console.log("Disponibilidad:", e)
    }
}
async function resultados(idperfil, pesoActual) {
    try {
        let url = apiServer + "resultados/perfil?idPerfil=" + idperfil + ""
        let sesiones;
        let duracionTotal = 0;
        let distanciaTotal = 0;
        let desnivel;
        let fcmax = 0;
        let fcpromedio = 0;
        let pmax = 0;
        let potAbsPromedio = 0;
        let potRelPromedio = 0;
        let vmax = 0;
        let velocidadPromedio = 0;
        let cmax = 0;
        let cadenciaPromedio = 0;
        let trabajo = 0;
        let ftp = 0;
        let fhtr = 0;
        await fetch(url)
            .then(response => response.json())
            .then(respuesta => {
                sesiones = respuesta.length;
                respuesta.forEach(elemento => {
                    // console.log(elemento)
                    duracionTotal = duracionTotal + elemento.duracionEntrenamiento;
                    distanciaTotal = distanciaTotal + elemento.distanciaRecorrida;
                    desnivel = distanciaTotal + elemento.desnivelPositivoAcumu;
                    if (elemento.fcMax > fcmax) {
                        fcmax = elemento.fcMax;
                    }
                    fcpromedio = fcpromedio + elemento.fcPromedio;
                    if (elemento.potenciaMax > pmax) {
                        pmax = elemento.potenciaMax;
                    }
                    if (elemento.evento == "test") {
                        ftp = potAbsPromedio * 0.95
                        fhtr = fcpromedio * 0.95
                    }
                    potAbsPromedio = potAbsPromedio + elemento.potenciaPromedio;
                    potRelPromedio = potRelPromedio + elemento.potenciaPromedio;
                    if (elemento.velocidadMax > vmax) {
                        vmax = elemento.velocidadMax;
                    }
                    velocidadPromedio = velocidadPromedio + elemento.velocidadPromedio;
                    if (elemento.cadenciaMax > cmax) {
                        cmax = elemento.cadenciaMax;
                    }
                    cadenciaPromedio = cadenciaPromedio + elemento.cadenciaPromedio;
                    trabajo = trabajo + elemento.trabajoReal;
                });
                document.getElementById("sesionesDashboard").innerText = sesiones
                document.getElementById("duracionTotalDashboard").innerText = duracionTotal
                document.getElementById("promedioSesionDashboard").innerText = (duracionTotal / sesiones)
                document.getElementById("distanciaTotalDashboard").innerText = distanciaTotal + " Km"
                document.getElementById("distPromedioSesionDashboard").innerText = (distanciaTotal / sesiones).toFixed(2) + " Km"
                document.getElementById("desnivelDashboard").innerText = desnivel + " m"
                document.getElementById("desnivelPromedioDashboard").innerText = (desnivel / sesiones).toFixed(2) + " m"
                document.getElementById("fmaxdashboard").innerText = fcmax + " PPM"
                document.getElementById("fcPromedioDashboard").innerText = (fcpromedio / sesiones).toFixed(2) + " PPM"
                document.getElementById("pMaxDashboard").innerText = pmax + " W"
                document.getElementById("potAbsPromedioDashboard").innerText = (potAbsPromedio / sesiones).toFixed(2) + " W"
                document.getElementById("pRelMaxDashboard").innerText = ((pmax / sesiones) / pesoActual).toFixed(2) + " W"
                document.getElementById("potRelPromedioDashboard").innerText = ((potRelPromedio / sesiones) / 70).toFixed(2) + " W"
                document.getElementById("vMaxDashboard").innerText = vmax + " km/h"
                document.getElementById("velPromedioDashboard").innerText = (velocidadPromedio / sesiones).toFixed(2) + " km/h"
                document.getElementById("cMaxDashboard").innerText = cmax + " RPM"
                document.getElementById("cadePromedioDashboard").innerText = (cadenciaPromedio / sesiones).toFixed(2) + " RPM"
                document.getElementById("trabajoDashboard").innerText = trabajo + " KJ"
                document.getElementById("trabajoPromedioDashboard").innerText = (trabajo / sesiones).toFixed(2) + " KJ"

                document.getElementById("ftpdashboard").innerText = ftp.toFixed(2)
                document.getElementById("ftpReldashboard").innerText = (ftp / pesoActual).toFixed(2)
                document.getElementById("zona1ftp").innerText = (ftp * 0.55).toFixed(2)
                document.getElementById("zona2ftp").innerText = (ftp * 0.56).toFixed(2) + " - " + (ftp * 0.72).toFixed(2)
                document.getElementById("zona3ftp").innerText = (ftp * 0.73).toFixed(2) + " - " + (ftp * 0.82).toFixed(2)
                document.getElementById("zona4ftp").innerText = (ftp * 0.83).toFixed(2) + " - " + (ftp * 0.96).toFixed(2)
                document.getElementById("zona5ftp").innerText = (ftp * 0.97).toFixed(2) + " - " + (ftp * 1.02).toFixed(2)
                document.getElementById("zona6ftp").innerText = (ftp * 1.03).toFixed(2) + " - " + (ftp * 1.60).toFixed(2)

                document.getElementById("fhtrdashboard").innerText = fhtr.toFixed(2)
                document.getElementById("zona1fhtr").innerText = (fhtr * 0.55).toFixed(2)
                document.getElementById("zona2fhtr").innerText = (fhtr * 0.56).toFixed(2) + " - " + (fhtr * 0.72).toFixed(2)
                document.getElementById("zona3fhtr").innerText = (fhtr * 0.73).toFixed(2) + " - " + (fhtr * 0.82).toFixed(2)
                document.getElementById("zona4fhtr").innerText = (fhtr * 0.83).toFixed(2) + " - " + (fhtr * 0.96).toFixed(2)
                document.getElementById("zona5fhtr").innerText = (fhtr * 0.97).toFixed(2) + " - " + (fhtr * 1.02).toFixed(2)
                document.getElementById("zona6fhtr").innerText = (fhtr * 1.03).toFixed(2) + " - " + (fhtr * 1.60).toFixed(2)
            });
    } catch (e) {
        console.log("Resultados:", e)
    }
}
function requerimientoLiquidos(pesoActual) {
    //Peso Actual en Kilogramos
    try {
        let rl = (35 * pesoActual) / 1000;
        document.getElementById("requerimientoLiquidos").innerText = rl + " Lts"
    } catch (e) {
        console.log("Requerimiento Liquidos: ", e)
    }
}
function calculoSemanas(fechaIncioEntreno, fechaObjetivoDeport) {
    inicial = fechaIncioEntreno.split("/")
    final = fechaObjetivoDeport.split("/")
    nuevaFechaInicial = inicial[2] + "-" + inicial[1] + "-" + inicial[0]
    nuevaFechaFinal = final[2] + "-" + final[1] + "-" + final[0]
    try {
        let fechaInicial = new Date(nuevaFechaInicial).getTime();
        let fechaFinal = new Date(nuevaFechaFinal).getTime();
        let diff = fechaFinal - fechaInicial;
        dias = (diff / (1000 * 60 * 60 * 24));
        let semanas = (dias / 7).toFixed(0);
        document.getElementById("semanasDashboard").innerText = semanas + " semanas"
    } catch (e) {
        console.log(e);
    }
}
function graficosHorasDiarias(dataVolumnSemanal) {
    try {
        Apex.chart = {
            locales: [{
                "name": "es",
                "options": {
                    "months": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                    "shortMonths": ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
                    "days": ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
                    "shortDays": ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
                    "toolbar": {
                        "exportToSVG": "Descargar SVG",
                        "exportToPNG": "Descargar PNG",
                        "menu": "Menu",
                        "selection": "Seleccón",
                        "selectionZoom": "Zoom",
                        "zoomIn": "Zoom In",
                        "zoomOut": "Zoom Out",
                        "pan": "Panoramico",
                        "reset": "Reset Zoom"
                    }
                }
            }],
            defaultLocale: "es",
        };






        //  Grafico de Duración, Distancia y Elevanción de cada entreno
        dataDias = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

        durElvDistEntreno(
            dataVolumnSemanal, dataDias
        );

        function durElvDistEntreno(
            dataVolumnSemanal, dataDias
        ) {

            var optionsVolumenSemanal = {
                colors: ["#9bcb3b"],
                series: [{
                    name: 'Disponibilidad',
                    type: 'bar',
                    data: dataVolumnSemanal
                },
                ],
                chart: {
                    background: '#2b2c40',
                    type: 'bar',
                    height: 80,
                    toolbar: {
                        show: false,
                    }
                },
                title: {
                    text: undefined,
                },
                plotOptions: {
                    bar: {
                        barHeight: '80%',
                        columnWidth: '75%',
                        startingShape: 'rounded',
                        endingShape: 'rounded',
                        borderRadius: 2,
                        distributed: true
                    }
                },
                fill: {
                    opacity: [0.55],
                    gradient: {
                        inverseColors: false,
                        shade: 'light',
                        type: "vertical",
                        opacityFrom: 0.85,
                        opacityTo: 0.55,
                        stops: [0, 100, 100, 100]
                    }
                },
                stroke: {
                    width: [2,],
                    curve: 'smooth',
                    colors: ["#9bcb3b"],
                },
                grid: {
                    show: false,
                    padding: {
                        top: -20,
                        bottom: -12,
                        left: -10,
                        right: 0
                    }
                },
                dataLabels: {
                    enabled: false
                },
                labels: dataDias,
                legend: {
                    show: false,
                },
                xaxis: {
                    type: 'category',
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        style: {
                            colors: ['#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2']
                        }
                    }

                },
                yaxis: [
                    {
                        axisTicks: {
                            show: false,
                            color: '#9bcb3b',
                            offsetX: 10,
                        },
                        axisBorder: {
                            show: false,
                            color: '#9bcb3b',
                            offsetX: -10,
                        },
                        labels: {
                            show: false,
                            rotate: 90,
                            offsetX: -10,
                            style: {
                                colors: '#9bcb3b',
                                fontSize: '10px'
                            }
                        },
                        tooltip: {
                            enabled: false
                        }
                    },
                ],
                tooltip: {
                    enabled: true,
                    y: [
                        {
                            formatter: function (val) {
                                return val + " hrs"
                            }
                        },
                    ]
                }
            };

            var VolumenSemanal = new ApexCharts(document.querySelector("#VolumenSemanal"), optionsVolumenSemanal);
            VolumenSemanal.render();

        }
        //FIN  Grafico de Duración, Distancia y Elevanción de cada entreno
    } catch (e) {
        console.log("Graficos Disponibilidad Diaria: ", e)
    }
}
function fechastests(fecha, dias) {
    try {
        let date = fecha.split("/");
        let year = parseInt(date[0]);
        let mouth = parseInt(date[1]);
        let day = parseInt(date[2]);
        let dia = (day + dias);
        while (dia > 30) {
            dia = (dia) - 30;
            mouth = mouth + 1;
            if (mouth > 12) {
                year = year + 1;
                mouth = (mouth) - 12;
            }
        }
        if (dia < 10) {
            dia = '0' + dia.toString();
        }
        if (mouth < 10) {
            mouth = '0' + mouth.toString();
        }
        var fechafinaltest = ((dia).toString() + '/' + mouth.toString() + '/' + year.toString());
        return fechafinaltest
    } catch (e) {
        console.log("Test's: ", e)
    }
}
function tests(fecha) {

    document.getElementById("testinicialdashboard").innerText = fechastests(fecha, 28)
    document.getElementById("testcontrol1dashboard").innerText = fechastests(fecha, 56)
    document.getElementById("testcontrol2dashboard").innerText = fechastests(fecha, 84)
    document.getElementById("testcontrol3dashboard").innerText = fechastests(fecha, 112)
    document.getElementById("testcontrol4dashboard").innerText = fechastests(fecha, 140)
    document.getElementById("testcontrol5dashboard").innerText = fechastests(fecha, 168)
}
async function mesosciclos(nivel, escala, semanasTotales) {
    try {
        let url = apiServer + "minutaSemanalCiclismo/mesociclos?nivel=" + nivel + "&escala=" + escala + "&numSemanasDisponibles=" + semanasTotales + ""
        let preparacion = 0;
        let desarrollador1 = 0;
        let desarrollador2 = 0;
        let precompetitivo = 0;
        let competencia = 0;
        let transitorio = 0;
        await fetch(url)
            .then(response => response.json())
            .then(respuesta => {
                respuesta.forEach(elemento => {
                    if (elemento.mesociclo == "preparacion") {
                        preparacion = preparacion + 1;
                    }
                    if (elemento.mesociclo == "desarrollador1") {
                        desarrollador1 = desarrollador1 + 1;
                    }
                    if (elemento.mesociclo == "desarrollador2") {
                        desarrollador2 = desarrollador2 + 1;
                    }
                    if (elemento.mesociclo == "precompetitivo") {
                        precompetitivo = precompetitivo + 1;
                    }
                    if (elemento.mesociclo == "competencia") {
                        competencia = competencia + 1;
                    }
                    if (elemento.mesociclo == "Transitorio") {
                        transitorio = transitorio + 1;
                    }
                });
            });
        document.getElementById("preparacionDashboard").innerText = preparacion
        document.getElementById("desasrrollador1Dashboard").innerText = desarrollador1
        document.getElementById("desasrrollador2Dashboard").innerText = desarrollador2
        document.getElementById("precompetitivoDashboard").innerText = precompetitivo
        document.getElementById("competitivoDashboard").innerText = competencia
        document.getElementById("transitorioDashboard").innerText = transitorio
    } catch (e) {
        console.log("Mesociclos: ", e)
    }
}

function get(fechaNacimiento, genero, pesoActualPerfil, pesoDeseadoPerfil, estaturaUsuario, SumatoriaMET) {
    try {
        let tasaMetabolicaBasal = tmb(fechaNacimiento, genero, pesoActualPerfil, estaturaUsuario);
        let nivelActividadFisica = naf(tasaMetabolicaBasal);
        let efectoTermicoAlim = eta(tasaMetabolicaBasal);
        let totalGastoDeportivo = gde(SumatoriaMET, pesoActualPerfil);
        let dataRS = rs(pesoActualPerfil, pesoDeseadoPerfil)
        let restriccionSuperavit = dataRS[0];
        var get = tasaMetabolicaBasal + nivelActividadFisica + efectoTermicoAlim + totalGastoDeportivo + restriccionSuperavit;
        document.getElementById("GETdashboard").innerText = get.toFixed(2) + " Cal"

    } catch (e) { console.log("GET: ", e) }
}
function diferenciaPeso(userWeightCurrent, userWeightWanted) {
    //Peso en Kilogramos
    let userWeightDifference = userWeightWanted - userWeightCurrent;
    return userWeightDifference;
}
function calcularEdad(fechaNacimiento) {
    try {
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
function tmb(fechaNacimiento, genero, pesoActual, estatura) {
    //Tasa Metabolica Basal
    try {
        let tmb;
        let userAge = calcularEdad(fechaNacimiento);
        if (genero === "hombre") {
            tmb = 66.5 + (13.75 * pesoActual) + (5 * (estatura)) - (6.8 * userAge);
        } else {
            tmb = 665 + (9.6 * pesoActual) + (1.8 * (estatura)) - (4.7 * userAge);
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
function gde(SumatoriaMETEjer, pesoActual) {
    //Gasto Deportivo del Entrenamiento
    //SumatoriaMET = Suma de todos los MET de los ejercicios
    try {
        let gde = SumatoriaMETEjer * pesoActual;
        return gde;
    } catch (e) { console.log(e) }
}
function rs(pesoActual, pesoObjetivo) {
    //R => Restricción
    //S => Superavit
    //ipm = Incremento Peso Mensual
    try {
        let diferencia = diferenciaPeso(pesoActual, pesoObjetivo);
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
async function cet(idperfil, fecha) {
    try {
        let url = apiServer + "alimentoRegularSeleccionado/cet?idPerfil=" + idperfil + "&fecha=" + fecha + "";
        var totalCET = 0;
        await fetch(url)
            .then(response => response.json())
            .then(respuesta => {
                respuesta.forEach(elemento => {
                    console.log(elemento)
                    totalCET = totalCET + elemento.caloriasAlimento
                });
                document.getElementById("CET").innerText = totalCET + " Cal"
                console.log("CET: ", totalCET);
            });
    } catch (e) {
        console.log("CET: ", e)
    }
}
