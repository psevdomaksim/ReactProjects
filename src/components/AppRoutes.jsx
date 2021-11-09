import React, { useContext, useState} from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import  Users from "../pages/Users"
import  Devices from "../pages/Devices"
import  Posts from "../pages/Posts"
import  Login from "../pages/Login"
import AuthContext from "../context"
const AppRoutes = () =>{
    const {isAuth} = useContext(AuthContext);
    
        return(
        isAuth?

       <Switch>
            <Route exact path="/users" component={Users}/>
            <Route path="/devices" component={Devices}/>
            <Route path="/posts" component={Posts}/>
            <Redirect to="/users"/>
        </Switch>
        :
        <Switch>
            <Route path="/login" component={Login}/>
            <Redirect to="/login"/>
        </Switch>
        )
}
export default AppRoutes


