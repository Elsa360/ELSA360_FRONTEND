console.log("SERVER: "+window.location.hostname);
var dataBaseServer = "";
var apiServer="";
switch (window.location.hostname) { 
    case "127.0.0.1":
    case "localhost":
        apiServer="https://localhost:7155/";
        break;
    case "elsa360.com":
        apiServer="";
        break;


    default:
        break;
}

