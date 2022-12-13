async function listar() {
    let tabla = "alimentoRegular";
    let campo = "*";
    let filtro = "1=1";
    let url = apiServer + "CRUD/listar?tabla=" + tabla + "&filtro=" + filtro + "&campos=" + campo + "";
    await fetch(url)
        .then(response => response.json())
        .then(resultado => {
            datos = [];
            resultado.forEach(element => {
                dato = JSON.stringify(element);
                datos.push(dato.split('"'));
            });
            campo = [];
            datos.forEach(element => {
                element.forEach(subElement => {
                    if ((subElement !== "[") && (subElement !== "]" && (subElement !== ","))) {
                        campo.push(subElement);
                    }
                })
            });
            llave = [];
            campo.forEach(element => {
                llave.push(element.split(':'));
            });
            claves = [];
            valor = [];
            llave.forEach(element => {
                claves.push(element[0]);
                valor.push(element[1]);
            });
            for(let i=0;i<(claves.length);i++){
                console.log(claves[i]+":"+valor[i]);
            }
        });

}
