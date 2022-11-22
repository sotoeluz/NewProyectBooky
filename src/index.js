import React from "react"; 
import ReactDOM from "react-dom";
import { App } from './App';
import { Auth0Provider } from '@auth0/auth0-react';



ReactDOM.render(
    <React.StrictMode>
    <Auth0Provider 
     domain="bookyapp.us.auth0.com" 
     clientId="AbShIBF7mqi1P4ux4uEzzmpE4ndotxpP" 
     redirectUri={window.location.origin}
     >

      <App />
    </Auth0Provider>
    </React.StrictMode>,
    document.getElementById("root")

);

export default App();


