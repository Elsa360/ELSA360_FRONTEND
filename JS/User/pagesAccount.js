async function desactivarCuenta(id) {
    try {
        if (document.getElementById("accountActivation").checked === true) {
            let url = apiServer + "usuario/eliminar"
            await fetch(url, {
                method: 'PATCH',
                body: JSON.stringify({
                    idusuario: id,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((resultado) => {
                    if (resultado === -1) {
                        window.location.href = mainUrl + "index.html";
                    } else {
                        console.log("Ah ocurrido algun error al eliminar el registro");
                    }
                });
        }
    } catch (e) {
        console.log("Error: " + e);
    }
}
(function datosPerfil() {
    idusuario = localStorage.getItem('login');
    let url = apiServer + "perfil/datosusuario?idusuario=" + idusuario + ""
    try {
        fetch(url)
            .then((response) => response.json())
            .then((respuesta) => {
                console.log(respuesta);
                respuesta.forEach(elemento => {
                    document.getElementById("nombreUsuarioPageAccount").innerText = (elemento.nombreUsuario)
                    document.getElementById("emailUsuarioPageAccount").innerText = (elemento.emailUsuario)
                    document.getElementById("sexoUsuarioPageAccount").innerText = (elemento.sexo)
                    document.getElementById("pesoUsuarioPageAccount").innerText = (elemento.peso) + " Kg"
                    document.getElementById("pesoDeseadoUsuarioPageAccount").innerText = (elemento.pesoObjetivo) + " Kg"
                    document.getElementById("estaturaUsuarioPageAccount").innerText = (elemento.estatura) + " cm"
                    document.getElementById("nacimientoUsuarioPageAccount").innerText = (elemento.fechaNacimiento)
                    document.getElementById("dietaUsuarioPageAccount").innerText = (elemento.fkTipoDieta)
                    document.getElementById("cuerpoUsuarioPageAccount").innerText = (elemento.fkTipoCuerpo)
                    document.getElementById("porqueUsuarioPageAccount").innerText = (elemento.fkPorque) 
                    document.getElementById("nivelUsuarioPageAccount").innerText = (elemento.fkNivelDeportivo) 
                    document.getElementById("escalaUsuarioPageAccount").innerText = (elemento.fkEscalaDeportiva) 
                });
            });

    } catch (e) {
        console.log("Error: " + e);
    }
})();



