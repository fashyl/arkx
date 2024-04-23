import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { Auth0ProviderWithNavigate } from './services/auth0'
import { Auth0Provider } from '@auth0/auth0-react'

  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}>
    <App />
      </Auth0Provider>
  </React.StrictMode>,
)
