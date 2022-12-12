<?php
session_start();
if (isset($_SESSION["idUsuario"])) {
  header("Location:".$_REQUEST["uri"]);
}
else {
    header("Location:/html/vertical-menu-template/auth-register-basic.html?uri=".$_REQUEST["uri"]);
}

?>
