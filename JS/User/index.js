class Requests{
    static baseUrl = "http://www.apielsa.somee.com"

    static get(url,data={}){
        console.log($.param(data))
        return fetch(this.baseUrl+url+"?"+ $.param(data))
    }

    static async post(url, data={}, headers={}){
        let r = await fetch(this.baseUrl+url,{
            method: 'POST',
            // mode: 'no-cors',
            redirect: 'follow',
            headers: headers,
            body: JSON.stringify(data)
        })
        return r.json()
    }

    static async patch(url, data={}){
        return await fetch(this.baseUrl+url,{
            method: 'PATCH',
            // mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            redirect: 'follow',
        })
    }

    static async put(url, data={}){
        let r = await fetch(this.baseUrl+url,{
            method: 'PUT',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        return r.json()
    }
}

function registro() {
    try {
        if (document.getElementById("terms-conditions").checked === true) {
            let nombreUsuario = document.getElementById("username").value
            let emailUsuario = document.getElementById("email").value
            let passwordUsuario = document.getElementById("password").value
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json; charset=UTF-8");

            var data = {
                email: emailUsuario,
                passwordUser: passwordUsuario,
                nombreUsuario: nombreUsuario,
                fkIdRol: 4,
                ipPc: "00.00.00.00"
            }

            Requests.post("/usuario/crear", data, myHeaders)
                .then(response => response)
                .then(function(result){
                    if(result){
                        // window.location.href = "auth-login-basic.html"
                        sessionStorage.setItem('user', document.getElementById("username").value)
                        window.location.href = "auth-verify-email-basic-message.html"
                    }
                })
                .catch(error => console.log('error', error));
            // window.location.href = "auth-verify-email-basic-message.html?usuario=" + document.getElementById("username").value;
        } else {
            alert("Aceptar terminos y condiciones")
        }
    } catch (e) {
        console.log(e, 'Funcion -> Registro Usuario');
    }
}

function verificacionEmailUsaurio() {
    try {
        if(sessionStorage.getItem('user')){
            var nombreUsuario = sessionStorage.getItem('user');
            document.getElementById("mensajeVerificacion").innerHTML = "Hola " + nombreUsuario + ", te hemos enviado un link al correo electronico con el que te registraste."
        }else{
            window.location.href = "auth-login-basic.html"
        }
    } catch (e) {
        console.log(e, 'Funcion -> Verificar Email del Usuario')
    }
}

function usuarioVerificado() {
    try {
        const valores = window.location.search;
        const urlParams = new URLSearchParams(valores);
        var emailVerificado = urlParams.get('emailVerificado');
        console.log('Email:', emailVerificado)
        Requests.patch('/usuario/verificar', {
                email: emailVerificado,
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    } catch (e) {
        console.log(e, 'Funcion -> Usuario Verificado')
    }
}

function loginUsuario() {
    try {
        Requests.get('/usuario/loginUser', {
                usuario: document.getElementById("emailLogin").value,
                contra: document.getElementById("passwordLogin").value
        })
            .then((response) => response.json())
            .then((consulta) => {
                let remember = document.getElementById('remember-me').value
                if (consulta === 1) {
                    Requests.patch('/usuario/login', {
                            email: document.getElementById("emailLogin").value,
                            passwordUser: document.getElementById("passwordLogin").value,
                            loginUser: 1
                    })
                        .then((response) => response.json())
                        .then((json) => console.log(json));
                    sessionStorage.setItem('user', document.getElementById("emailLogin").value)
                    if(remember){
                        localStorage.setItem('user', document.getElementById("emailLogin").value)
                        localStorage.setItem('password', document.getElementById("passwordLogin").value)
                    }
                    window.location.href = "dashboard.html?email" + emailUsuario;
                }

            });

    } catch (e) {
        console.log(e, 'Funcion -> Login Usuario');
    }

}