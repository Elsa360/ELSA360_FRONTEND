<?php
session_start();
switch ($_REQUEST["action"]) {
  case 'login':
    $_SESSION["idUsuario"]=$_REQUEST["idusuario"];
    $_SESSION["membresia"]=$_REQUEST["membresia"];
    $_SESSION["verificado"]=$_REQUEST["verificado"];
    echo json_encode($_SESSION);
    break;

  case 'logout':
    session_destroy();
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
