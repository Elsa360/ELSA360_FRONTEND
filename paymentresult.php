<?php session_start(); ?>
<?php
if (isset($_REQUEST["checkoutform"])) {
  if ($_REQUEST["checkoutform"]=="true") {
    if($_REQUEST["codigoDescuento"]!="elsa35"){
      header("Location:/html/vertical-menu-template/checkout.html");
    }
  }
}
?>
<html>
<body>

  <script src="assets/vendor/libs/jquery/jquery.js"></script>
  <script src="JS/enviroment.js"></script>
  <script src="JS/customTask.js"></script>
  <script src="JS/User/user.js"></script>
  <script >
  <?php
  if(isset($_SESSION["idUsuario"]))
  {
    ?>
    //if(getUrlParameter('preapproval_plan_id')===false)
    if(false)
    {
      console.log("No es MercadoPago");
    }
    else {
      //MercadoPago

      switch(localStorage.preapproval_plan_id) {

        //test https://www.mercadopago.com.co/subscriptions/checkout?preapproval_plan_id=2c93808484ed6a680184f38db52004d9
        case "2c93808484ed6a680184f38db52004d9":
        dias=365;
        monto=1600;
        tiempoMembresia = "test";
        break;
        //semestre https://www.mercadopago.com.co/subscriptions/checkout?preapproval_plan_id=2c9380848383e02f0183f09d6b204835
        case "2c9380848383e02f0183f09d6b204835":
        dias=180;
        monto=220000;
        tiempoMembresia = "semestre";
        break;
        //año https://www.mercadopago.com.co/subscriptions/checkout?preapproval_plan_id=2c93808483e8f4f20183f09c184205f4
        case "2c93808483e8f4f20183f09c184205f4":
        dias=365;
        monto=300000;
        tiempoMembresia = "año";
        break;
        //trimestre https://www.mercadopago.com.co/subscriptions/checkout?preapproval_plan_id=2c93808483ee1a580183f09abc84010d
        case "2c93808483ee1a580183f09abc84010d":
        dias=90;
        monto=130000;
        tiempoMembresia = "trimestre";
        break;
        default:
        dias=365;
        monto=1600;
        tiempoMembresia = "test";
        break;
      }


      console.log("apiServer:"+apiServer);
      url =  apiServer + "transaccion/finalizarCompra?"+
        "idUsuario=<?php echo $_SESSION["idUsuario"];?>"+
        "&dias="+dias+
        "&respuesta=<?php echo str_replace('"',"'",json_encode($_REQUEST)); ?>"
      console.log("url:");
      console.log(url);
      fetch(url)
      .then(response => response.json())
      .then(respuesta =>{
        console.log(respuesta)

        valorBaseMembresia = monto;
        //tiempoMembresia = ;
        valorDescuento = 0;
        subTotalPagar = monto+valorDescuento;
        iva = monto * 0.19;
        totalPagar = valorBaseMembresia + valorDescuento +iva;

        uri = "/html/vertical-menu-template/CheckoutRespuesta.html"
        params = "?valorBaseMembresia="+valorBaseMembresia+"&tiempoMembresia="+tiempoMembresia+"&valorDescuento="+valorDescuento+"&subTotalPagar="+subTotalPagar+"&iva="+iva+"&totalPagar="+totalPagar;
        params += "&emailUsuarioCheckout="+sessionStorage.email+"&nombreUsuario="+sessionStorage.nombreUsuario




        console.log(uri+params);
        window.location.href= uri+params;
      });

      //alert("Listo");

    }
    <?php
  }
  else {
    ?>
    alert("No session de usuario;");

    <?php
  }
  ?>



  </script>
</body>
</html>

<?php


?>
