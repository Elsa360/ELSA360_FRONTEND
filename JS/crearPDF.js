function alimentos_pdf() {
    let idperfil=sessionStorage.getItem('perfil');
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    const momento = urlParams.get('momento');
    let momentocomida=momento;
    try {
        let fecha = new Date().toLocaleDateString("en-US")
        // Alimentos elegidos
        let tablaElegidos = document.getElementById('alimentosElegidos');
        let cuerpoTabla = document.createElement('tbody');
        let url = apiServer + "alimentoRegularSeleccionado/pdf?momento="+momentocomida+"&idPerfil="+idperfil+"&fecha='"+fecha+"'"
        fetch(url)
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