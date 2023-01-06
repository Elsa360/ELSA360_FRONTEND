window.onload = async () => {
    datosPago();
}
function datosPago() {

    document.getElementById("nombreUsuario").innerText = localStorage.getItem("nombreUsuario");
    document.getElementById("emailUsuarioCheckout").innerText = localStorage.getItem("email");
    const url = window.location.search;
    const urlParametros = new URLSearchParams(url);
    var link = urlParametros.get("linkpago");
    var base = parseFloat(urlParametros.get("precio"));
    var ref = urlParametros.get("membresia");
    document.getElementById("valorBaseMembresia").innerText = "$ "+ base;
    document.getElementById("tiempoMembresia").innerText = ref;
    let iva = base * 0.19;
    let neto = base + iva;
    document.getElementById("subTotalPagar").innerText = "$ " + base;
    document.getElementById("iva").innerText = "$ " + iva;
    document.getElementById("totalPagar").innerText = "$ " + neto;
    document.getElementById("formcheckout").setAttribute("href", link);
}