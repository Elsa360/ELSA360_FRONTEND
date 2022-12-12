<?php session_start(); ?>
<?php
print_r($_SESSION);
print_r($_REQUEST);
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
    if(getUrlParameter('preapproval_plan_id')===false)
    {
      console.log("No es pmercadopago");
    }
    else {
      //MercadoPago
      switch(getUrlParameter('preapproval_plan_id')) {

        //test https://www.mercadopago.com.co/subscriptions/checkout?preapproval_plan_id=2c93808484ed6a680184f38db52004d9
        case "2c93808484ed6a680184f38db52004d9":
        dias=365;
        break;
        //semestre https://www.mercadopago.com.co/subscriptions/checkout?preapproval_plan_id=2c9380848383e02f0183f09d6b204835
        case "2c9380848383e02f0183f09d6b204835":
        dias=180;
        break;
        //año https://www.mercadopago.com.co/subscriptions/checkout?preapproval_plan_id=2c93808483e8f4f20183f09c184205f4
        case "2c93808483e8f4f20183f09c184205f4":
        dias=365;
        break;
        //trimestre https://www.mercadopago.com.co/subscriptions/checkout?preapproval_plan_id=2c93808483ee1a580183f09abc84010d
        case "2c93808483ee1a580183f09abc84010d":
        dias=90;
        break;
      }


      console.log("apiServer:"+apiServer);
      url =  apiServer + "transaccion/finalizarCompra?"+
        "idUsuario=<?php echo $_SESSION["idUsuario"];?>"+
        "&dias="+dias
      console.log("url:");
      console.log(url);
      fetch(url)
      .then(response => response.json())
      .then(respuesta =>{
        console.log(respuesta)

      });

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
