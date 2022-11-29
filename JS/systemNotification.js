function notificacion(mensaje) {
    let url = apiServer + "contacto/emailNotificacion?mensaje=" + mensaje
    try {
        fetch(url)
            .then(response => response.json())
            .then(respuesta => console.log(respuesta));
    } catch (e) {
        console.log("Error: ", e)
    }

}