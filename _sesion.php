<?php
session_start();
switch ($_REQUEST["action"]) {
  case 'login':
    $_SESSION["idUsuario"]=$_REQUEST["idusuario"];
    break;

  case 'logout':
    session_destroy();
    break;

  default:
  if (isset($_SESSION["idUsuario"])) {
    echo $_SESSION["idUsuario"];
  }else {
    echo 0;
  }
    break;
}
echo TRUE;
?>
