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

                    fetch("https://xybrx7ovc2.execute-api.us-west-1.amazonaws.com/1/",{
                        method: 'POST',
                        // mode: 'no-cors',
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*'
                          },
                        body: JSON.stringify({
                            title: membresiaURL + "|" + email,
                            quantity: 1,
                            unit_price: totalPagar
                        })
                    })
                    .then(r=> r.json())
                    .then(json=>{
                        mp.checkout({
                            preference: {
                              id: json.body.id
                            },
                            render: {
                              container: '.cho-container',
                              label: 'Pagar',
                            }  
                        });
                    })

                }
            })
        }
    }
    catch (e) {
        console.log(e, "Error Busqueda Cupon Descuento")
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
        const user = JSON.parse(window.sessionStorage.getItem('user'))
        if(user === null){
            location.href = "auth-login-basic.html"
        }
        let nombreCompleto = user.name;
        let email = user.email;

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
        
        fetch("https://xybrx7ovc2.execute-api.us-west-1.amazonaws.com/1/",{
            method: 'POST',
            // mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
              },
            body: JSON.stringify({
                title: membresiaURL + "|" + email,
                quantity: 1,
                unit_price: totalPagar
            })
        })
        .then(r=> r.json())
        .then(json=>{
            mp.checkout({
                preference: {
                  id: json.body.id
                },
                render: {
                  container: '.cho-container',
                  label: 'Pagar',
                }  
            });
        })
        
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