async function desactivarCuenta() {
    console.log("Funcion Activa");
    // let id = sessionStorage.getItem("idusuario")
    let id=12;
    try {
        if (document.getElementById("accountActivation").checked === true) {
            let url = "https://" + apiServer + ":7155/usuario/eliminar"
            fetch(url, {
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
                    if(resultado===-1){ 
                        window.location.href = "http://127.0.0.1:8000/index.html";
                    }else{
                        console.log("Ah ocurrido algun error al eliminar el registro");
                    }
                });
        }
    } catch (e) {
        console.log("Error: " + e);
    }
}
async function datosPerfil(){
    let url = ""
    try {
       await fetch(url)
        .then((response) => response.json())
        .then((json) => console.log(json));
        
    } catch (e) {
        console.log("Error: "+e);
    }
}