let mp = null;
const fetchAuthConfig = () => fetch("/auth_config.json");

const configureClient = async () => {
    const response = await fetchAuthConfig();
    const config = await response.json();
  
    mp = new MercadoPago(config.apikey_mp, {
        locale: 'es-CO'
      });
  };
  window.onload = async () => {
    await configureClient();
  }

function buscarCuponDescuento() {
    try {
        let validacion = true;
        if (validacion === true) {
            const valores = window.location.search;
            const urlParams = new URLSearchParams(valores);
            let precioBase = parseFloat(urlParams.get('valor'));
            let codigoDescuento = document.getElementById("codigoDescuento").value;
            Requests.get("/cuponesDescuentos/busqueda",{
                codigo:codigoDescuento
            })
            .then(r=>r.json())
            .then(json=>{
                const data = json[0]
                const descuento = data.valorDescuento
                let valorDescuento = precioBase * descuento
                let subtotal = precioBase - valorDescuento;
                let iva = subtotal * 0.19;
                let totalPagar = subtotal + iva;
                if(data.codigo){
                    document.getElementById("codigoDescn").innerText = codigoDescuento;
                    document.getElementById("divDescuento").hidden = false
                    document.getElementById("valorDescuento").innerText =  "- $ " + (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'COP' }).format(valorDescuento));
                    document.getElementById("valorDescuento").hidden = false
                    document.getElementById("subTotalPagar").innerText = "$ " + (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'COP' }).format(subtotal));
                    document.getElementById("iva").innerText = "$ " + (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'COP' }).format(iva));
                    document.getElementById("totalPagar").innerText = "$ " + (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'COP' }).format(totalPagar));
                }
            })
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
        document.getElementById("divDescuento").hidden = true
        document.getElementById("valorDescuento").hidden = true

        // Datos del Webcheckout
        // document.getElementById("baseCheckout").value = precioBase;
        // document.getElementById("ivaCheckout").value = iva;
        // document.getElementById("totalPagarCheckout").value = totalPagar;
        // document.getElementById("buyUsuarioCheckout").value = email;
        // document.getElementById("firmaCheckout").value = "firma";
        // document.getElementById("numeroFactura").value = "numeroFactura";
        mp.checkout({
            plan: {
              id: '2c9380848383e02f0183f09d6b204835'
            },
            render: {
              container: '.cho-container',
              label: 'Pagar',
            }
          });
    } catch (e) {
        console.log(e);
    }

}

window.onload = async () => {
    await configureClient()
  
    // NEW - check for the code and state parameters
    const query = window.location.search;
    if (query.includes("valor=") && query.includes("membresia=")) {
  
        llenadoWebCheckout()

  
      // Use replaceState to redirect the user away and remove the querystring parameters
    //   window.history.replaceState({}, document.title, "/");
    }else{
        window.location.href = window.location.origin
    }
  };