<html >
<body>
  <script>
    if (localStorage.useruri!=undefined) {
      location.href = localStorage.useruri;
    }
    else {
      location.href = "/html/vertical-menu-template/auth-login-basic.html?<?php echo $_SERVER["QUERY_STRING"]?>";
    }
  </script>
por favor espere
</body>
</html >
