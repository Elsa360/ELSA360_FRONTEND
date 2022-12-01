function setServer(respuesta) {
    server = respuesta;
}
function getServer(){
    return server;
}
function initServer() {
    console.log("GetServer");
    fetch("https://elsa360.com/_server.php")
        .then(response => response.json())
        .then(respuesta => {
            console.log("Respuesta: "+respuesta)
            setServer(respuesta);
        });
}