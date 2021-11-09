import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context";


const Login = () => {
   const{isAuth,setIsAuth} = useContext(AuthContext);
 return(
 
  
    <form class="container">
      <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">login</i>
          <input id="icon_prefix" type="text" class="validate"></input>
         
        </div>
        </div>
        <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">password</i>
          <input id="icon_telephone" type="password" class="validate" maxlength="25" size="40"></input>
         </div>
        </div>
        <a onClick={()=>setIsAuth(true)} class="waves-effect waves-light btn">Login</a>
    </form>

 )
  
};
export default Login;
