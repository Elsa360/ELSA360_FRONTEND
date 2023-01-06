function irapagar(meses) {
    let membresia = "";
    let linkpago = "";
    switch (meses) {
        case 3:
            membresia = "Trimestral";
            linkpago = "https://www.mercadopago.com.co/subscriptions/checkout?preapproval_plan_id=2c93808483ee1a580183f09abc84010d";
            dias = 90;
            valor = 130000;
            break;
        case 6:
            membresia = "Semestral";
            linkpago = "https://www.mercadopago.com.co/subscriptions/checkout?preapproval_plan_id=2c9380848383e02f0183f09d6b204835";
            dias = 180;
            valor = 220000;
            break;
        case 12:
            membresia = "Anual";
            linkpago = "https://www.mercadopago.com.co/subscriptions/checkout?preapproval_plan_id=2c93808483e8f4f20183f09c184205f4";
            dias = 300;
            valor = 300000;
            break;
        default:
            console.log("Perdon, hubo un error con tu seleccion");
    }

    location.href = "checkout.html?linkpago=" + linkpago + "&tiempo=" + dias + "&precio=" + valor + "&membresia=" + membresia + "";
}


function irapagardesdeinicio(meses) {
    let membresia = "";
    let linkpago = "";
    let origen = "inicio"
    switch (meses) {
        case 3:
            membresia = "Trimestral";
            linkpago = "https://www.mercadopago.com.co/subscriptions/checkout?preapproval_plan_id=2c93808483ee1a580183f09abc84010d";
            dias = 90;
            valor = 130000;
            break;
        case 6:
            membresia = "Semestral";
            linkpago = "https://www.mercadopago.com.co/subscriptions/checkout?preapproval_plan_id=2c9380848383e02f0183f09d6b204835";
            dias = 180;
            valor = 220000;
            break;
        case 12:
            membresia = "Anual";
            linkpago = "https://www.mercadopago.com.co/subscriptions/checkout?preapproval_plan_id=2c93808483e8f4f20183f09c184205f4";
            dias = 300;
            valor = 300000;
            break;
        default:
            console.log("Perdon, hubo un error con tu seleccion");
    }
    localStorage.setItem("pago", "checkout.html?linkpago=" + linkpago + "&tiempo=" + dias + "&precio=" + valor + "&membresia=" + membresia + "&origen=" + origen + "")
    location.href = "html/vertical-menu-template/checkout.html?linkpago=" + linkpago + "&tiempo=" + dias + "&precio=" + valor + "&membresia=" + membresia + "&origen=" + origen + "";

}