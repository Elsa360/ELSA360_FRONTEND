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
                        window.location.href = "wwww.elsa360.com/index.html";
                    } else {
                        console.log("Ah ocurrido algun error al eliminar el registro");
                    }
                });
        }
    } catch (e) {
        console.log("Error: " + e);
    }
}
async function datosPerfil(idusuario) {
    let url = apiServer + "perfil/usuario?idusuario=" + idusuario + ""
    try {
        await fetch(url)
            .then((response) => response.json())
            .then((respuesta) => {
                respuesta.forEach(elemento => {
                    console.log(elemento)
                });
            });

    } catch (e) {
        console.log("Error: " + e);
    }
}
window.onload = async () => {
    datosPerfil(1)
}