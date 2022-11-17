async function listar(){
    // console.log(apiServer)
    let tabla="rol";
    let campo="*";
    let filtro="idRol=1";
    let url = "https://"+apiServer+":7155/listar/general?tabla="+tabla+"&filtro="+filtro+"&campos="+campo+"";
    await fetch(url)
    .then(response=>response.json())
    .then(resultado=>{
        for(let i=0;i<=resultado.length;i++){
            console.log(resultado[1]);
        }
       
    })
}