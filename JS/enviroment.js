console.log("SERVER: " + window.location.hostname);
if (apiServer == undefined) {
  var dataBaseServer = "";
  var apiServer = "";
  var mainUrl = "";
  switch (window.location.hostname) {
    
    case "127.0.0.1":
      apiServer = "https://localhost:7155/";
      mainUrl = "http://127.0.0.1:8000/";
      break;
    case "localhost":
      apiServer = "https://localhost:7155/";
      mainUrl = "http://localhost:8000/";
      break;

    case "elsa360.com":
      apiServer = "https://api.elsa360.com/";
      mainUrl = "https://elsa360.com/";
      break;

    case "beta.elsa360.com":
      apiServer = "http://apibeta.elsa360.com/";
      mainUrl = "https://beta.elsa360.com/";
      break;

  }
}
