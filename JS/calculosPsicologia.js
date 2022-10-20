function traerAlimentosRegulares() {
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
                imgAlimento.src = "../../assets/img/alimentosReg/" + alimento.idAlimento + ".png";
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
                inputPorcion.id = alimento.idAlimento;
                inputPorcion.min = 0;
                inputPorcion.max = 6;
                inputPorcion.step = "0.5";
                inputPorcion.style = "width: 100px; margin-left: auto; margin-right: auto;";
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


        });
}
function traerAlimentosVegetarianos() {
    // fetch('http://www.apielsa.somee.com/alimentoVegular/listar')
    fetch('https://localhost:7155/alimentoVegetariano/listar')
        .then((response) => response.json())
        .then((listaAlimentosVegetarianos) => {
            console.log("Promesas");
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
                console.log(alimento);
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
                inputPorcion.id = alimento.idAlimento;
                inputPorcion.min = 0;
                inputPorcion.max = 6;
                inputPorcion.step = "0.5";
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
                    imgAlimento.src = "../../assets/img/alimentosReg/" + alimento.fkIdAlimentoRegularSlcnn + ".png";
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
                    else if (alimento.idGrupoAlimenticio === 2) {
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
function traerRutinas() {
    try {

        //Imagen y mensaje de la rutina de estiramiento o ejercicio
        const valores = window.location.search;
        const urlParams = new URLSearchParams(valores);
        var tipoRutina = urlParams.get('rutina');
        var tipo = urlParams.get('tipo');
        console.log(tipoRutina)
        console.log(tipo)
        let img;
        let tituloRutina;
        if (tipoRutina === 'fullbody' && tipo === 'estiramiento') {
            tituloRutina = "Estiramiento de cuerpo completo"
            img = 'FullBodyStretch';
        }
        if (tipoRutina === 'postentreno' && tipo === 'estiramiento') {
            tituloRutina = "Estiramiento para entrenar"
            img = 'stretchTrain';
        }
        if (tipoRutina === 'fullbody' && tipo === 'entrenamiento') {
            tituloRutina = "Rutina de cuerpo completo"
            img = 'fullbodyRoutine';
        }
        if (tipoRutina === 'treninferior' && tipo === 'entrenamiento') {
            tituloRutina = "Rutina para el tren inferior"
            img = 'lowerBody';
        }
        if (tipoRutina === 'trensuperior' && tipo === 'entrenamiento') {
            tituloRutina = "Rutina para el tren superior"
            img = 'upperBody';
        }
        if (tipoRutina === 'core' && tipo === 'entrenamiento') {
            tituloRutina = "Fortalecimiento de CORE"
            img = 'core';
        }
        document.getElementById("nombreRutina").innerText = tituloRutina;
        document.getElementById("imagenFondo").setAttribute("src", "../../assets/img/pages/" + img + ".jpg")

        //Traer datos de la DB
        fetch("http://localhost:7155/rutinaEjercicioFisico/traer?nivel=1&escala=1&rutina=fullbody")
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));


        //Mensaje Inicial
        let tituloMensaje = document.createElement("span");
        tituloMensaje.innerText = "Preparate para iniciar";
        tituloMensaje.className = "badge rounded-pill bg-label-success";
        let h5Mensaje = document.createElement("h5");
        h5Mensaje.className = "card-title mb-0";
        h5Mensaje.appendChild(tituloMensaje);
        let divTituloInicial = document.createElement("div");
        divTituloInicial.className = "card-header d-flex justify-content-between align-items-center flex-wrap";
        divTituloInicial.appendChild(h5Mensaje);


        let MensajeInicial = document.createElement("p");
        MensajeInicial.innerText = "Mensaje Incial";
        MensajeInicial.className = "mb-2";
        let divMensajeInicial = document.createElement("div");
        divMensajeInicial.className = "card-body"
        divMensajeInicial.appendChild(MensajeInicial);

        let contendorMensajeInicial = document.createElement("div");
        contendorMensajeInicial.className = "timeline-event card p-0";
        contendorMensajeInicial.appendChild(divTituloInicial);
        contendorMensajeInicial.appendChild(divMensajeInicial);

        let liMensajeInicial = document.createElement("li");
        liMensajeInicial.className = "timeline-item mb-md-4 mb-5";
        liMensajeInicial.appendChild(contendorMensajeInicial);

        //Mensaje Final
        let tituloFinal = document.createElement("span");
        tituloFinal.innerText = "Paso final";
        tituloFinal.className = "badge rounded-pill bg-label-success";
        let h5TituloFinal = document.createElement("h5");
        h5TituloFinal.className = "card-header";
        h5TituloFinal.appendChild(tituloFinal);

        let mensajeFinal = document.createElement("p");
        mensajeFinal.innerText = "mensajeFinal";
        mensajeFinal.className = "mb-2";
        let contenedorMensajeFinal = document.createElement("div");
        contenedorMensajeFinal.className = "card-body";
        contenedorMensajeFinal.appendChild(mensajeFinal);

        let contendorFinal = document.createElement("div");
        contendorFinal.className = "timeline-event card p-0";
        contendorFinal.appendChild(h5TituloFinal);
        contendorFinal.appendChild(contenedorMensajeFinal);

        let liContenedorMensajeFinal = document.createElement("li");
        liContenedorMensajeFinal.className = "timeline-item mb-md-4 mb-5";
        liContenedorMensajeFinal.appendChild(contendorFinal);




        //Tarjeta del Ejercicio
        //Nombre Tarjeta
        let nombre = document.createElement("span");
        nombre.innerText = "Saltos de Tijera";
        nombre.className = "badge rounded-pill bg-label-success";
        let contenedorH5 = document.createElement("h5");
        contenedorH5.className = "card-title mb-0";
        contenedorH5.appendChild(nombre);
        let contenedorNombre = document.createElement("div");
        contenedorNombre.className = "card-header d-flex justify-content-between align-items-center flex-wrap";
        contenedorNombre.appendChild(contenedorH5);

        //Cuerpo Tarjeta
        //Contenedor Video
        let video = document.createElement("iframe");
        video.width = "560";
        video.height = "315";
        video.src = "https://www.youtube.com/embed/iSSAk4XCsRA";
        video.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";

        let contenedorVideo = document.createElement("div");
        contenedorVideo.className = "video-responsive";
        contenedorVideo.appendChild(video);

        //Contenedor Acordeon 
        let buttonAcordeon = document.createElement("button");
        buttonAcordeon.className = "accordion-button";
        buttonAcordeon.style = "color: #9BCB3B;";
        buttonAcordeon.setAttribute("data-bs-target", "#accordionOne");
        buttonAcordeon.setAttribute("data-bs-toggle", "collapse");
        buttonAcordeon.setAttribute("aria-expanded", "true")
        buttonAcordeon.setAttribute("aria-controls", "accordionOne");
        buttonAcordeon.innerText = "Descripción ejercicio";

        let contendorButton = document.createElement("h2");
        contendorButton.className = "accordion-header";
        contendorButton.id = "headingOne";
        contendorButton.appendChild(buttonAcordeon);

        let descripcion = document.createElement("div");
        descripcion.innerText = "Descripcion del ejercicio";
        descripcion.className = "accordion-body";
        let contenedorDescripcion = document.createElement("div");
        contenedorDescripcion.className = "accordion-collapse collapse";
        contenedorDescripcion.id = "accordionOne";
        contenedorDescripcion.appendChild(descripcion);

        let contenedorBtnAcordeon = document.createElement("div");
        contenedorBtnAcordeon.className = "card accordion-item mb-3";
        contenedorBtnAcordeon.appendChild(contendorButton);
        contenedorBtnAcordeon.appendChild(contenedorDescripcion);

        //Contenedor Tabla
        //Encabezado
        let thSeries = document.createElement("th");
        thSeries.innerText = "SERIES";
        let thRepeticion = document.createElement("th");
        thRepeticion.innerText = "REPETICIONES";
        let thDescanso = document.createElement("th");
        thDescanso.innerText = "RIR";
        let filaEncabezado = document.createElement("tr");
        filaEncabezado.appendChild(thSeries);
        filaEncabezado.appendChild(thRepeticion);
        filaEncabezado.appendChild(thDescanso);
        let theadTabla = document.createElement("thead");
        theadTabla.className = "table-light";
        theadTabla.appendChild(filaEncabezado);

        //Cuerpo
        let tdSeries = document.createElement("td");
        tdSeries.innerText = "4";
        let tdRepeticion = document.createElement("td");
        tdRepeticion.innerText = "5";
        let tdDescanso = document.createElement("td");
        tdDescanso.innerText = "2";
        let filaCuerpo = document.createElement("tr");
        filaCuerpo.appendChild(tdSeries);
        filaCuerpo.appendChild(tdRepeticion);
        filaCuerpo.appendChild(tdDescanso);
        let bodyTabla = document.createElement("tbody");
        bodyTabla.className = "table-border-bottom-0";
        bodyTabla.appendChild(filaCuerpo);

        //Agregar datos a la tabla
        let tabla = document.createElement("table");
        tabla.className = "table ta-sm text-center";
        tabla.appendChild(theadTabla);
        tabla.appendChild(bodyTabla);

        let contendorTabla = document.createElement("div");
        contendorTabla.className = "table-responsive text-nowrap";
        contendorTabla.appendChild(tabla);

        //Agregar datos contendor principal de la tabla
        let contenedorPrincipalTabla = document.createElement("div");
        contenedorPrincipalTabla.className = "card";
        contenedorPrincipalTabla.appendChild(contendorTabla);

        //Agregar contenedores al cuerpo de la tarjeta
        let cuerpoTarjeta = document.createElement("div");
        cuerpoTarjeta.className = "card-body";
        cuerpoTarjeta.appendChild(contenedorVideo);
        cuerpoTarjeta.appendChild(contenedorBtnAcordeon);
        cuerpoTarjeta.appendChild(contenedorPrincipalTabla);


        //Principal
        let contenedorPrincipal = document.createElement("div")
        contenedorPrincipal.className = "timeline-event card p-0";
        contenedorPrincipal.appendChild(contenedorNombre);
        contenedorPrincipal.appendChild(cuerpoTarjeta);

        //Items
        let ItemEjercicio = document.createElement("span")
        ItemEjercicio.innerText = "1";
        ItemEjercicio.className = "timeline-indicator timeline-indicator-primary";

        //Lista
        let liEjercicio = document.createElement("li")
        liEjercicio.appendChild(ItemEjercicio);
        liEjercicio.appendChild(contenedorPrincipal);
        liEjercicio.className = "timeline-item mb-md-4 mb-5";

        //Item a la lista
        let listado = document.getElementById("listado");
        listado.appendChild(liMensajeInicial);
        listado.appendChild(liEjercicio);
        listado.appendChild(liContenedorMensajeFinal);

    } catch (e) {
        console.log(e);
    }
}

function entrevistaInicialDia1() {
    try {
        // Pregunta 1
        var p1 = parseInt(document.getElementById("pregunta1Psico").value);
        // Pregunta 2
        var p2 = parseInt(document.getElementById("pregunta2Psico").value);
        // Pregunta 3
        var p3 = parseInt(document.getElementById("pregunta3Psico").value);
        // Pregunta 4
        var p4 = parseInt(document.getElementById("pregunta4Psico").value);
        // Preguntas 5
        var p5a = parseInt(document.getElementById("pregunta5APsico").value);
        var p5b = parseInt(document.getElementById("pregunta5BPsico").value);
        var p5c = parseInt(document.getElementById("pregunta5CPsico").value);
        //Preguntas 6
        var p6a = parseInt(document.getElementById("pregunta6APsico").value);
        var p6b = parseInt(document.getElementById("pregunta6BPsico").value);
        var p6c = parseInt(document.getElementById("pregunta6CPsico").value);
        // Preguntas 7
        var p7a = parseInt(document.getElementById("pregunta7APsico").value);
        var p7b = parseInt(document.getElementById("pregunta7BPsico").value);
        var p7c = parseInt(document.getElementById("pregunta7CPsico").value);
        var sumatoria = p1 + p2 + p3 + p4 + (p5a + p5b + p5c) + (p6a + p6b + p6c) + (p7a + p7b + p7c);

        const valores = window.location.search;
        const urlParams = new URLSearchParams(valores);
        var email = urlParams.get('email');
        fetch('https://www.elsa360.com/perfil/idPerfil', {
            method: 'GET',
            body: JSON.stringify({
                emailUsuario: email,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((idPerfil) => {
                fetch('url', {
                    method: 'POST',
                    body: JSON.stringify({
                        nombreTest: 'entrevista inicial',
                        subtituloTest: 'parte 1',
                        resultadoTest: sumatoria,
                        conclusionesTest: "",
                        fkPerfilUsuarioTest: idPerfil,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((json) => console.log(json));
            });
        location.href = "html/vertical-menu-template/app-planPsicologico.html?" + email

    } catch (e) {
        console.log(e, 'Funcion -> Entrevista Inicial Dia 1');
    }

}
function entrevistaInicialDia2() {
    try {
        // Pregunta 8
        var p8 = document.getElementById("pregunta8Psico").value;
        // Pregunta 9
        var p9 = document.getElementById("pregunta9Psico").value;
        // Pregunta 10
        var p10 = parseInt(document.getElementById("pregunta10Psico").value);
        // Pregunta 11
        var p11 = parseInt(document.getElementById("pregunta11Psico").value);
        // Preguntas 12
        var p12a = parseInt(document.getElementById("pregunta12APsico").value);
        var p12b = parseInt(document.getElementById("pregunta12BPsico").value);
        var p12c = parseInt(document.getElementById("pregunta12CPsico").value);
        //Preguntas 13
        var p13a = document.getElementById("pregunta13APsico").value;
        var p13b = document.getElementById("pregunta13BPsico").value;
        // Preguntas 14
        var p14aD = document.getElementById("pregunta14APsico").value;
        var p14bD = document.getElementById("pregunta14BPsico").value;
        var p14cD = document.getElementById("pregunta14CPsico").value;

        var p14aF = document.getElementById("pregunta14DPsico").value;
        var p14bF = document.getElementById("pregunta14EPsico").value;
        var p14cF = document.getElementById("pregunta14FPsico").value;

        var sumatoria = p10 + p11 + (p12a + p12b + p12c);
        const valores = window.location.search;
        const urlParams = new URLSearchParams(valores);
        var email = urlParams.get('email');
        fetch('https://www.elsa360.com/perfil/idPerfil', {
            method: 'GET',
            body: JSON.stringify({
                emailUsuario: email,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((idPerfil) => {
                fetch('url', {
                    method: 'POST',
                    body: JSON.stringify({
                        nombreTest: 'entrevista inicial',
                        subtituloTest: 'parte 2',
                        resultadoTest: sumatoria,
                        conclusionesTest: "",
                        fkPerfilUsuarioTest: idPerfil,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((json) => console.log(json));
            });
        location.href = "html/vertical-menu-template/app-planPsicologico.html?" + email
    } catch (e) {
        console.log(e, 'Funcion -> Entrevista Inicial Parte 2')
    }
}
function listaEstresores() {
    try {
        var estresor1 = document.getElementById("pregunta15APsico").value;
        var estresor2 = document.getElementById("pregunta15BPsico").value;
        var estresor3 = document.getElementById("pregunta15CPsico").value;
        var estresor4 = document.getElementById("pregunta15DPsico").value;
        var estresor5 = document.getElementById("pregunta15EPsico").value;
        const valores = window.location.search;
        const urlParams = new URLSearchParams(valores);
        var email = urlParams.get('email');
        fetch('https://www.elsa360.com/perfil/idPerfil', {
            method: 'GET',
            body: JSON.stringify({
                emailUsuario: email,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((idPerfil) => {
                fetch('url', {
                    method: 'POST',
                    body: JSON.stringify({
                        nombreTest: 'Lista de Estresores',
                        subtituloTest: 'Lista de Estresores',
                        resultadoTest: sumatoria,
                        conclusionesTest: "",
                        fkPerfilUsuarioTest: idPerfil,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((json) => console.log(json));
            });
        location.href = "html/vertical-menu-template/app-planPsicologico.html?" + email
    } catch (e) {
        console.log(e, 'Funcion -> Lista de Estresores');
    }


}
function objetivosRealizacion() {
    try {
        var obj1 = document.getElementById("pregunta16APsico").value;
        var obj2 = document.getElementById("pregunta16BPsico").value;
        var obj3 = document.getElementById("pregunta16CPsico").value;
        const valores = window.location.search;
        const urlParams = new URLSearchParams(valores);
        var email = urlParams.get('email');
        fetch('https://www.elsa360.com/perfil/idPerfil', {
            method: 'GET',
            body: JSON.stringify({
                emailUsuario: email,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((idPerfil) => {
                fetch('url', {
                    method: 'POST',
                    body: JSON.stringify({
                        nombreTest: 'Objetivos de realizacion',
                        subtituloTest: 'Lista de Estresores',
                        resultadoTest: sumatoria,
                        conclusionesTest: "",
                        fkPerfilUsuarioTest: idPerfil,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((json) => console.log(json));
            });
        location.href = "html/vertical-menu-template/app-planPsicologico.html?" + email
    } catch (e) {
        console.log(e, 'Funcion -> Objetivos de realizacion');
    }
}
function necesidadAceptacion() {
    try {
        var p1 = parseInt(document.getElementById("pregunta17Psico").value);
        var p2 = parseInt(document.getElementById("pregunta18Psico").value);
        var p3 = parseInt(document.getElementById("pregunta19Psico").value);
        var p4 = parseInt(document.getElementById("pregunta20Psico").value);
        var p5 = parseInt(document.getElementById("pregunta21Psico").value);
        var p6 = parseInt(document.getElementById("pregunta22Psico").value);
        var p7 = parseInt(document.getElementById("pregunta23Psico").value);
        var sumatoria = p1 + p2 + p3 + p4 + p5 + p6 + p7
        const valores = window.location.search;
        const urlParams = new URLSearchParams(valores);
        var email = urlParams.get('email');
        fetch('https://www.elsa360.com/perfil/idPerfil', {
            method: 'GET',
            body: JSON.stringify({
                emailUsuario: email,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((idPerfil) => {
                fetch('url', {
                    method: 'POST',
                    body: JSON.stringify({
                        nombreTest: 'Test de creencias irracionales',
                        subtituloTest: 'Necesidad de aceptacion',
                        resultadoTest: sumatoria,
                        conclusionesTest: "",
                        fkPerfilUsuarioTest: idPerfil,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((json) => console.log(json));
            });
        location.href = "html/vertical-menu-template/app-planPsicologico.html?" + email

    } catch (e) {
        console.log(e, 'Funcion -> Necesidad de aceptacion');
    }

}
function altasAutoexpectativas() {
    try {
        var p1 = parseInt(document.getElementById("pregunta24Psico").value);
        var p2 = parseInt(document.getElementById("pregunta25Psico").value);
        var p3 = parseInt(document.getElementById("pregunta26Psico").value);
        var p4 = parseInt(document.getElementById("pregunta27Psico").value);
        var p5 = parseInt(document.getElementById("pregunta28Psico").value);
        var sumatoria = p1 + p2 + p3 + p4 + p5;
        const valores = window.location.search;
        const urlParams = new URLSearchParams(valores);
        var email = urlParams.get('email');
        fetch('https://www.elsa360.com/perfil/idPerfil', {
            method: 'GET',
            body: JSON.stringify({
                emailUsuario: email,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((idPerfil) => {
                fetch('url', {
                    method: 'POST',
                    body: JSON.stringify({
                        nombreTest: 'Test de creencias irracionales',
                        subtituloTest: 'Altas autoexpectativas',
                        resultadoTest: sumatoria,
                        conclusionesTest: "",
                        fkPerfilUsuarioTest: idPerfil,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((json) => console.log(json));
            });
        location.href = "html/vertical-menu-template/app-planPsicologico.html?" + email
    } catch (e) {
        console.log(e, 'Funcion -> Altas autoexpectativas')
    }
}


function culpabilizacion() {
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6;
    document.getElementById("resultadoTest").innerHTML = resultado;
}
function intoleranciaFrustracion() {
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6;
    document.getElementById("resultadoTest").innerHTML = resultado;
}
function preocupacionAnsiedad() {
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var resultado = p1 + p2 + p3 + p4 + p5;
    document.getElementById("resultadoTest").innerHTML = resultado;
}
function irresponsabilidadEmocional() {
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var p7 = parseInt(document.getElementById("pregunta7").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6 + p7;
    document.getElementById("resultadoTest").innerHTML = resultado;
}
function evitacionProblemas() {
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var resultado = p1 + p2 + p3;
    document.getElementById("resultadoTest").innerHTML = resultado;
}
function dependencia() {
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6;
    document.getElementById("resultadoTest").innerHTML = resultado;
}
function indefension() {
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
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var resultado = p1 + p2 + p3 + p4 + p5;
    document.getElementById("resultadoTest").innerHTML = resultado;
}
function cualidadesDebilidadesTecFis() {
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
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6;
    document.getElementById("resultadoTest").innerHTML = resultado;

}
function afrontamientoNeg() {
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6;
    document.getElementById("resultadoTest").innerHTML = resultado;
}
function controlAtencional() {
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6;
    document.getElementById("resultadoTest").innerHTML = resultado;
}
function controlVisuoImaginativo() {
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6;
    document.getElementById("resultadoTest").innerHTML = resultado;
}
function nivelMotivacional() {
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6;
    document.getElementById("resultadoTest").innerHTML = resultado;
}
function afrontamientoPos() {
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6;
    document.getElementById("resultadoTest").innerHTML = resultado;
}
function controlActitudinal() {
    var p1 = parseInt(document.getElementById("pregunta1").value);
    var p2 = parseInt(document.getElementById("pregunta2").value);
    var p3 = parseInt(document.getElementById("pregunta3").value);
    var p4 = parseInt(document.getElementById("pregunta4").value);
    var p5 = parseInt(document.getElementById("pregunta5").value);
    var p6 = parseInt(document.getElementById("pregunta6").value);
    var resultado = p1 + p2 + p3 + p4 + p5 + p6;
    document.getElementById("resultadoTest").innerHTML = resultado;
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
        var hoy = new Date().getDay()
        for(let i=0;i<hoy;i++){
            if((i+1)!=hoy){
                var e = document.getElementById("dia"+(i+1))
                e.hidden = true
            }
        }
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
                
                document.getElementById("horasEntrenamiento1").innerHTML = totalHoras;
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
        document.getElementById("DisponibilidadDias1").innerHTML = totalDias;
    } catch (e) {
        console.log(e, "Error enviar dias disponibles")
    }
};

function confirmarDisponibilidad(){
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json; charset=UTF-8");

        Requests.post("/disponibilidad/crear",{
            fkIdPerfilUsuarioDS: 1,
            lunes: parseInt(document.getElementById("dia1").value) || 0,
            martes: parseInt(document.getElementById("dia2").value) || 0,
            miercoles: parseInt(document.getElementById("dia3").value) || 0,
            jueves: parseInt(document.getElementById("dia4").value) || 0,
            viernes: parseInt(document.getElementById("dia5").value) || 0,
            sabado: parseInt(document.getElementById("dia6").value) || 0,
            domingo: parseInt(document.getElementById("dia7").value) || 0,
            totalHorasSemana: document.getElementById("horasEntrenamiento1").value,
            totalDiasSemana: document.getElementById("DisponibilidadDias1").value,
        },myHeaders)
    } catch (e) {
        console.log(e, "Error enviar dias disponibles")
    }
}