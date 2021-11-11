import React, { useState, useEffect, useContext, useRef } from "react";
import MyModal from "../components/MyModal/MyModal";
import AuthContext from "../context";


const Login = () => {
   const loginData = {login:"qwe",password:"123"}
   const [error, setError] = useState("");
   localStorage.setItem("auth","");


   const checkData = () => {
     if(loginData.login=== inputData.login&&
      loginData.password=== inputData.password)  {
        localStorage.setItem("auth","true")
       setIsAuth(true)}
    else{setError("Wrong data")}
  }

/*   const ref = useRef();
  useEffect(()=>{
    ref.dispatchEvent(new KeyboardEvent('keypress', {
      key: 'Enter',
    }));

  },[]) */

    const [inputData, setInputData] = useState({
      login: "",
      password: "",
    });

    const onChange = (e) => {
     const field = {};
     field[e.target.id] = e.target.value
     setInputData({...inputData,...field})
     setError("");
    };


   const{isAuth,setIsAuth} = useContext(AuthContext);
 return(
   <>

    <form class="container">
      <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">login</i>
          <input id="login" type="text" class="validate"
          onChange={onChange}>

          </input>
         
        </div>
        </div>
        <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">password</i>
          <input id="password" type="password" class="validate" maxlength="25" size="40"
          onChange={onChange}
          ></input>
         </div>
        </div>
        {error && <h5 className="red-text text-draken-4">{error}</h5>}
        <a onClick={()=>checkData()} class="waves-effect waves-light btn">Login</a>
    </form>
</>
 );
  
};
export default Login;
