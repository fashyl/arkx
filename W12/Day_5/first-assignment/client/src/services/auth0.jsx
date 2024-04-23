import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export const Auth0ProviderWithNavigate = ({ children }) => {
  const navigate = useNavigate();

//   const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const domain = "dev-tnpa82piv8y5pi2f.us.auth0.com";
//   const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const clientId = "FGYhuuHpjrP7EbYoBpLxnTMR30dL5XQy";
//   const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL;
  const redirectUri = "http://localhost:5173/";

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
