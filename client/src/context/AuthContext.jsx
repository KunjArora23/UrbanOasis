import { createContext } from "react";
import { useState } from "react";

const AuthContext = createContext();

function AuthContextProvider({ children }) {


    
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // State to track user login status
    


    const value = {
        isUserLoggedIn, // Expose the login status to the context consumers
        setIsUserLoggedIn, // Function to update the login status
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


export { AuthContext, AuthContextProvider };