<?php
session_start();
if (isset($_SESSION["idUsuario"])) {
  header("Location: html/vertical-menu-template/dashboard.html");
}
else
{
    header("Location: inicio.html");
}
?>
