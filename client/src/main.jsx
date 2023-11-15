import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-xnthbrmce0clrgej.uk.auth0.com"
      clientId="PIPvvoADGa7Anc7afNeGltM1bSVCxXIz"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {" "}
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
