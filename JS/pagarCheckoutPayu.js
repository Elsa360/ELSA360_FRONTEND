window.onload = async () => {
    datosWebCheckout();
}
// SIN DESCUENTO
function datosPagoPayu(data) {

    document.getElementById("nombreUsuario").innerText = localStorage.getItem("nombreUsuario");
    document.getElementById("emailUsuarioCheckout").innerText = localStorage.getItem("email");
    const url = window.location.search;
    const urlParametros = new URLSearchParams(url);
    var base = parseFloat(urlParametros.get("precio"));
    var ref = urlParametros.get("membresia");
    document.getElementById("valorBaseMembresia").innerText = "$ " + base;
    document.getElementById("tiempoMembresia").innerText = ref;
    let iva = base * 0.19;
    let neto = base + iva;
    document.getElementById("subTotalPagar").innerText = "$ " + base;
    document.getElementById("iva").innerText = "$ " + iva;
    document.getElementById("totalPagar").innerText = "$ " + neto;

    // DATOS DEL PAGO
    console.log("Data: ", data[0]);
    console.log("Data: ", data[1]);
    console.log("Data: ", data[2]);
    document.getElementById("merchanid").value = data[0];
    document.getElementById("accountid").value = data[1];
    document.getElementById("signatureEncripter").value = data[2];
    let description = "";
    if (ref == "Trimestral") {
        description = "Pago membresia trimestral. Usuario:" + localStorage.getItem("nombreUsuario") + " / email: " + localStorage.getItem("email");
    }
    if (ref == "Semestral") {
        description = "Pago membresia semestral. Usuario:" + localStorage.getItem("nombreUsuario") + " / email: " + localStorage.getItem("email");
    }
    if (ref == "Anual") {
        description = "Pago membresia anual. Usuario:" + localStorage.getItem("nombreUsuario") + " / email: " + localStorage.getItem("email");
    }
    document.getElementById("descripcion").value = description;
    document.getElementById("referencecode").value = ref.toLowerCase() + localStorage.getItem("idusuario");
    document.getElementById("montototal").value = neto;
    document.getElementById("iva").value = iva;
    document.getElementById("montobase").value = base;
    document.getElementById("emailusauriocomprador").value = localStorage.getItem("email");
}
function datosWebCheckout() {
    const url = window.location.search;
    const urlParametros = new URLSearchParams(url);
    var base = parseFloat(urlParametros.get("precio"));
    let iva = base * 0.19;
    let neto = base + iva;
    var ref = urlParametros.get("membresia");
    let urlPayu = apiServer + "membresia/payu?referenceCode=" + (ref.toLocaleLowerCase() + localStorage.getItem("idusuario")) + "&monto=" + neto + "";
    try {
        fetch(urlPayu)
            .then(response => response.json())
            .then(datosPayu => {
                data = datosPayu;
                datosPagoPayu(data);
            });


    } catch (error) {

    }
}



// CON DESCUENTO
function verificarCodigoDescuento() {
    let codigo = (document.getElementById("codigoDescuento").value).toUpperCase();
    let url = apiServer + "cuponesDescuentos/busqueda?codigo=" + codigo + "";
    const urlP = window.location.search;
    const urlParametros = new URLSearchParams(urlP);
    let base = parseFloat(urlParametros.get("precio"));
    console.log("Base",base)
    fetch(url)
        .then(response => response.json())
        .then(codigoDesc => {
            if (codigoDesc.length > 0) {
                codigoDesc.forEach(descuento => {
                    pd = descuento.valorDescuento;
                    console.log("%Desc:",pd);
                    d=base*pd;
                    nbase = base-d;
                    console.log("Nueva Base:",nbase);
                    iva = nbase * 0.19;
                    console.log("IVA:",iva);
                    neto = nbase + iva;
                    console.log("Pagar:",neto);
                    var ref = urlParametros.get("membresia");
                    let urlPayu = apiServer + "membresia/payu?referenceCode=" + (ref.toLocaleLowerCase() + localStorage.getItem("idusuario")) + "&monto=" + neto + "";
                    try {
                        fetch(urlPayu)
                            .then(response => response.json())
                            .then(datosPayu => {
                                data = datosPayu;
                                datosPagoDescuentoPayu(d,nbase,iva,neto,data);
                            });
                
                
                    } catch (error) {
                
                    }

                });
            } else {
                console.log("No se encontro codigo de descuento");
            }

        });
}
function datosPagoDescuentoPayu(d,nbase,iva,pago, data) {

    document.getElementById("nombreUsuario").innerText = localStorage.getItem("nombreUsuario");
    document.getElementById("emailUsuarioCheckout").innerText = localStorage.getItem("email");
    const url = window.location.search;
    const urlParametros = new URLSearchParams(url);
    var ref = urlParametros.get("membresia");
    var base = urlParametros.get("precio");

    document.getElementById("valorBaseMembresia").innerText = "$ " + base;
    document.getElementById("tiempoMembresia").innerText = ref;
    document.getElementById("valorDescuento").innerText = " - $ " + d;
    document.getElementById("subTotalPagar").innerText = "$ " + nbase;
    document.getElementById("iva").innerText = "$ " + iva;
    document.getElementById("totalPagar").innerText = "$ " + pago;

    // DATOS DEL PAGO
    console.log("Data: ", data[0]);
    console.log("Data: ", data[1]);
    console.log("Data: ", data[2]);
    document.getElementById("merchanid").value = data[0];
    document.getElementById("accountid").value = data[1];
    document.getElementById("signatureEncripter").value = data[2];
    let description = "";
    if (ref == "Trimestral") {
        description = "Pago membresia trimestral. Usuario:" + localStorage.getItem("nombreUsuario") + " / email: " + localStorage.getItem("email");
    }
    if (ref == "Semestral") {
        description = "Pago membresia semestral. Usuario:" + localStorage.getItem("nombreUsuario") + " / email: " + localStorage.getItem("email");
    }
    if (ref == "Anual") {
        description = "Pago membresia anual. Usuario:" + localStorage.getItem("nombreUsuario") + " / email: " + localStorage.getItem("email");
    }
    document.getElementById("descripcion").value = description;
    document.getElementById("referencecode").value = ref.toLowerCase() + localStorage.getItem("idusuario");
    document.getElementById("montototal").value = pago;
    document.getElementById("iva").value = iva;
    document.getElementById("montobase").value = nbase;
    document.getElementById("emailusauriocomprador").value = localStorage.getItem("email");
}