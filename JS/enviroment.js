console.log("SERVER: "+window.location.hostname);
var dataBaseServer = "";
var apiServer="";
switch (window.location.hostname) {
    case "127.0.0.1":
    case "localhost":
        apiServer="localhost";
        break;
    case "elsa360.com":
        break;


    default:
        break;
}

