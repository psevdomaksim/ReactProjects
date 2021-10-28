import React, { useState} from "react"
import { Route, Switch } from "react-router-dom"
import  Users from "../pages/Users"
import  Devices from "../pages/Devices"
import Loader from"react-loader-spinner"
const AppRoutes = () =>{
    const[loading, setLoading] = useState(true);
    setTimeout(()=>{
        setLoading(false)

    },3000)
    if (loading){
        return  (<Loader
        
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />)
    }
    return(
       <Switch>
            <Route path="/users" component={Users}/>
            <Route path="/devices" component={Devices}/>
        </Switch>
       
    )
}
export default AppRoutes


