function traerAlimentosRegulares() {
    // traerAlimRegSelecc();
    // fetch('http://www.apielsa.somee.com/alimentoRegular/listar')
    fetch('https://localhost:7155/alimentoRegular/listar')
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

            // seleccionarAlimentosRegulares();
            // FoodsEnergyRegularSelection();
            // FoodsProteinRegularSelection()

        });

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
        fetch('https://localhost:7155/alimentoRegularSeleccionado/listar')
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
                fetch('https://localhost:7155/alimentoRegularSeleccionado/crear', {
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
        // location.href = window.location.origin + '/html/vertical-menu-template/tables-selected-foods.html'
    } catch (error) {
        console.log(error);
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
function alimentosLocalStorage() {
    const foodSelections = document.querySelectorAll("input[type=number]");
    console.log(foodSelections);
    for (let i = 0, food; food = foodSelections[i++];) {
        if (food.value !== "") {
            let idAli = food.id;
            localStorage.setItem("idAlimento_" + i + "", parseInt(idAli.slice(4)));
            localStorage.setItem("Porciones_" + i + "", parseInt(document.getElementById(idAli).value));
        }
    }
}






// localStorage.clear;
// const porcionesRequeridasEnergeticos = 15;
// document.getElementById("porcionesReqEnergSelecc").innerText = porcionesRequeridasEnergeticos;
// const porcionesRequeridasProteicos = 15;
// document.getElementById("porcionesRequeProteSelecc").innerText = porcionesRequeridasProteicos;
// const porcionesRequeridasLacteos = 15;
// document.getElementById("porcionesRequeLactSelecc").innerText = porcionesRequeridasLacteos;
// const porcionesRequeridasFrutasVerduras = 15;
// document.getElementById("porcionesFrutasVerdRequeSelecc").innerText = porcionesRequeridasFrutasVerduras;
// const porcionesRequeridasGrasasSaludables = 15;
// document.getElementById("porcionesRequeGrasaSelecc").innerText = porcionesRequeridasGrasasSaludables;

var totalCalorias = 0;

var totalporcionesEnergeticos;
var porcentajeEnergetico;

var totalporcionesProteicos;
var porcentajeProteicos;

var totalporcionesLacteos;
var porcentajeLacteos;

function FoodsEnergyRegularSelection() {
    const inpustEnergySelection = document.querySelectorAll("#tablaEnergeticos input[type=number]");
    const inpustDairySelection = document.querySelectorAll("#tablaLacteos input[type=number]");
    const inpustFruitsAndVegetablesSelection = document.querySelectorAll("#tablaFrutyVeg input[type=number]");
    const inpustFatsSelection = document.querySelectorAll("#tablaGrasasSalud input[type=number]");
    const inpustOtherFoodsSelection = document.querySelectorAll("#tablaOtrosSelecc input[type=number]");

    console.log('Energeticos:', inpustEnergySelection.length);
    console.log('Lacteos: ', inpustDairySelection.length);
    console.log('Frutas: ', inpustFruitsAndVegetablesSelection.length);
    console.log('Grasas: ', inpustFatsSelection.length);
    console.log('Otros: ', inpustOtherFoodsSelection.length);

    inpustEnergySelection.forEach(inputSelect => {
        inputSelect.addEventListener('change', function (e) {
            totalCalorias = 0;
            totalporcionesEnergeticos = 0
            porcentajeEnergetico = 0;
            for (let i = 1; i <= inpustEnergySelection.length; i++) {
                try {
                    let idcalorias = "calSel_" + i.toString();
                    let idporciones = "regSel_" + i.toString();
                    let calorias = parseFloat(document.getElementById(idcalorias).innerHTML);
                    numPorciones = parseInt(document.getElementById(idporciones).value);
                    if (isNaN(numPorciones) !== true) {
                        totalCalEnerg = parseFloat(calorias) * numPorciones;
                        totalCalorias = totalCalorias + totalCalEnerg;
                        totalporcionesEnergeticos = totalporcionesEnergeticos + numPorciones;
                        porcentajeEnergetico = totalporcionesEnergeticos / porcionesRequeridasEnergeticos;
                    }
                    if ((totalporcionesEnergeticos == porcionesRequeridasEnergeticos)) {
                        for (let j = 1; j <= inpustEnergySelection.length; j++) {
                            document.getElementById("regSel_" + j).disabled = true;
                        }
                    }

                } catch (error) {
                    console.log(error)
                }
            }
            //Total Porciones Energeticos Seleccionados
            localStorage.clear;
            localStorage.setItem('prcnsAlmntsRglrsSlccnds', totalporcionesEnergeticos);
            localStorage.setItem('clrsAlmntsRglrsSlccnds', totalCalorias);

            document.getElementById("porcionesElegEnergSelecc").innerHTML = totalporcionesEnergeticos;
            document.getElementById("barraEnergeticosSeleccionados").style = "width: " + ((porcentajeEnergetico * 100).toFixed(2)) + "%"
            document.getElementById("lblEnergeticsSeleccionados").innerHTML = ((porcentajeEnergetico * 100).toFixed()) + "%";

            // --------------------------------------------------------------------------------------------------------------------------






            // --------------------------------------------------------------------------------------------------------------------------
            //Total Calorias CET vs GET
            document.getElementById("caloriasSeleccionadas").innerHTML = totalCalorias.toFixed(2);
            caloriasReq = parseInt(document.getElementById("caloriasRequeridas").innerHTML);
            let caloriasTotales = totalCalorias / caloriasReq;

            document.getElementById("barraCalorias").style = "width: " + ((caloriasTotales * 100).toFixed(2)) + "%"
            document.getElementById("lblBarraCalorias").innerHTML = ((caloriasTotales * 100).toFixed()) + "%"
        });
    });
}
function FoodsProteinRegularSelection() {
    const inpustProteinSelection = document.querySelectorAll("#tablaProteicos input[type=number]");
    console.log('Proteicos: ', inpustProteinSelection.length);
    inpustProteinSelection.forEach(inputSelect => {
        inputSelect.addEventListener('change', function (e) {
            totalInputsSeletcFoods = parseInt(document.querySelectorAll("input[type=number]").length);
            for (let i = 1; i <= totalInputsSeletcFoods; i++) {
                try {
                    let idcalorias = "calSel_" + i.toString();
                    let idporciones = "regSel_" + i.toString();
                    let calorias = parseFloat(document.getElementById(idcalorias).innerHTML);
                    numPorciones = parseInt(document.getElementById(idporciones).value);
                    if (isNaN(numPorciones) !== true) {
                        totalCalEnerg = parseFloat(calorias) * numPorciones;
                        totalCalorias = totalCalorias + totalCalEnerg;
                        totalporcionesEnergeticos = totalporcionesEnergeticos + numPorciones;
                        porcentajeEnergetico = totalporcionesEnergeticos / porcionesRequeridasEnergeticos;
                    }
                    if ((totalporcionesEnergeticos == porcionesRequeridasEnergeticos)) {
                        for (let j = 1; j <= inpustEnergySelection.length; j++) {
                            document.getElementById("regSel_" + j).disabled = true;
                        }
                    }

                } catch (error) {
                    console.log(error)
                }
            }
            console.log
            //Total Porciones Proteicos Seleccionados
            localStorage.clear;
            localStorage.setItem('prcnsAlmntsRglrsSlccnds', totalporcionesEnergeticos);
            localStorage.setItem('clrsAlmntsRglrsSlccnds', totalCalorias);

            document.getElementById("porcionesElegEnergSelecc").innerHTML = totalporcionesEnergeticos;
            document.getElementById("barraEnergeticosSeleccionados").style = "width: " + ((porcentajeEnergetico * 100).toFixed(2)) + "%"
            document.getElementById("lblEnergeticsSeleccionados").innerHTML = ((porcentajeEnergetico * 100).toFixed()) + "%";

            // --------------------------------------------------------------------------------------------------------------------------

        });
    });
}
function seleccionarAlimentosRegulares() {
    document.getElementById("porcionesRequeridasEnergeticos").innerHTML = porcionesRequeridasEnergeticos;
    const inpust = document.querySelectorAll("input[type=number]");
    inpust.forEach(input => {
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
                    if ((totalporcionesEnergeticos == porcionesRequeridasEnergeticos)) {
                        for (let j = 1; j <= energeticos; j++) {
                            document.getElementById("reg_" + j).disabled = true;
                        }
                    }

                } catch (error) {
                    console.log(error)
                }
            }
            //Total Porciones Energeticos
            // document.getElementById("porcionesElegEnergSelecc").innerHTML = totalporcionesEnergeticos;
            document.getElementById("porcionesElegidasEnergeticos").innerHTML = totalporcionesEnergeticos;

            // document.getElementById("barraEnergeticosSeleccionados").style = "width: " + ((porcentajeEnergetico * 100).toFixed(2)) + "%"
            document.getElementById("barraEnergeticos").style = "width: " + ((porcentajeEnergetico * 100).toFixed(2)) + "%"

            // document.getElementById("lblEnergeticsSeleccionados").innerHTML = ((porcentajeEnergetico * 100).toFixed()) + "%"
            document.getElementById("lblBarraPorcionEneregeticos").innerHTML = ((porcentajeEnergetico * 100).toFixed()) + "%"
            // --------------------------------------------------------------------------------------------------------------------------




            //Total de input Proteicos
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
                    if (totalporcionesProteicos === porcionesRequeridasProteicos) {
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
            lecheDeriv = document.querySelectorAll("#tablaLecheDerivados input[type=number]");
            lecheDerivBajos = document.querySelectorAll("#tablaLecheBajosGrasa input[type=number]");
            lacteos = lecheDeriv.length + lecheDerivBajos.length + proteicos;

            //Contador de porciones lacteos
            let totalporcionesLacteos = 0;

            //ID para mostrar los datos en las barras y su porcentaje
            let porcionesLacteosReque = parseInt(document.getElementById("porcionesRequeridasLacteos").innerHTML);
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
                        porcentajeLacteos = totalporcionesLacteos / porcionesLacteosReque;
                    }
                    if (totalporcionesLacteos === porcionesLacteosReque) {
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
            frutas = document.querySelectorAll("#tablaFrutas input[type=number]");
            verduras = document.querySelectorAll("#tablaVerduras input[type=number]");
            frutasVerduras = frutas.length + verduras.length + lacteos;

            //Contador de porciones lacteos
            let totalporcionesFrutasVerduras = 0;

            //ID para mostrar los datos en las barras y su porcentaje
            let porcionesFrutVerdReque = parseInt(document.getElementById("porcionesRequeridasFrutasVerduras").innerHTML);
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
                    porcentajeFrutasVerduras = totalporcionesFrutasVerduras / porcionesFrutVerdReque;
                }
                if (totalporcionesFrutasVerduras === porcionesFrutVerdReque) {
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
            frutoSecos = document.querySelectorAll("#tablaFrutosSecos input[type=number]");
            grasasPoliin = document.querySelectorAll("#tablaGrasasPoli input[type=number]");
            grasasMono = document.querySelectorAll("#tablaGrasasMono input[type=number]");
            grasaSaludables = frutoSecos.length + grasasPoliin.length + grasasMono.length + frutasVerduras;

            //Contador de porciones grasas saludables
            let totalporcionesGrasaSaludables = 0;

            //ID para mostrar los datos en las barras y su porcentaje
            let porcionesGrasaSaludReque = parseInt(document.getElementById("porcionesRequeridasGrasaSaludables").innerHTML);
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
                        porcentajeGrasaSaludables = totalporcionesGrasaSaludables / porcionesGrasaSaludReque;
                    }
                    if (totalporcionesGrasaSaludables === porcionesGrasaSaludReque) {
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
                caloriasReq = parseInt(document.getElementById("caloriasRequeridas").innerHTML);
                // console.log('Req', caloriasReq);
                // console.log('Sel', totalCalorias);
                if (totalCalorias > caloriasReq) {
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
            caloriasReq = parseInt(document.getElementById("caloriasRequeridas").innerHTML);
            let caloriasTotales = totalCalorias / caloriasReq;

            document.getElementById("barraCalorias").style = "width: " + ((caloriasTotales * 100).toFixed(2)) + "%"
            document.getElementById("lblBarraCalorias").innerHTML = ((caloriasTotales * 100).toFixed()) + "%"

        });
    });
}
function alimentos_pdf() {
    try {
        //Obtener fecha del sistema
        const fechaActual = new Date()
        ano = fechaActual.getFullYear();
        mes = fechaActual.getMonth() + 1;
        dia = fechaActual.getDate();
        console.log(ano);
        console.log(mes);
        console.log(dia);
        fecha = ano + '-' + mes + '-' + dia;
        console.log(fecha)

        // Alimentos elegidos
        let tablaElegidos = document.getElementById('alimentosElegidos');
        let cuerpoTabla = document.createElement('tbody');
        fetch('https://localhost:7155/alimentoRegularSeleccionado/pdf?fecha=' + fecha + '')
            .then((response) => response.json())
            .then((alimRegSelecc) => {
                alimRegSelecc.forEach(alimento => {
                    console.log(alimento);
                    //Imagen
                    let tdImage = document.createElement('td');
                    let imgAlimento = document.createElement("img");
                    imgAlimento.style = "width: 40px;"
                    imgAlimento.src = "../../assets/img/alimentosReg/" + alimento.idAlimentoSeleccionado + ".png";
                    tdImage.appendChild(imgAlimento);

                    //Nombre
                    let tdNombre = document.createElement('td');
                    let strongNombre = document.createElement('strong');
                    strongNombre.innerText = alimento.nombreAlimento;
                    tdNombre.appendChild(strongNombre);

                    //Peso Crudo
                    let tdPesoCrudo = document.createElement('td');
                    let spanPesoCrudo = document.createElement('span');
                    spanPesoCrudo.innerText = alimento.pesoCrudo;
                    spanPesoCrudo.className = "badge bg-label-danger me-1";
                    spanPesoCrudo.style = "font-size: 14px;";
                    tdPesoCrudo.appendChild(spanPesoCrudo)
                    tdPesoCrudo.className = "text-center";

                    //Peso Cocido
                    let tdPesoCocido = document.createElement('td');
                    let spanPesoCocido = document.createElement('span');
                    spanPesoCocido.innerText = alimento.pesoCocido;
                    spanPesoCocido.className = "badge bg-label-warning me-1";
                    spanPesoCocido.style = "font-size: 14px;";
                    tdPesoCocido.appendChild(spanPesoCocido)
                    tdPesoCocido.className = "text-center"


                    //Medida y Referencia Casera
                    let tdMedidaCasera = document.createElement("td");
                    let spanMedidaCasera = document.createElement('span');
                    let totalMedida = parseFloat(alimento.medida) * parseFloat(alimento.porciones);
                    spanMedidaCasera.innerText = totalMedida + "  " + alimento.referencia;
                    spanMedidaCasera.className = "badge bg-label-success me-1";
                    spanMedidaCasera.style = "font-size: 14px;";
                    tdMedidaCasera.appendChild(spanMedidaCasera);
                    tdMedidaCasera.className = "text-center";

                    //Agregar Elementos a la Fila
                    let fila = document.createElement('tr');
                    fila.appendChild(tdImage);
                    fila.appendChild(tdNombre);
                    fila.appendChild(tdPesoCrudo);
                    fila.appendChild(tdPesoCocido);
                    fila.appendChild(tdMedidaCasera);

                    //Agregar Fila al cuerpo de la tabla
                    cuerpoTabla.appendChild(fila);

                });
                tablaElegidos.appendChild(cuerpoTabla);
            });
    } catch (error) {
        console.log(error);
    }
}

window.onload = async () => {
    traerAlimentosRegulares();
};




