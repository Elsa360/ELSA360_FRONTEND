let auth = null
createAuth0Client({
    domain: '',
    client_id: ''
  }).then(auth0 => {
    auth = auth0
  });


function loginUsuario() {
    try {
        auth.loginWithRedirect({
            redirect_uri: window.location.origin + '/html/vertical-menu-template/dashboard.html'
         }).then(token => {
            //logged in. you can get the user profile like this:
            auth.getUser().then(user => {
              console.log(user);
            });
        })

    } catch (e) {
        console.log(e, 'Funcion -> Login Usuario');
    }

}

function logout(){
    try{
        auth.logout({
            returnTo: window.location.origin
        });
    }catch (e) {
        console.log(e, 'Funcion -> Logout')
    }
}