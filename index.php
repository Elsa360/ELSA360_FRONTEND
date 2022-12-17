<?php
session_start();
if (isset($_REQUEST["idUsuario"])) {
  header("location:html/vertical-menu-template/dashboard.html");
}
esle
{
    header("location:inicio.html");
}
?>
