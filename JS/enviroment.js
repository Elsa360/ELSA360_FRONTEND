console.log("SERVER: "+window.location.hostname);
var dataBaseServer = "";
var apiServer="";
switch (window.location.hostname) { 
    case "127.0.0.1":
    case "localhost":
        apiServer="https://localhost:7155/";
        token = "url para generar el token"
        break;
    case "elsa360.com":
        apiServer="http://54.193.8.32/";
        token = "url para generar el token"
        break;


    default:
        break;
}

