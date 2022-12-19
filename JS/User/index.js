let auth0 = null;
const fetchAuthConfig = () => fetch("/auth_config.json");

const configureClient = async () => {
    const response = await fetchAuthConfig();
    const config = await response.json();

    auth0 = await createAuth0Client({
      domain: config.domain,
      client_id: config.client_id
    });
  };
  window.onload = async () => {
    await configureClient();
  }

function loginUsuario() {
    try {
        auth0.loginWithRedirect({
            redirect_uri: window.location.
                origin + '/html/vertical-menu-template/dashboard.html'
         }).then(token => {
            //logged in. you can get the user profile like this:
            auth0.getUser().then(user => {
              window.sessionStorage.setItem("prueba",user);
            });
        })

    } catch (e) {
        console.log(e, 'Funcion -> Login Usuario');
    }

}


const requireAuth = async (fn, targetUrl) => {
    const isAuthenticated = await auth0.isAuthenticated();

    if (isAuthenticated) {
      return fn();
    }

    return window.location.origin;
  };

window.onload = async () => {
    await configureClient()
    const isAuthenticated = await auth0.isAuthenticated();

    if (isAuthenticated) {
      // show the gated content
      return;
    }

    // NEW - check for the code and state parameters
    const query = window.location.search;
    if (query.includes("code=") && query.includes("state=")) {

      // Process the login state
      await auth0.handleRedirectCallback();
      auth0.getUser().then(user => {
        window.sessionStorage.setItem("user",JSON.stringify(user));
      });


      // Use replaceState to redirect the user away and remove the querystring parameters
    //   window.history.replaceState({}, document.title, "/");
    }
  };
