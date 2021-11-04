import React from "react"
import { Link } from "react-router-dom";


function NavBar(){
    return (
     
            <nav>
                <div class="nav-wrapper">
                <a href="#" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right">
                    <li><Link to="./users">Users</Link></li>
                    <li><Link to = "./devices">Devices</Link></li>
                    <li><Link to = "./posts">Posts</Link></li>
                </ul>
                </div>
            </nav>
   
      
      
    );
}

export default NavBar;
