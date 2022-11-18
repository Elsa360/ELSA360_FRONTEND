async function listar() {
    // console.log(apiServer)
    let tabla = "perfilUsuario";
    let campo = "*";
    let filtro = "1=1";
    let url = "https://" + apiServer + ":7155/CRUD/listar?tabla=" + tabla + "&filtro=" + filtro + "&campos=" + campo + "";
    await fetch(url)
        .then(response => response.json())
        .then(resultado => {
            resultado.forEach(datos => {
                console.log(datos);
            });
        })
}