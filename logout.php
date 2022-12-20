<?php
session_start();
session_destroy();
?>
<html>
<head>
<script>
sessionStorage.clear();
localStorage.clear();
console.log("listo");
window.location.href= "/";
</script>
</head>
<body>
</body>
</html>
