function enviarEmailContacto() {
    $("#spinnerGeneral").show();
    let name = document.getElementById("nameUserContac").value;
    let mail = document.getElementById("emailUserContact").value;
    let phone = document.getElementById("phoneUserContact").value;
    let menssage = document.getElementById("messageUserContact").value;
    let url = apiServer + "contacto/enviarEmail?nombre=" + name + "&userEmail=" + mail + "&telefono=" + phone + "&mensaje=" + menssage + ""
    fetch(url)
        .then(response => response.json())
        .then(json => {
            if (json == true) {
                $("#spinnerGeneral").hide();
                $("#modalGeneral #modalCenterTitle").html("Mensaje enviado");
                $("#modalGeneral #modalMensaje").html("Tu mensaje ha sido enviado satisfactoriamente");
                $("#modalGeneral").modal("show");
                document.getElementById("nameUserContac").value = "";
                document.getElementById("emailUserContact").value = "";
                document.getElementById("phoneUserContact").value = "";
                document.getElementById("messageUserContact").value = "";
            }else{
                $("#spinnerGeneral").hide();
                $("#modalGeneral #modalCenterTitle").html("Mensaje enviado");
                $("#modalGeneral #modalMensaje").html("Error en el envio de mensaje, vuele a intentarlo");
                $("#modalGeneral").modal("show");
            }
        });
}