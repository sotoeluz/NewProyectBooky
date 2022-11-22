import React from "react";
import { LogoutButton } from "./Logout";
import { LoginButton } from "./Login";
import { Profile } from "./Profile";

import Cards from './components/Cards';
import './App.css';






function App() {
    const {isAuthenticated } = useAuth0();

    return (
        <div className="App">
            <header className= "App-header">
                
               {isAuthenticated ? (
               <>
                <Profile />
                <LogoutButton />
               
               </> 
                ) : (
                 <LoginButton/>
                )}


        
            </header>


        </div>


    );

}


function App() {
  return (
    <div className="App">
        <Cards />
    </div>
   
  )
}

export default App; 
