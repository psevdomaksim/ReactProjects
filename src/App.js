import React, { useState } from "react"
import NavBar from "./components/Verstka/NavBar"


function App(){
  const [showFormUser, setShowFormUser] = useState(false);
  const [users, setUsers] = useState([
    {
      name: "pudge",
      phone: "chin chopa)"

    },
    {
      name: "terrorblade",
      phone: "666"

    },

  ])
  const [user, setUser] = useState({
    name: "",
    phone: ""
    }
  );

  const onChange = (event) =>{
    if(event.target.id =="name"){
      setUser({...user, name: event.target.value});
    }
    else {
      setUser({...user, phone: event.target.value});
      console.log('test')
    }
  
      
  }

  const addUser =()=>{
    setUsers([...users,user]);
    setUser({
      name:'',
      phone:'',
    });
  }

  console.log(user);
    return (
      <div className="App">
        <NavBar/>
        <div className="container">
        <div className="row m-1">
          <div className="col s4">
            <a class="waves-effect waves-light btn" 
            onClick={()=>setShowFormUser(!showFormUser)}
            >Add user</a>
          </div>


          <div className="col s8">
            {showFormUser &&
            <>
             <div className="input-field col s6">
              <i className="material-icons prefix">account_circle</i>
              <input
                id="name" 
                type="text"
                class="validate"
                value={user.name}
                placeholder="Enter Name"
               onChange={onChange}
                 />
              <a className="waves-effect waves-light btn m-1"
              onClick={()=>addUser()}
              >Add</a>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">phone</i>
              <input 
                id="phone" 
                type="tel" 
                value={user.phone}
                class="validate"
                placeholder="Enter Phone"
                onChange={onChange}/>
              <a className="waves-effect waves-light right btn m-1">Cancel</a>
            </div>
            </> }
          </div>
        </div>


        <table>
        <thead>
          <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Delete</th>
          </tr>
        </thead>

        <tbody>
         { users && users.map((user)=> <tr>
            <td>{user.name}</td>
            <td>{user.phone}</td>
            <td>DELETE</td>
          </tr>
          )}
        
        </tbody>
      </table>
            
      </div>
      </div>
      
      
    );
}


export default App;
