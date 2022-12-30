async function desactivarCuenta() {
    $("#spinnerGeneral").show();
    let id =parseInt(localStorage.getItem('login'));
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
                        $("#spinnerGeneral").hide();
                        $("#modalGeneral #modalCenterTitle").html("Notificacion");
                        $("#modalGeneral #modalMensaje").html("El usuario ha sido eliminado correctamente");
                        $("#modalGeneral").modal("show");
                        localStorage.clear();
                        window.location.href = mainUrl + "inicio.html";
                    } else {
                        $("#spinnerGeneral").hide();
                        $("#modalGeneral #modalCenterTitle").html("Notificacion");
                        $("#modalGeneral #modalMensaje").html("Ha ocurrido un error, vuelve a intentarlo");
                        $("#modalGeneral").modal("show");
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
                    document.getElementById("dietaUsuarioPageAccount").innerText = (elemento.tipo)
                    document.getElementById("cuerpoUsuarioPageAccount").innerText = (elemento.cuerpo)
                    document.getElementById("porqueUsuarioPageAccount").innerText = (elemento.porque) 
                    document.getElementById("nivelUsuarioPageAccount").innerText = (elemento.nivelDeportivo) 
                    document.getElementById("escalaUsuarioPageAccount").innerText = (elemento.escalaDeportiva) 
                    if(elemento.potenciometro == false){
                        document.getElementById("potenciometro").checked = false;
                    }
                    if(elemento.pulsometro == false){
                        document.getElementById("pulsometro").checked = false;
                    }
                    if(elemento.cadenciometro == false){
                        document.getElementById("cadenciometro").checked = false;
                    }
                    if(elemento.velocimetro == false){
                        document.getElementById("velocimetro").checked = false;
                    }
                    if((elemento.potenciometro == false)&&(elemento.pulsometro == false)&&(elemento.cadenciometro == false)&&(elemento.velocimetro == false)){
                        document.getElementById("noTengo").checked = true;
                    }else{
                        document.getElementById("noTengo").checked = false;
                    }
                });
            });

    } catch (e) {
        console.log("Error: " + e);
    }
})();



