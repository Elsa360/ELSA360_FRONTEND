<?php
session_start();
?>
<html>
<body>
  <script src="assets/vendor/libs/jquery/jquery.js"></script>
  <script src="JS/enviroment.js"></script>
  <script src="JS/customTask.js"></script>
  <script src="JS/User/user.js"></script>
  <script >
  enviarEMail(sessionStorage.email, sessionStorage.idusuario);
  </script>
</body>
