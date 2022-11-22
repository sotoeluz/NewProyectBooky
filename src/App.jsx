import React from "react";
import { LogoutButton } from "./Logout";
import { LoginButton } from "./Login";
import { Profile } from "./Profile";
import Card from './components/Card';




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




export default App; 