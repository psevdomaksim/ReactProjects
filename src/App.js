import React, { useEffect, useState} from "react"
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import AppRoutes from "./components/AppRoutes";
import AuthContext from "./context";

function App(){

    const [isAuth,setIsAuth] = useState(false);
   useEffect(()=>{
        if(localStorage.getItem("auth")){
            setIsAuth(true)
        }

   },[])

    return(
        <AuthContext.Provider
        value={{    
            isAuth,
            setIsAuth
        }}
        >
            <BrowserRouter>
                <NavBar/>
                <AppRoutes/>
            </BrowserRouter>
        </AuthContext.Provider>

    )
}


export default App;
