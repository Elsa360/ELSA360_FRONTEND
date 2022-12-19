<?php
session_start();
$_SESSION["preorder"]=true;
?>
<html>
<body>
  <script src="assets/vendor/libs/jquery/jquery.js"></script>
  <script src="JS/enviroment.js"></script>
  <script src="JS/customTask.js"></script>
  <script src="JS/User/user.js"></script>
  <script >

  //inicia sesion
  idUsuario = getUrlParameter('idUsuario');
  if(idUsuario==false)
  {
    idUsuario = <?php if (isset($_SESSION["idUsuario"])){echo $_SESSION["idUsuario"];}else{echo 0;} ?>;
    console.log("Usuario logueado");
  }
  else
  {
    loginNoPass(idUsuario);
    console.log("idUsuario:"+idUsuario);
    console.log("Usuario login ");
  }

  if(getUrlParameter('preapproval_plan_id')===false)
  {
    console.log("No es pmercadopago");
  }
  else {
    //MercadoPago

    sessionStorage.setItem('preapproval_plan_id', getUrlParameter('preapproval_plan_id'));
    ippc= "<?php echo $_SERVER["REMOTE_ADDR"];?>";
    plataforma = "MercadoPago";
    preapproval_plan_id = getUrlParameter('preapproval_plan_id');
    switch(preapproval_plan_id) {

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
    }
  }

  //crea la orden de compra y la transaccion
  console.log("apiServer:"+apiServer);
  url =  apiServer + "transaccion/iniciarlizarCompra?"+
    "idUsuario="+idUsuario+
    "&dias="+dias+
    "&monto="+monto+
    "&ippc="+ippc+
    "&plataforma="+plataforma;
  console.log("url:");
  console.log(url);
  fetch(url)
  .then(response => response.json())
  .then(respuesta =>{
    console.log(respuesta)
    // console.log(respuesta.idMembresia);
    // console.log(respuesta.idOrdenDeCompra);
    // console.log(respuesta.idTransaccion);
    // console.log(respuesta.idUsuario);

    if(respuesta.idTransaccion>0){
      valorBaseMembresia = monto;
      //tiempoMembresia = ;
      valorDescuento = 0;
      subTotalPagar = monto+valorDescuento;
      iva = monto * 0.19;
      totalPagar = valorBaseMembresia + valorDescuento +iva;

      uri = "/html/vertical-menu-template/checkout.html"
      params = "?valorBaseMembresia="+valorBaseMembresia+"&tiempoMembresia="+tiempoMembresia+"&valorDescuento="+valorDescuento+"&subTotalPagar="+subTotalPagar+"&iva="+iva+"&totalPagar="+totalPagar;
      params += "&emailUsuarioCheckout="+sessionStorage.email+"&nombreUsuario="+sessionStorage.nombreUsuario;
      localStorage.setItem("useruri",uri+params);

      if(sessionStorage.verificacion=='false')
      {
        enviarEMail(sessionStorage.email, sessionStorage.idusuario);
      }
      else
      {
        uri = localStorage.useruri;
        localStorage.removeItem("useruri");
        window.location.href= uri;
      }

    }
  });
  </script>
  Por favor espere ...
</body>
</html>
