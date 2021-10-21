import React, { useState } from "react"
import UserList from "../components/UserList"

function Users(){
  const [showFormUser, setShowFormUser] = useState(false);
  const [users, setUsers] = useState([
    {
      id:1,
      name: "torontotokyo",
      phone: "chin chopa)"

    },
    {
      id:2,
      name: "yatoro",
      phone: ")))"

    },
    {
      id:3,
      name: "collapse",
      phone: "taxi"

    },
    {
      id:4,
      name: "miroslaw",
      phone: "666"

    },
    {
      id:5,
      name: "miposhka",
      phone: "gryaaa"

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

  const addUser =  () =>{
  
    setUser({...user,id:Math.random() * 1})
    setUsers([...users,user]);
    clear();
  }

  const clear = () =>{
    setUser({name:"",phone:""})
  }

 const deleteUser=(id)=>{
   const confirm = window.confirm("Ты действительно хочешь удалить?")
   if(confirm) setUsers(users.filter((user) => user.id !== id))
 };




    return (
      <div className="App">
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
              <a className="waves-effect waves-light right btn m-1"
              onClick={()=>clear()}>
                Cancel</a>
            </div>
            </> }
            </div>
          </div>
           <UserList search removeUser={deleteUser}>{users}</UserList>        
         </div>
        </div>
      
      
    );
}


export default Users;
