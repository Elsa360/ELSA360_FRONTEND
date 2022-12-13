<?php
session_start();
switch ($_REQUEST["action"]) {
  case 'login':
    if (isset($_REQUEST["idUsuario"])) {
    $_SESSION["idUsuario"]=$_REQUEST["idUsuario"];
    }
    elseif (isset($_REQUEST["idusuario"])) {
    $_SESSION["idUsuario"]=$_REQUEST["idusuario"];
    }
    $_SESSION["membresia"]=$_REQUEST["membresia"];
    $_SESSION["verificado"]=$_REQUEST["verificado"];
    echo json_encode($_SESSION);
    break;

  case 'logout':
    session_destroy();
    break;
  case 'show':

    print_r($_SESSION);
    break;

  default:
  if (isset($_SESSION["idUsuario"])) {
    echo json_encode($_SESSION);
  }else {
    echo FALSE;
  }
    break;
}
?>
