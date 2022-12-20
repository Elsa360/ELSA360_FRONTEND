function cargadatos()
{
$("#valorBaseMembresia").html(formatter.format(getUrlParameter('valorBaseMembresia')));
$("#tiempoMembresia").html(getUrlParameter('tiempoMembresia'));
$("#valorDescuento").html(formatter.format(getUrlParameter('valorDescuento')));
$("#subTotalPagar").html(formatter.format(getUrlParameter('subTotalPagar')));
$("#iva").html(formatter.format(getUrlParameter('iva')));
$("#totalPagar").html(formatter.format(getUrlParameter('totalPagar')));
$("#nombreUsuario").html(getUrlParameter('nombreUsuario'));
$("#emailUsuarioCheckout").html(getUrlParameter('emailUsuarioCheckout'));

}
// A $( document ).ready() block.
$( document ).ready(function() {
  console.log("localStorage.idusuario");
  console.log(localStorage.idusuario);
  loginNoPass(localStorage.idusuario);
  cargadatos();
  get_store_uri();
});
// Create our number formatter.
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

//console.log(formatter.format(2500)); /* $2,500.00 */
function buscarCuponDescuento(){
  return false;
}


function get_store_uri()
{
  if(sessionStorage.preapproval_plan_id!= undefined)
  {

    uri = "https://www.mercadopago.com.co/subscriptions/checkout?preapproval_plan_id="+sessionStorage.preapproval_plan_id;
    if($("#formcheckout").length>0)
    {
      $("#formcheckout").attr('href', uri);
    }
    return uri;

  }
}
