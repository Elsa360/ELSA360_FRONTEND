function setServer(respuesta) {
  console.log("set server");
  server = respuesta;
}
function getServer(){
  return server;
}

async function initServer() {
  console.log("GetServer");
  await fetch("https://elsa360.com/_server.php")
  .then(response => response.json())
  .then(respuesta => {
    console.log("Respuesta: "+respuesta)
    setServer(respuesta);
    return respuesta;
  });

    console.log("GetServer READY");
    console.log("server:"+server);
}


function getUriOnGet(){
  x = window.location.search;
  uri = x.split("uri=");
  return uri[1]
}



  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
    }
    return false;
  };
