function guardarPerilUsuario(){
    const perfil = JSON.parse(window.sessionStorage.getItem('perfil'))
        Requests.post('/perfil/crear', perfil,
    {
        'Content-type': 'application/json; charset=UTF-8',
    }
    )
    .then()
    .then((json) => {
        console.log(json)
        location.href = "pages-pricing.html"
    });
}


window.onload = async () =>{
    const perfil = JSON.parse(window.sessionStorage.getItem('perfil'))
    let sexo = perfil.sexo
    let tipoCuerpo = perfil.fkTipoCuerpo
    let tipoDieta = perfil.fkTipoDieta
    let pqMonta = perfil.fkPorque
    let nivelDeportivo = perfil.fkNivelDeportivo
    let subnivelDeportivo = perfil.fkEscalaDeportiva

    if(sexo){
        sexo="HOMBRE"
    }else{
        sexo="MUJER"
    }
    if (pqMonta==1) {
        pqMonta = "rendimiento";
    }
    if (pqMonta==2) {
        pqMonta = "salud";
    }
    if (pqMonta==3) {
        pqMonta = "entretenimiento";
    }
    document.getElementById("sexo").innerText = sexo
    document.getElementById("fechaNacimiento").innerText = perfil.fechaNacimiento
    document.getElementById("estatura").innerText = perfil.estatura
    document.getElementById("tipoCuerpo").innerText = perfil.fkTipoCuerpo 
    document.getElementById("tipoDieta").innerText = perfil.fkTipoDieta
    document.getElementById("pesoActual").innerText = perfil.peso
    document.getElementById("pesoFinal").innerText = perfil.pesoObjetivo
    document.getElementById("diferenciaPeso").innerText = perfil.peso - perfil.pesoObjetivo
    document.getElementById("pqMonta").innerText = pqMonta
    document.getElementById("nivelDeportivo").innerText = perfil.fkNivelDeportivo
    document.getElementById("subNivelDeportivo").innerText = perfil.fkEscalaDeportiva

}