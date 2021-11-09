import React, {useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context";


function NavBar(){
    const{isAuth,setIsAuth} = useContext(AuthContext);
    return (
     
            <nav>
                <div class="nav-wrapper">
                <a href="#" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right">
                    <li><Link to="./users">Users</Link></li>
                    <li><Link to = "./devices">Devices</Link></li>
                    <li><Link to = "./posts">Posts</Link></li>
                    <li><Link to = "./login">Login</Link></li>
                    <li><a onClick={()=>setIsAuth(false)}><i class="material-icons">exit_to_app</i>Log Out</a></li>
                </ul>
                </div>
            </nav>
   
      
      
    );
}

export default NavBar;
