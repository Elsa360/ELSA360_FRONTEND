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
        auth.loginWithRedirect({
            redirect_uri: window.location.origin + '/html/vertical-menu-template/dashboard.html'
         }).then(token => {
            //logged in. you can get the user profile like this:
            auth.getUser().then(user => {
              window.sessionStorage("prueba",user);
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

const login = async (targetUrl) => {
  try {
    console.log("Logging in", targetUrl);

    const options = {
      redirect_uri: window.location.origin
    };

    if (targetUrl) {
      options.appState = { targetUrl };
    }

    await auth0.loginWithRedirect(options);
  } catch (err) {
    console.log("Log in failed", err);
  }
};


const requireAuth = async (fn, targetUrl) => {
  const isAuthenticated = await auth0.isAuthenticated();

  if (isAuthenticated) {
    return fn();
  }

  return login(targetUrl);
};

window.onload = async () => {
  await configureClient();

  // If unable to parse the history hash, default to the root URL
  // if (!showContentFromUrl(window.location.pathname)) {
  //   showContentFromUrl("/");
  //   window.history.replaceState({ url: "/" }, {}, "/");
  // }

  const bodyElement = document.getElementsByTagName("body")[0];

  // Listen out for clicks on any hyperlink that navigates to a #/ URL
  bodyElement.addEventListener("click", (e) => {
    if (isRouteLink(e.target)) {
      const url = e.target.getAttribute("href");

      if (showContentFromUrl(url)) {
        e.preventDefault();
        window.history.pushState({ url }, {}, url);
      }
    }
  });

  const isAuthenticated = await auth0.isAuthenticated();

  if (isAuthenticated) {
    console.log("> User is authenticated");
    window.history.replaceState({}, document.title, window.location.pathname);
    return;
  }

  console.log("> User not authenticated");

  const query = window.location.search;
  const shouldParseResult = query.includes("code=") && query.includes("state=");

  if (shouldParseResult) {
    console.log("> Parsing redirect");
    try {
      const result = await auth0.handleRedirectCallback();

      if (result.appState && result.appState.targetUrl) {
        showContentFromUrl(result.appState.targetUrl);
      }

      console.log("Logged in!");
    } catch (err) {
      console.log("Error parsing redirect:", err);
    }

    window.history.replaceState({}, document.title, "/");
  }
};