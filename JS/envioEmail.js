function enviarEmailContacto() {
    let name = document.getElementById("nameUserContac").value;
    let mail = document.getElementById("emailUserContact").value;
    let phone = document.getElementById("phoneUserContact").value;
    let menssage = document.getElementById("messageUserContact").value;

    let url = "https://localhost:7155/contacto/enviarEmail?nombre=" + name + "&userEmail=" + mail + "&telefono=" + phone + "&mensaje=" + menssage + ""
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))

    console.log("Email enviado");
}