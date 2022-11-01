function calcularEdad(fecha) {
    try {
        const fechaNacimiento = fecha;
        //Datos Fecha Actual    
        const fechaActual = new Date();
        const anoActual = parseInt(fechaActual.getFullYear());
        const mesActual = parseInt(fechaActual.getMonth()) + 1;
        const diaActual = parseInt(fechaActual.getDate());
        //Datos Fecha Nacimiento
        const anoNacimiento = parseInt(String(fechaNacimiento).substring(0, 4));
        const mesNacimiento = parseInt(String(fechaNacimiento).substring(5, 7));
        const diaNacimiento = parseInt(String(fechaNacimiento).substring(8, 10));
        let edad = anoActual - anoNacimiento;
        if (mesActual < mesNacimiento) {
            edad--;
        } else if (mesActual === mesNacimiento) {
            if (diaActual < diaNacimiento) {
                edad--;
            }
        }
        // console.log(edad);
        return parseInt(edad);
    } catch (e) {
        console.log(e, "Error al calcular la edad");
    }
}


function registrarPerfilUsuario() {
    try {
        var sexoUsuario;
        if (document.getElementById("sexoHombre").checked === true) {
            sexoUsuario = 1;
        }
        if (document.getElementById("sexoMujer").checked === true) {
            sexoUsuario = 2;
        }
        var pesoActual = parseFloat(document.getElementById("pesoUsuario").value);
        var estaturaUsuario = parseFloat(document.getElementById("estaturaUsuario").value);
        var pesoDeseado = parseFloat(document.getElementById("pesoDeseado").value);
        var fechaNacUsuario = document.getElementById("fechaNacimiento").value;
        var edadUsuario = calcularEdad(fechaNacUsuario);
        var tipoDieta = document.getElementById("tipoDietaUsuario").value;
        var tipoCuerpo = document.getElementById("tipoCuerpoUsuario").value;
        var porque;
        if (document.getElementById("rendimiento").checked === true) {
            porque = 1;
        }
        if (document.getElementById("salud").checked === true) {
            porque = 2;
        }
        if (document.getElementById("entretenimiento").checked === true) {
            porque = 3;
        }
        var nivelDeportivo = document.getElementById("nivel").value;
        var escalaNivelDeportivo = document.getElementById("escala").value;
        var potenciometroUser = false;
        var pulsometroUser = false;
        var cadenciometroUser = false;
        var velocimetroUser = false;
        if (document.getElementById("potenciometro").checked === true) {
            potenciometroUser = true;
        }
        if (document.getElementById("pulsometro").checked === true) {
            pulsometroUser = true;
        }
        if (document.getElementById("cadenciometro").checked === true) {
            cadenciometroUser = true;
        }
        if (document.getElementById("velocimetro").checked === true) {
            velocimetroUser = true;
        }
        const valores = window.location.search;
        const urlParams = new URLSearchParams(valores);
        let user = JSON.parse(window.sessionStorage.getItem("user"))
        if(user === null){
            const valores = window.location.search;
            const urlParams = new URLSearchParams(valores);
            user = {
                email:urlParams.get('email'),
                email_verified: urlParams.get('verified')
            }
        }
        let isVerified = user.email_verified
        if(isVerified){
            Requests.get("/usuario/idUser", {
                email:user.email
            }).
            then((response) => response.json())
            .then(data=>{
                if(data.length == 0){
                    alert("Usuario no existe")
                }else{
                    window.sessionStorage.setItem("perfil", JSON.stringify({
                        sexo: sexoUsuario,
                        peso: pesoActual,
                        estatura: estaturaUsuario,
                        pesoObjetivo: pesoDeseado,
                        fechaNacimiento: fechaNacUsuario,
                        fkTipoDieta: tipoDieta,
                        fkTipoCuerpo: tipoCuerpo,
                        fkNivelDeportivo: parseInt(nivelDeportivo),
                        fkEscalaDeportiva: parseInt(escalaNivelDeportivo),
                        potenciometro: potenciometroUser,
                        pulsometro: pulsometroUser,
                        pulsometro: pulsometroUser,
                        velocimetro: velocimetroUser,
                        cadenciometro: cadenciometroUser,
                        fkPorque: porque,
                        fkUsuario: data[0].idUsuario,
                    }))
                    location.href = "free-data.html"
                }
            })
        }
    }
    catch (e) {
        console.log(e, 'Funcion -> Regsitro de Perfil')
    }

}

function guardarPeso(){
    const user = JSON.parse(window.sessionStorage.getItem("user"))
    if(user){
        Requests.get("/usuario/idUser", {
            email:user.email
        })
        .then(r=>r.json())
        .then(data=>{
            if(data.length == 0){
                alert("Usuario no existe")
            }else{
                const peso = document.getElementById("actualizarPeso").value
                Requests.patch("/perfil/actulizarPeso",{
                    IdPerfil:data[0].idUsuario,
                    nuevoPeso: peso
                })
                .then(r => r.json())
                .then(json=>{
                    alert("Informacion actualizada")
                })
            }
            
        })
        
    }else{
        location.href = "auth-login-basic.html"
    }
}

function guardarEntrenoPersonalizado(){
    const user = JSON.parse(window.sessionStorage.getItem("user"))
    if(user){
        Requests.get("/perfil/idPerfil", {
            email:user.email
        })
        .then(r=>r.json())
        .then(data=>{
            if(data.length == 0){
                alert("Usuario no existe")
            }else{
                const peso = document.getElementById("actualizarPeso").value
                Requests.post("/objetivoDeportivo/crear",{
                    "nombreObjetivo": document.getElementById("eventTitle").value,
                    "fechaObjetivo": document.getElementById("eventStartDate").value,
                    "fechaPrepa2": document.getElementById("fechaInicioEntreno").value,
                    "lugarObjetivo": document.getElementById("eventLocation").value,
                    "objetivo_1": document.getElementById("eventGoal1").value,
                    "objetivo_2": document.getElementById("eventGoal2").value,
                    "objetivo_3": document.getElementById("eventGoal3").value,
                    "comentarios": document.getElementById("eventDescription").value,
                    "fechaPrepa1": "",
                    "fkIdPerfilUsuarioObj": data[0].idPerfilUsuario,
                })
                .then(r => r.json())
                .then(json=>{
                    alert("Informacion actualizada")
                })
            }
            
        })
        
    }else{
        location.href = "auth-login-basic.html"
    }
}

function showSave(){
    document.getElementById("buttonSaveDate").hidden = false
}

function guardarEntreno(){
    const user = JSON.parse(window.sessionStorage.getItem("user"))
    if(user){
        Requests.get("/perfil/idPerfil", {
            email:user.email
        })
        .then(r=>r.json())
        .then(data=>{
            if(data.length == 0){
                alert("Usuario no existe")
            }else{
                const peso = document.getElementById("actualizarPeso").value
                Requests.post("/objetivoDeportivo/crear",{
                    "nombreObjetivo": "",
                    "fechaObjetivo": "",
                    "fechaPrepa2": "",
                    "lugarObjetivo": "",
                    "objetivo_1": "",
                    "objetivo_2": "",
                    "objetivo_3": "",
                    "comentarios": "",
                    "fechaPrepa1": document.getElementById("fechaInicioEntreno").value,
                    "fkIdPerfilUsuarioObj": data[0].idPerfilUsuario,
                })
                .then(r => r.json())
                .then(json=>{
                    alert("Informacion actualizada")
                })
            }
            
        })
        
    }else{
        location.href = "auth-login-basic.html"
    }
}